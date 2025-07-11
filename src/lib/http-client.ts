import axios from "axios";
import { env } from "@/config/env";

export const httpClient = axios.create({
	baseURL: env.API_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
