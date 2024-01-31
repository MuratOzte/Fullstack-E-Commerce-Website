export default function allowedUrl(url: string) {
    const allowedUrls = [
        'mobile-phones',
        'laptops',
        'headphones',
        'cameras',
        'speakers',
        'watches',
    ];

    return allowedUrls.includes(url);
}
