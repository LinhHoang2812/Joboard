import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "../../utils/axios/authFetch";
import { toast } from "react-toastify";
import { logoutUser } from "./userSlice";
const initialState = {
  isLoading: false,
  jobs: null,
  pendingJobs: null,
  interviewJobs: null,
  declinedJobs: null,
  stats: null,
  monthlyApplications: null,
};

export const getJobs = createAsyncThunk("job/getJobs", async (_, thunkAPI) => {
  try {
    const res = await authFetch.get("/jobs?limit=100");
    res.data.jobs.sort((a, b) => {
      const updateA = new Date(a.updatedAt).getTime();
      const updateB = new Date(b.updatedAt).getTime();
      if (updateA < updateB) {
        return -1;
      }
      if (updateA > updateB) {
        return 1;
      }

      return 0;
    });

    return res.data.jobs;
  } catch (error) {
    thunkAPI.dispatch(logoutUser());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const getStats = createAsyncThunk(
  "job/getStats",
  async (_, thunkAPI) => {
    try {
      const res = await authFetch.get("/jobs/stats");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: "Alljobs",
  initialState,
  reducers: {
    moveJob: (state, { payload }) => {
      if (payload.status === "pending") {
        if (!state.pendingJobs.map((job) => job._id).includes(payload._id)) {
          state.pendingJobs = [...state.pendingJobs, payload];
        }
      }
      if (payload.status === "interview") {
        if (!state.interviewJobs.map((job) => job._id).includes(payload._id)) {
          state.interviewJobs = [...state.interviewJobs, payload];
        }
      }
      if (payload.status === "declined") {
        if (!state.declinedJobs.map((job) => job._id).includes(payload._id)) {
          state.declinedJobs = [...state.declinedJobs, payload];
        }
      }
    },
    removeJob: (state, { payload }) => {
      if (payload.lane === "pending") {
        state.pendingJobs = state.pendingJobs.filter(
          (job) => job._id !== payload._id
        );
      }
      if (payload.lane === "interview") {
        state.interviewJobs = state.interviewJobs.filter(
          (job) => job._id !== payload._id
        );
      }
      if (payload.lane === "declined") {
        state.declinedJobs = state.declinedJobs.filter(
          (job) => job._id !== payload._id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload;
      state.pendingJobs = payload.filter((job) => job.status === "pending");
      state.interviewJobs = payload.filter((job) => job.status === "interview");
      state.declinedJobs = payload.filter((job) => job.status === "declined");
    });
    builder.addCase(getJobs.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(getStats.fulfilled, (state, { payload }) => {
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    });
  },
});

export default allJobsSlice.reducer;
export const { moveJob, removeJob } = allJobsSlice.actions;
