export default function (count, limit, current) {
    const lastPage = Math.ceil(count / limit)
    let pages = [1]

    if (current - 1 > 1) {
        pages.push(current - 1)
    }

    if (current !== 1) {
        pages.push(current)
    }

    if (current + 1 < lastPage) {
        pages.push(current + 1)
    }

    if (lastPage && current !== lastPage) {
        pages.push(lastPage)
    }

    return pages
}
