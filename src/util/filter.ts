interface filterModel {
    minPrice: number;
    maxPrice: number;
    minStar: number;
    minBattery: number;
    minStorage: number;
    minRam: number;
}

interface productModel {
    id: number;
    name: string;
    image: string;
    star: number;
    price: number;
    battery: number;
    storage: number;
    ram: number;
}

export const filterByUrl = (
    url: string,
    filterData: filterModel,
    productData: productModel
) => {
    console.log(url);
};
