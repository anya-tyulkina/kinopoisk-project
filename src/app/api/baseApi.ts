import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: [''],
    // keepUnusedDataFor: 3600000,
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            'API-KEY': import.meta.env.VITE_API_KEY,
        },
        // prepareHeaders: headers => {
        //     // const accessToken = localStorage.getItem(AUTH_KEYS.accessToken)
        //
        //     if (accessToken) {
        //         // headers.set('Authorization', `Bearer ${accessToken}`)
        //     }
        //     return headers
        // }
}),
    endpoints: () => ({}),
    // skipSchemaValidation: process.env.NODE_ENV === 'production',
})

