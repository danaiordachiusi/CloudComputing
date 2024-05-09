// /utils/tripsFunctions.js

export const getTrips = async () => {
    try {
        const response = await fetch("/api/trips", {
            method: "GET",
        });
    
        const data = await response.json();
    
        if (!data?.data) {
            return [];
        }
    
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTripById = async (id) => {
    try {
        const response = await fetch(`/api/trips?id=${id}`, {
            method: "GET",
        });
    
        const data = await response.json();
    
        if (!data?.data) {
            return null;
        }
    
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const createTrip = async (trip) => {
    try {
        delete trip._id;

        const response = await fetch("/api/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateTrip = async (trip) => {
    try {
        const response = await fetch("/api/trips", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteTrip = async (id) => {
    try {
        const response = await fetch(`/api/trips?id=${id}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}