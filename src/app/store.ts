import { configureStore } from "@reduxjs/toolkit";
import viewerReducer from "@entities/viewer/api/Viewer.slice";

export const store = configureStore({
  reducer: {
    viewer: viewerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;