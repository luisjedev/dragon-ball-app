import axios from "axios";

export const httpClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
