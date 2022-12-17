import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
// import { Category } from "../types";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL Query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $category: String!
            $keywords: String
        )  {
            myQuery(
                access_key: $access_key
                category: $category
                keywords: $keywords
                countries: "ke, us, gb, ug, tz"
                sort: "published_desc"
            ) {
            data {
                author
                category
                country
                description
                image
                published_at
                source
                title
                url
                language
            }
            pagination {
                count
                limit
                offset
                total
            }
            }
        }
        `;

    const res = await fetch('http://localhost:5001/api/exegetical-tapir', {
        method: "POST",
        cache: isDynamic ? "no-cache" : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                category: category,
                keywords: keywords
            }
        })
    })


    console.log("LOADING NEW DATA FROM CATEGORY >>>",
            category,
            keywords
        )

    const newsResponse = await res.json()


    const news = sortNewsByImage(newsResponse.data.myQuery)

    return news


    // return response
}

export default fetchNews