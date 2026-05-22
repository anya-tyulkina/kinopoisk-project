import {baseApi} from "@/app/api";

export const MainImageApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchMainImage: build.query<void, void>({
            query: () => '/authentication/token/new',
            providesTags: ['imageMain']
        }),
    })
})

export const {useFetchMainImageQuery} = MainImageApi