export default function getImageUrl(name) {
    return new URL(`/product-list-with-cart/src/assets/images/${name}`, import.meta.url).href
}
