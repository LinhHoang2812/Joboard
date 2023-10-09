import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddCard: false,
  isEditCard: false,
  chosenStatus: null,
  activeId: null,
  activeData: null,
  editData: null,
};

const jobBoardSlice = createSlice({
  name: "jobboard",
  initialState,
  reducers: {
    setAddCard: (state, { payload }) => {
      state.isAddCard = !state.isAddCard;
      state.chosenStatus = payload;
    },
    setActiveId: (state, { payload }) => {
      state.activeId = payload;
    },
    setActiveData: (state, { payload }) => {
      state.activeData = payload;
    },
    setEditData: (state, { payload }) => {
      state.editData = payload.data;
      state.isEditCard = payload.editStatus;
    },
  },
});
export default jobBoardSlice.reducer;
export const { setAddCard, setActiveId, setActiveData, setEditData } =
  jobBoardSlice.actions;
