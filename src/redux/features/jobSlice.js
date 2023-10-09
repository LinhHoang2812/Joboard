import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "../../utils/axios/authFetch";
import { toast } from "react-toastify";
import { getJobs, getStats } from "./allJobsSlice";
const initialState = {
  isLoading: false,
};

export const createJob = createAsyncThunk(
  "job/createJob",
  async (data, thunkAPI) => {
    try {
      const res = await authFetch.post("/jobs", data);

      thunkAPI.dispatch(getJobs());

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const editJob = createAsyncThunk(
  "job/editJob",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await authFetch.patch(`jobs/${id}`, data);
      thunkAPI.dispatch(getJobs());
      thunkAPI.dispatch(getStats());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (id, thunkAPI) => {
    try {
      const res = await authFetch.delete(`jobs/${id}`);
      thunkAPI.dispatch(getJobs());
      thunkAPI.dispatch(getStats());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createJob.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Create a new job card!");
    });
    builder.addCase(createJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteJob.fulfilled, (state, { payload }) => {
      toast.success("Deleted job card!");
    });
    builder.addCase(deleteJob.rejected, (state, { payload }) => {
      toast.error(payload);
    });
  },
});

export default jobSlice.reducer;
