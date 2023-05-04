
export interface User{
    id:string,
    email:string,
    password:string,
    profilePicture?: string | undefined,
    favoriteGenres: string[],
}