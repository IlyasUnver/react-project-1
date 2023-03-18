import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';
import './newsItem.css'


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=bc898882600e4077b3ece4bcdde19bc1");
            setArticles(res.data.articles)
            console.log(res);
        }

        getArticles();
    }, [])

    return (
        <div className='news-container'>
            {articles.map(({ title, description, url, urlToImage }) => (
                <NewsItem title={title} 
                description={description} 
                url={url} 
                urlToImage={urlToImage} />
            ))}
        </div>
    )
}

export default NewsList
