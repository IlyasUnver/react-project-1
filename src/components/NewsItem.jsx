import React from 'react'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt="New Image" />
            <h3>
                <a href={url}>
                    {title}
                </a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
