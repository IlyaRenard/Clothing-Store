// Интерфейс для избранного
export interface Favorite {
    id: number;
    userId: number; // Идентификатор пользователя, добавившего товар в избранное
    productId: number; // Идентификатор товара, добавленного в избранное
}