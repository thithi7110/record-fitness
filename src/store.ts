import { configureStore } from "@reduxjs/toolkit";
import { useSelector as  rawUseSelector,TypedUseSelectorHook } from "react-redux";
import recordReducer from './Slices/recordSlice';

//recordの画面状態保持用
export const store = configureStore({
    reducer: {
        record: recordReducer
    }
});

//useSeletorを画面側でそのまま使うと型が解決できないので、ここで補完する
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;