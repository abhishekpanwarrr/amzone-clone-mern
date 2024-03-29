import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    friends?: User[];
    firstName: string
    lastName: string
    occupation: string
    location: string
}


interface AuthState {
    mode: "light" | "dark";
    user: User | null;
    token: string | null;
    cart: []
    likedProducts: []
    snackBarMsg: string | null;
    profile: boolean
}

interface SetLoginPayload {
    user: User;
    token: string;
}


const initialState: AuthState = {
    mode: "light",
    user: null,
    token: null,
    cart: [],
    likedProducts: [],
    snackBarMsg: "",
    profile: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfie: (state) => {
            state.profile = !state.profile
        },
        likeDislikeProduct: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.likedProducts.findIndex(item => item === id);

            if (existingItemIndex === -1) {
                // @ts-ignore
                state.likedProducts.push(id);
            } else {
                state.likedProducts.splice(existingItemIndex, 1);
            }
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            // @ts-ignore
            state.cart = state.cart.filter(item => item._id !== idToRemove);
        },
        addToCart: (state, action) => {
            const { _id, quantity } = action.payload;
            // @ts-ignore
            const existingItem = state.cart.find(item => item._id === _id);

            if (!existingItem) {
                // @ts-ignore
                state.cart.push(action.payload);
            } else {
                // @ts-ignore
                existingItem.quantity += quantity;
            }

        },
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setSnackBarMsg: (state, action) => {
            state.snackBarMsg = action.payload
        },
        clearCart: (state) => {
            state.cart = [];
        },
        setLogin: (state, action: PayloadAction<SetLoginPayload>) => {
            state.user = action.payload.user
            if (state.token) {
                state.token = state.token;
            } else {
                state.token = action.payload.token;
            }
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
    }
})

export const { setMode, setLogin, setLogout, addToCart, likeDislikeProduct, removeFromCart, clearCart, setSnackBarMsg, setProfie } = authSlice.actions;
export default authSlice.reducer