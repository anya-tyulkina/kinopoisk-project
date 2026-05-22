import {baseApi} from "@/app/api";

export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchAuthToken: build.query<any, void>({
            query: () => '/api/tmdb-token',
            providesTags: ['auth']
        }),
    })
})

export const {useLazyFetchAuthTokenQuery} = authApi