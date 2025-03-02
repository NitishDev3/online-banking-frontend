import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: "",
}

const userInfoSlice = createSlice(
    {
        name: "userInfo",
        initialState,
        reducers: {
            loadUserData: (state, action) => {
                state.userData = action.payload;
            },
            offLoadUserData: (state) => {
                state.userData = "";
            }
        }
    }
)

export const { offLoadUserData ,loadUserData } = userInfoSlice.actions;
export default userInfoSlice.reducer;
