import React from 'react'
import PageTitle from '../generics/PageTitle'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img_Digitalization from '../../assets/images/digitalization article.png'
import RecentPosts from './RecentPosts'
import NewsAndArticles from '../Home/SectionNewsAndArticles/NewsAndArticles'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NewsArticle = () => {

    const [article, setArticle] = useState ({})
    const { id } = useParams()

    useEffect(() => {
      getArticle();
    }, [])
  

    async function getArticle()
    {
      if (id !== undefined)
      {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
        
        if (result.status === 200)
        setArticle(await result.json())
      }

      console.log(id)
    }


  return (
    <>
    <Header />
    <PageTitle title="Home Articles" headline="Articles"/>

    <section className="section">
      <div className="wrapper-grid-news articles">
        <div className="left-part">
            <div className="headlines">
                <h1>{article.title}</h1>
                <div className="article-info">
                <p>{article.published}</p>
                <div className="yellow-circle"></div>
                <p>{article.category}</p>
                <div className="yellow-circle"></div>
                <p>{article.author}</p>
                </div>
            </div>
            
            <div className="content">´
              <div className="imageContainer"> 
                <img className="image" src={article.imageUrl} alt={article.category} />
              </div>
                <p>{article.content}</p>

                <div className="tags">
                    <div className="tags-padding">{article.category}</div>
                    <div className="tags-padding">School</div>
                    <div className="tags-padding">IT</div>
                    <div className="tags-padding">Design</div>
                    <div className="tags-padding">Work</div>
                    <div className="tags-padding">Tech</div>
                </div>
          </div>    
        </div>

    <div className="right-part">
        <form className="searchbox" method="get" actions="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 20">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>    
            <input type="text" id="searchbox" name="searchbox" title="Searchbox" placeholder="Type of search..." />
        </form>

        <div className="container-right">
            <div className="content-right">
                <h3>Recent Posts</h3>
                <div className="short-border"></div>
                <RecentPosts headline="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                <RecentPosts headline="Design Studios That Everyone Should Know About?" date="Jan 12, 2020" />
                <RecentPosts headline="How did we get 1M+ visitors in 30 days without anything!" date="Jan 08, 2020" />
                <RecentPosts headline="Figma On Figma: How We Built Our Website Design System" date="Jan 3, 2020" />
            </div>

        <div className="content-right">
            <div className="lower-content">
            <h3>Categories</h3>
            <div className="short-border">
            </div>
                <b>Technology</b><b> -  20 Posts</b><br />
                <b>Freelancing</b><b> -  20 Posts</b><br />
                <b>Freelancing</b><b> -  20 Posts</b><br />
                <b>Marketing</b><b> -  20 Posts</b><br />
                <b>Business</b><b> -  20 Posts</b><br />
                <b>Education</b><b> - 20 Posts</b><br />
            </div>
        </div>
    </div>
</div>
</div>
</section>

<div className="diver">
  <NewsAndArticles />
</div>
<Footer />
    </>
  )
}

export default NewsArticle