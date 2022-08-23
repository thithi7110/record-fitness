import { createSlice } from "@reduxjs/toolkit";

type recordType = {
    date: string,
    fitType: string,
    fitContents: {
        weight: number,
        count: number[]
    }[]
};

export const recordSlice = createSlice({
    name: "record",
    initialState: {
        date: "",
        fitType: "",
        fitContents: [
            {
                weight: 0,
                count: [0]
            }
        ]
    },
    reducers: {
        setRecordState: (state, action) => {
            state = {
                ...state,
                ...action.payload,
            }

        },
    }
});


export const { setRecordState } = recordSlice.actions;
export default recordSlice.reducer;