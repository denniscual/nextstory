import React from "react"
import LazyLoad from 'react-lazyload'
import TimeAgo from 'timeago-react'

import PlaceHolderElement from "./PlaceholderElement"

const Article = ({article}) =>
    (
            <div class="grid__item">
                <article class="article">
                    <a target="_blank" href={article.url}>
                        <figure class="article__header">
                            <LazyLoad height={200} placeholder={<PlaceHolderElement />} debounce={true}>
                                <img src={article.urlToImage} alt={article.title}/>
                            </LazyLoad>
                        </figure>
                        <div class="article__text">     
                            <h3 class="headline headline--dark">{blurbWord(article.title)}</h3>
                            <footer class="article__footer">
                            <TimeAgo
                                datetime={article.publishedAt != null ? article.publishedAt : Date.now() }
                                live={false} 
                            />
                            </footer>
                        </div>
                    </a>
                </article>
            </div>

    );

export default Article;

const blurbWord = (string) => {
    let blurbString;
    if(string.length > 65){
        blurbString = string.substring(0, 65) + "...";
        return blurbString;
    }
    return string;
}