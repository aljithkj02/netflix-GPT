import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state) => {
            return null;
        }
    }
})

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
