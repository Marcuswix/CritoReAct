import React from 'react'
import PageTitle from '../generics/PageTitle'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img_Digitalization from '../../assets/images/digitalization article.png'
import img_DigitalizationSmall from '../../assets/images/image-article1.png'
import RecentPosts from './RecentPosts'
import Articles from '../News/Articles'
import img_ChatGPT from '../../assets/images/Image-article2.png'
import img_CSS from '../../assets/images/Image-article3.png'
import NewsAndArticles from '../Home/SectionNewsAndArticles/NewsAndArticles'

const NewsArticle = () => {
  return (
    <>
    <Header />
    <PageTitle title="Home Articles" headline="Articles"/>

    <section class="section">
      <div class="wrapper-grid-news articles">
        <div class="left-part">
            <div class="headlines">
                <h1>How To Use Digitalization In The Classroom</h1>
                <div class="article-info">
                <p>Mar 25, 2023</p>
                <div class="yellow-circle"></div>
                <p>Business</p>
                <div class="yellow-circle"></div>
                <p>Kimberly Hansen</p>
                </div>
            </div>
            
            <div class="content">
                <img src={img_Digitalization} alt="A picture of young woman sitting in a classroom" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    <br />
                    <br />
                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                    <br />
                    <br />
                    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.      
                </p>
                <br />
                <div class="quote">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="20" viewBox="0 0 28 20">
                        <g id="Group_1000005004" data-name="Group 1000005004" transform="translate(-302 -1904)">
                          <g id="ic_format_quote_48px" transform="translate(300 1898)">
                            <g id="ic_format_quote_48px-2" data-name="ic_format_quote_48px">
                              <path id="Shape" d="M28,26H22l-4-8V6H30V18H24l4,8ZM12,26H6L2,18V6H14V18H8l4,8Z" fill="#191919"/>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                </div>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                </p>

                <div class="tags">
                    <div class="tags-padding">Digitalization</div>
                    <div class="tags-padding">School</div>
                    <div class="tags-padding">IT</div>
                    <div class="tags-padding">Design</div>
                    <div class="tags-padding">Work</div>
                    <div class="tags-padding">Tech</div>
                </div>
          </div>    
        </div>

    <div class="right-part">
        <form class="searchbox" method="get" actions="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 20">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>    
            <input type="text" id="searchbox" name="searchbox" title="Searchbox" placeholder="Type of search..." />
        </form>

        <div class="container-right">
            <div class="content-right">
                <h3>Recent Posts</h3>
                <div class="short-border"></div>
                <RecentPosts headline="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                <RecentPosts headline="Design Studios That Everyone Should Know About?" date="Jan 12, 2020" />
                <RecentPosts headline="How did we get 1M+ visitors in 30 days without anything!" date="Jan 08, 2020" />
                <RecentPosts headline="Figma On Figma: How We Built Our Website Design System" date="Jan 3, 2020" />
            </div>

        <div class="content-right">
            <div class="lower-content">
            <h3>Categories</h3>
            <div class="short-border">
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

<div class="diver">
  <NewsAndArticles />
</div>
<Footer />
    </>
  )
}

export default NewsArticle