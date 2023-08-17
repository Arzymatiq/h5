import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let API = "https://jsonplaceholder.typicode.com/posts";

export const getUser = createAsyncThunk("user/getUser", async () => {
    let res = await axios.get(API);
    return res.data;
});

let API2 = "https://jsonplaceholder.typicode.com/users";

export const getAuthor = createAsyncThunk("user/getAuthor", async (id) => {
    let res = await axios.get(`${API2}/${id}`);
    return res.data;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        author: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getAuthor.fulfilled]: (state, action) => {
            state.author = action.payload;
            console.log(action.payload);
        },
    },
});

export default userSlice.reducer;
