// Интерфейс для пользователя
export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    roles?: string[];
}