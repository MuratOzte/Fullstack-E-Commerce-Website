export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    dealer: string;
}

export interface FilterModel {
    minPrice: number;
    maxPrice: number;
    minStar: number;
    minBattery: number | string;
    minStorage: number | string;
    minRam: number | string;
}

export interface FilterDataModel {
    price: number;
    star: number;
    battery: number;
    storage: number;
    ram: number;
    name: string;
}

export interface ProductModel {
    id: number;
    name: string;
    image: string;
    star: number;
    price: number;
    battery: string;
    storage: string;
    ram: string;
}
