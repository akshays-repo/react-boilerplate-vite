import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/User.slice'

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
