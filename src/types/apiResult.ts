export type SuccessDataT<T> = {
    data: {
        data: T,
        message: string,
        status: number
    },
    status: number
}