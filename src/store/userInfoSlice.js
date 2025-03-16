import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    accountData: null,
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
                state.userData = null;
            },
            loadAccountData: (state, action) => {
                state.accountData = action.payload;
            },
            offLoadAccountData: (state) => {
                state.accountData = null;
            }
        }
    }
)

export const { loadUserData, loadAccountData, offLoadUserData, offLoadAccountData } = userInfoSlice.actions;
export default userInfoSlice.reducer;
