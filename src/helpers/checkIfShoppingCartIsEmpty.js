export default function checkIfShoppingCartIsEmpty(obj) {
    return Object.values(obj).every(value => value === 0)
}