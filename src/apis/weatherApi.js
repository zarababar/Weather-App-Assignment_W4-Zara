import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentWeatherData: builder.query({
      query: (city) => `weather?q=${city}&appid=${apiKey}`,
      providesTags: (result, error, arg) => [{ type: 'Weather', id: arg }],
    }),
    getTemperatureWithDifferentUnits: builder.query({
      query: ({ lat, lon, unit }) => `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`,
      providesTags: (result, error, arg) => [{ type: 'Temperature', id: `${arg.lat}-${arg.lon}-${arg.unit}` }],
    })
  }),
});

export const { useGetCurrentWeatherDataQuery, useGetTemperatureWithDifferentUnitsQuery } = weatherApi;
