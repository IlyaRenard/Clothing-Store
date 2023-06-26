// Интерфейс для избранного
export interface IFavorite {
    id?: number
    userId: number; // Идентификатор пользователя, добавившего товар в избранное
    productId: number; // Идентификатор товара, добавленного в избранное
}