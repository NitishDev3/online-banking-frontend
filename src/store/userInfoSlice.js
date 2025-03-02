import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    isLoggedIn: false,
}

const userInfoSlice = createSlice(
    {
        name: "userInfo",
        initialState,
        reducers: {
            updateUserName: (state, action) => {
                state.userName = action.payload;
            },
            setLogInTrue: (state, action) => {
                state.isLoggedIn = action.payload;
            }
        }
    }
)

export const { updateUserName ,setLogInTrue } = userInfoSlice.actions;
export default userInfoSlice.reducer;
