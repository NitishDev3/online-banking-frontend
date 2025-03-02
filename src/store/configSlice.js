import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logInSignUpBtn : "Log In"
}

const appConfig = createSlice({
    name: "config",
    initialState,
    reducers : {
        updateButton : (state, action)=>{
            state.logInSignUpBtn = action.payload;
        }
    }
})


export const {updateButton}  = appConfig.actions;
export default appConfig.reducer;

