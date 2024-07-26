export default function getThumbnailByName(items, name) {
    for (let item of items) {
        if (item.name === name) {
            return `.${(item.image.thumbnail).substring(1)}`
        }
    }
    return null
}