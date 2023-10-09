import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "../../utils/axios/authFetch";
import { toast } from "react-toastify";
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await authFetch.post("/auth/login", data);
      localStorage.setItem("token", response.data.user.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await authFetch.post("/auth/register", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, thunkAPI) => {
    try {
      const resp = await authFetch.patch("/auth/updateUser", data);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isLoading: false,
  isSidebarOpen: false,
  activePage: "job board",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload.user));
      state.user = payload.user;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(payload.user));
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(payload.user));
      toast.success("Updated!!");
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export default userSlice.reducer;
export const { setSidebarOpen, setActivePage, logoutUser } = userSlice.actions;
