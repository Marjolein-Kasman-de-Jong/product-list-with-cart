export default function findProductsToShow(obj) {
    return Object.entries(obj).filter(([, value]) => value != 0)
}