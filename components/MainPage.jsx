// /components/MainPage.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteTrip, getTrips } from "@/utils/tripsFunctions";
import TripCard from "./TripCard";

const MainPage = () => {
  const router = useRouter();
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      const response = await getTrips();

      setTrips(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      const response = await deleteTrip(id);

      if (response.deletedCount === 1) {
        const newTrips = trips.filter((trip) => trip._id !== id);
        setTrips(newTrips);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateTrip = (id) => {
    router.push(`/trips/edit?id=${id}`);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <>
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
    <div className="flex justify-center items-center h-[50px] mb-[100px]">
        <h1 className="text-3xl italic font-bold text-green-500">TripMania</h1>
    </div>
    <div className="p-4 flex flex-wrap gap-4">
      {trips?.map((trip) => (
        <div
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={trip._id}
        >
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {trip.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {trip.description}
          </p> */}
          <TripCard tripName={trip.title} onClick={() => alert(trip.description)} isSelected={true} />

          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleUpdateTrip(trip._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleDeleteTrip(trip._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default MainPage;