import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorAccess {
  floorAccess: boolean[];
}

const initialState: FloorAccess = {
    floorAccess: [false, false, false, false, false], 
};

const floorSlice = createSlice({
    name: "floorAccess",
    initialState,
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state.floorAccess[index] = !state.floorAccess[index];
        },
    },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;