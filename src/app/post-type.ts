import { Theme } from "./theme-type";
import { User } from "./user-auth/user-type";


export interface Post {
    "likes": string[],
    "_id": string,
    "text": string,
    "userId": User,
    "themeId": Theme,
    "created_at": string,
    "updatedAt": string,
    "__v": 0
}