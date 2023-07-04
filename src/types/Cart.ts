import { IClothes } from "./Clothes";

// Интерфейс для корзины
export interface ICart {
    id?: number;
    userId: number; // Идентификатор пользователя, у которого есть товары в корзине
    cartProduct?: IClothes;
    productId: number; // Идентификатор товара, находящегося в корзине
    quantity: number; // Количество товара в корзине
}
