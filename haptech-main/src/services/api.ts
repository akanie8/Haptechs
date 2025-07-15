import {Feature} from '../types/api';

export const fetchFeatures = async (): Promise<Feature[]> => {
    const res = await fetch("https://68767a2c814c0dfa653c3f1a.mockapi.io/api/v1/Feature")
    if(!res.ok) throw new Error("Failed to fetch features");
    return await res.json();
}