export interface IClothes {
    id: number;
    title: string;
    category?: string;
    subcategory_id?: number; // Идентификатор подкатегории, к которой относится товар
    price: number;
    description: string;
    sizes?: string[]; // Размеры товара (например, ["S", "M", "L"])
    colors?: string[]; // Доступные цвета товара (например, ["Red", "Blue", "Green"])
    image: string; // Путь к изображению товара
    brand?: string; // Бренд товара
    isAvailability?: boolean; // Доступность товара (true - доступен, false - недоступен)
    rating?: {
        rate: number;
        count: number
    }
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ISubCategory {
    id: number;
    categoryId: number;
    name: string;
}