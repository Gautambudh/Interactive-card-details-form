import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cardholderName: "",
    cardNumber: {
        number: "",
        error: false
    },
    // cardNumber: "",
    expiryDate: {
        date: "",
        error: false
    },
    expiryMonth: "",
    cardCVC: {
        cvc: "",
        error: false
    },
    confirm: false,
};

export const cardSlice = createSlice({
    name: "cardDetails",
    initialState,
    reducers: {
        setCardholderName: (state, action) => {
            state.cardholderName = action.payload.value;
        },
        setCardNumber: (state, action) => {
            state.cardNumber.number = action.payload.value;
            const isValidNumber =  /^[0-9\s]+$/.test(state.cardNumber.number);
            state.cardNumber.error = !isValidNumber;
        },
        setExpiryDate: (state, action) => {
            state.expiryDate.date = action.payload.value;
            if (state.expiryDate.date === "") {
                state.expiryDate.error = true
            } else {
                state.expiryDate.error = false
            }
        },
        setExpiryMonth: (state, action) => {
            state.expiryMonth = action.payload.value;
        },
        setCardCVC: (state, action) => {
            state.cardCVC.cvc = action.payload.value;
            if (state.cardCVC.cvc === "") {
                state.cardCVC.error = true
            } else {
                state.cardCVC.error = false
            }
        },
        setConfirmed: (state, action) => {
            state.confirm = action.payload.value;
        }
    }
});

export const { setCardholderName, setCardNumber, setExpiryDate, setExpiryMonth, setCardCVC, setConfirmed } = cardSlice.actions;
export const cardState = (state) => state.card // ==> here in state.card ==> card i the reducer name we gave in store.js
export default cardSlice.reducer;