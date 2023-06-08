export interface IClothes {
    id: number;
    name:string;
    subCategory?:ISubCategory;
    description:string;
    price:number;
    sizes?:string;
    colors?:string;
    image:string;
    brand?:string;
    isAvailability:boolean;
}

export interface ICategory{
    id:number;
    name:string;
}

export interface ISubCategory{
    id:number;
    categoryId:ICategory;
    name:string;
}