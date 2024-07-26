export default function getImageUrl(name) {
    return new URL(`/product-list-with-cart/${name}`, import.meta.url).href
}