// /pages/trips/create.jsx

import TripForm from "@/components/TripForm";
import { tripDefaultValues } from "@/utils/constants";
import { createTrip } from "@/utils/tripsFunctions";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();
  const entry = tripDefaultValues;

  const onSubmit = async (data) => {
    const response = await createTrip(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to create trip");
    }
  }

  return (
      <TripForm data={entry} onSubmit={onSubmit} />
  );
};

export default Create;