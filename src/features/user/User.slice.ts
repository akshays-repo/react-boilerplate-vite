import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../reduxToolKit/store'
import { fakePrimoise } from './User.api'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  await fakePrimoise(1000)
  return 'Akshays'
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'No user',
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'complete'
      state.name = action.payload
    })
  },
})

export const selectUser = (state: RootState) => state.userSlice.name
export const selectUserFetchStatus = (state: RootState) =>
  state.userSlice.status

const userReducer = userSlice.reducer

export default userReducer
