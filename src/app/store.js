import { configureStore } from "@reduxjs/toolkit";
import cardReducer  from "../Components/reduxSlice";

export const store = configureStore({
    reducer: {
        card: cardReducer,
    }
});