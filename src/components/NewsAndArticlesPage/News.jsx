import PageTitle from '../generics/PageTitle'
import GetNews from '../Home/SectionElevenGetNews/GetNews'
import Articles from './Articles'
import img_Digitalization from '../../assets/images/image-article1.png'
import img_ChatGPT from '../../assets/images/Image-article2.png'
import img_CSS from '../../assets/images/Image-article3.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const News = () => {
    const [articles, setArticles] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        console.log('is active');
    }, [isActive]);

    async function getArticles() {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        setArticles(await result.json());
    }

    return (
    <>
    <PageTitle title="Home News" headline="News & Articles" />
        <section>
            <div className="wrapper-grid-news">
                <h1>Our News & Articles</h1>
                <div>
                    
                    <div className="container">
                        {articles.map((article) => (
                            <div className="content" key={article.id}>
                                <div className='imageContainer'>
                                    <img className="image-article" src={article.imageUrl} alt={article.category} />
                                </div>
                                    <p className="p-headline">{article.category}</p>
                                    <Link key={article.id} to={`/Articles/${article.id}`}>
                                        <h3>{article.title}</h3>
                                    </Link>
                                    <p>{article.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {articles.map((article, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className='imageContainer'>
                                        <img className="image-article" src={article.imageUrl} alt={article.title} />
                                    </div>
                                    <div className='sliderLink'>
                                        <p className="p-headline">{article.category}</p>
                                        <Link key={article.id} to={`/Articles/${article.id}`}>
                                        <h3 class="linkTitle">{article.title}</h3>
                                        </Link>
                                    </div>
                                </div>
                                ))}
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;