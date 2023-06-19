// Интерфейс для корзины
export interface ICart {
    id: number;
    userId: number; // Идентификатор пользователя, у которого есть товары в корзине
    productId: number; // Идентификатор товара, находящегося в корзине
    quantity: number; // Количество товара в корзине
}
