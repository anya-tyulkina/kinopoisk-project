import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['imageMain', 'auth'],
    // keepUnusedDataFor: 3600000,
    baseQuery: fetchBaseQuery({
        baseUrl:'https://kinopoisk-project.vercel.app/',
        headers: {
            'API-KEY': import.meta.env.VITE_API_KEY,
        },
        prepareHeaders: headers => {

            headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
            return headers
        }
    }),
    endpoints: () => ({}),
    // skipSchemaValidation: process.env.NODE_ENV === 'production',
})

