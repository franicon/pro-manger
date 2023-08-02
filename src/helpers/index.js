function generateSlug (title) {
    const slug = title.split(' ');
    if (slug.length === 1) {
        return slug[0].toLowerCase();
    }
    const getSlug = slug.slice(0, 2)
    return getSlug.join('-').toLowerCase()
}

module.exports = {
    generateSlug
}
