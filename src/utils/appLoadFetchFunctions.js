import axios from "axios";
import { BASE_API_URL } from "../assets/constants";

const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(BASE_API_URL + endpoint, {
            withCredentials: true,
        });
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
    }
};

export const fetchProfileData = async () => fetchData("/profile");

export const fetchAccountData = async () => fetchData("/account");