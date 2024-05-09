// /pages/api/trips.js

import {sendMethodNotAllowed, sendOk,} from '@/utils/apiMethods.js';
import {getCollection} from "@/utils/functions";
import {ObjectId,} from 'mongodb';
const COLLECTION_NAME = 'trips';

const getTrips = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
}

const getTrip = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return collection.findOne({_id: ObjectId.createFromHexString(id)});
}

const postTrip = async (trip) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.insertOne(trip);
}

const putTrip = async (trip) => {
	const collection = await getCollection(COLLECTION_NAME);
	const id = trip._id;
	delete trip._id;
	return collection.updateOne({_id: new ObjectId(id)}, {$set: trip});
}

const deleteTrip = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.deleteOne({_id: new ObjectId(id)});
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	if(req.method === 'GET' && req.query.id) {
		const id = req.query.id;
		const trip = await getTrip(id);
		return sendOk(res, trip);
	}
	else if(req.method === 'GET') {
		const trips = await getTrips();
		return sendOk(res, trips);
	}
	else if(req.method === 'POST') {
		const trip = req.body;
		const result = await postTrip(trip);
		return sendOk(res, result);
	}
	else if(req.method === 'PUT') {
		const trip = req.body;
		const result = await putTrip(trip);
		return sendOk(res, result);
	}
	else if(req.method === 'DELETE') {
		const id = req.query.id;
		const result = await deleteTrip(id);
		return sendOk(res, result);
	}
}