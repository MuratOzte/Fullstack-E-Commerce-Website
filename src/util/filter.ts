import { FilterModel, ProductModel } from '../models/models';

export const filterByUrl = (
    url: string,
    filterData: FilterModel,
    productData: ProductModel
) => {
    console.log(url);
};

export const filterProducts = (
    productData: ProductModel[],
    filter: FilterModel
) => {
    const filteredData = productData.filter(
        (product: ProductModel) =>
            product.price <= filter.maxPrice &&
            product.price >= filter.minPrice &&
            product.star >= filter.minStar &&
            (filter.minBattery === 'All' ||
                extractNumericPart(product.battery) >=
                    extractNumericPart(String(filter.minBattery))) &&
            (filter.minStorage === 'All' ||
                extractNumericPart(product.storage) >=
                    extractNumericPart(String(filter.minStorage))) &&
            (filter.minRam === 'All' ||
                extractNumericPart(product.ram) >=
                    extractNumericPart(String(filter.minRam)))
    );
    return filteredData;
};

function extractNumericPart(str: string): number {
    const matches = str.match(/\d+/);
    return matches ? parseInt(matches[0]) : 0;
}
