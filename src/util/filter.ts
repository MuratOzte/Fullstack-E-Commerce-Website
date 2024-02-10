import { url } from 'inspector';
import { FilterModel, ProductModel } from '../models/models';

export const filterByUrl = (
    url: string,
    filterData: FilterModel,
    productData: ProductModel
) => {};

export const filterProducts = (
    productData: ProductModel[],
    filter: FilterModel,
    url: string
) => {
    if (url == 'apple') {
        url = 'iphone';
    }

    const filteredData = productData.filter(
        (product: ProductModel) =>
            product.name.toLowerCase().includes(url) &&
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
