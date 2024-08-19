import { weatherApi } from "../apis/weatherApi";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware), // Add the middleware
});
