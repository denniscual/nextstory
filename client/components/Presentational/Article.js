import React, { PropTypes } from "react"
import LazyLoad from 'react-lazyload'
import TimeAgo from 'timeago-react'

import PlaceHolderElement from "./PlaceholderElement"
import { blurbWord } from "../../tools/tools"

const Article = ({source,article}) =>
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
                        <h3 class="headline headline--dark">{blurbWord(article.title, 50)}</h3>
                        <footer class="article__footer">
                        <p>
                            <span>{source.replace(/-/g, " ") + " - "}</span>
                            <TimeAgo
                                datetime={article.publishedAt != null ? article.publishedAt : Date.now() }
                                live={false} 
                            />
                        </p>
                        </footer>
                    </div>
                </a>
            </article>
        </div>

    );

// we can have a type checking to our props by using PropTypes
Article.propTypes = {
    source: PropTypes.string.isRequired,
    article: PropTypes.shape({ // we can use shape function to validate if the object has the given properties or shape.
        url: PropTypes.string.isRequired,
        urlToImage:  PropTypes.string,
        title: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired
    })
};

export default Article;
