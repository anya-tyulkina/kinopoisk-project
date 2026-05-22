import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['imageMain', 'auth'],
    // keepUnusedDataFor: 3600000,
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://kinopoisk-project.vercel.app',
        }),
    endpoints: () => ({}),
    // skipSchemaValidation: process.env.NODE_ENV === 'production',
})

