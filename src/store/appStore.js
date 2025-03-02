import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice"
import configReducer from "./configSlice"


const appStore = configureStore({
    reducer: {
        userInfo : userReducer,
        config : configReducer,
    }
})

export default appStore;