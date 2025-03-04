import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface Guest {
  id: number;
  name: string;
}

const fetchGuests = async (): Promise<Guest[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API base URL is not defined");
  }

  const response = await axios.get<Guest[]>(`${baseUrl}`);
  return response.data;
};

export const useGuests = (): UseQueryResult<Guest[], AxiosError> => {
  return useQuery<Guest[], AxiosError>({
    queryKey: ["guests"],
    queryFn: fetchGuests,
    staleTime: 15 * 60 * 1000, // Cache data for 5 minutes
  });
};
