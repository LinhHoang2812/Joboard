import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import jobReducer from "./features/jobSlice";
import allJobsReducer from "./features/allJobsSlice";
import jobBoardReducer from "./features/jobBoardSlice";

import { adzunaApi } from "../api/AdzunaApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    allJobs: allJobsReducer,
    jobBoard: jobBoardReducer,
    [adzunaApi.reducerPath]: adzunaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adzunaApi.middleware),
});

export default store;
