import { createSlice } from '@reduxjs/toolkit'

const threadSlice = createSlice({
    name: 'thread',
    initialState: {
        thread: null,
    },
    reducers: {
        setThread: (state, action) => {
            state.thread = action.payload.threadId
        }
    }
})

export const { setThread } = threadSlice.actions;

export const selectThread = state => state.thread.thread;

const threadReducer = threadSlice.reducer;

export default threadReducer;