import axios, { type AxiosInstance } from "axios";

interface HttpClient {
	get<T>(url: string): Promise<T>;
}

class AxiosHttpClient implements HttpClient {
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: import.meta.env.VITE_API_BASE_URL,
			headers: {
				Accept: "*/*",
			},
			params: {
				limit: 50,
			},
		});
	}

	async get<T>(url: string): Promise<T> {
		const response = await this.axiosInstance.get<T>(url);
		return response.data;
	}
}

const httpClient = new AxiosHttpClient();

export default httpClient;
