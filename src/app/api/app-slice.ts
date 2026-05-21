import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        theme: 'light' as Theme,
    },
    selectors: {
        selectThemeMode: (state)=>state.theme
    },
    reducers: (create)=>({
        changeTheme: create.reducer<{ theme: Theme }>((state, action) => {
            state.theme = action.payload.theme
        }),
    })
})

export const {changeTheme} = appSlice.actions
export const appReducer = appSlice.reducer
export const {selectThemeMode} = appSlice.selectors

export type Theme = 'light' | 'dark'