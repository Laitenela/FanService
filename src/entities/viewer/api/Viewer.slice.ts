import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLogged: boolean;
  id: string | undefined;
  name: string | undefined;
}

const initialState: UserState = {
  isLogged: false,
  id: undefined,
  name: undefined,
}

const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      Object.assign(state, action.payload);
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload
    }
  }
})

export const { setUser, setName } = viewerSlice.actions;

export default viewerSlice.reducer;