import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    friends?: User[];
    firstName: string
    lastName: string
    occupation: string
    location: string
}

interface Post {
    _id: string;
}

interface AuthState {
    mode: "light" | "dark";
    user: User | null;
    token: string | null;
    posts: Post[];
    cart: []
    likedProducts: []
}

interface SetLoginPayload {
    user: User;
    token: string;
}

interface SetFriendsPayload {
    friends: User[];
}

interface SetPostPayload {
    post_id: string;
    post: Post;
}

const initialState: AuthState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    cart: [],
    likedProducts: [],
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        likeDislikeProduct: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.likedProducts.findIndex(item => item === id);

            if (existingItemIndex === -1) {
                state.likedProducts.push(id); // Add the id to likedProducts array
            } else {
                state.likedProducts.splice(existingItemIndex, 1); // Remove the id from likedProducts array
            }
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            state.cart = state.cart.filter(item => item.id !== idToRemove);
        },
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (!existingItem) {
                state.cart.push(action.payload);
            } else {
                existingItem.quantity += quantity;
            }

        },
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action: PayloadAction<SetLoginPayload>) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
    }
})

export const { setMode, setLogin, setLogout, addToCart, likeDislikeProduct, removeFromCart } = authSlice.actions;
export default authSlice.reducer