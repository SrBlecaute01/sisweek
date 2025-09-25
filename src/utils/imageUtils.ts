export const getImageUrl = (imagePath: string): string => {
    return new URL(imagePath, import.meta.url).href;
};