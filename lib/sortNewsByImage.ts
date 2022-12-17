const sortNewsByImage = (news: NewsResponse) => {
    const newsWithImage = news.data.filter((item) => item.image !== null)

    const newsWithNoImage = news.data.filter((item) => item.image === null)

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithNoImage]
    }
    return sortedNewsResponse
}

export default sortNewsByImage