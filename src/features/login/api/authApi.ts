import {baseApi} from "@/app/api";

export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchAuthToken: build.query<any, void>({
            query: () => '/api/tmdb-token',
            providesTags: ['auth']
        }),
        login: build.mutation<any, any>({
            query: (payload) => ({
                url: 'auth/login',
                method: 'post',
                body: {...payload, accessTokenTTL: '15m'}
            }),
        }),
    })
})

export const {useLazyFetchAuthTokenQuery, useLoginMutation} = authApi