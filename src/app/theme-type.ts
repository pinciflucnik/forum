import { Post } from "./post-type";
import { User } from "./user-auth/user-type";

export interface Theme {

    "subscribers": string[],
    "posts": Post[], 
    "_id": string,
    "themeName": string,
    "userId": any,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}