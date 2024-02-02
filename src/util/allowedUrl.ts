export default function allowedUrl(url: string) {
    const allowedUrls: string[] = [
        'samsung',
        'apple',
        'xiaomi',
        'oppo',
        'huawei',
        'poco',
        'vivo',
    ];

    return allowedUrls.includes(url);
}
