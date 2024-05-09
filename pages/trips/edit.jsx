// /pages/trips/edit.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { tripDefaultValues } from "@/utils/constants";
import { getTripById, updateTrip } from "@/utils/tripsFunctions";
import TripForm from "@/components/TripForm";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(tripDefaultValues);

  const getTrip = async (id) => {
    const data = await getTripById(id);

    if (data) {
      setEntry(data);
    }

    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    const response = await updateTrip(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to update trip");
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    getTrip(id);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {entry._id ? (
        <TripForm data={entry} onSubmit={onSubmit}/>
      ) : (
        <div className="text-center">Trip not found</div>
      )}
    </>
  );
};

export default Edit;