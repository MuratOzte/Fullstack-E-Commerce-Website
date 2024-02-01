export default function allowedUrl(url: string) {
    const allowedUrls: string[] = [
        'mobile-phones',
        'laptops',
        'headphones',
        'cameras',
        'speakers',
        'watches',
    ];

    return allowedUrls.includes(url);
}
