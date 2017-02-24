import React from "react"
import Article from "./Article"

export default class Articles extends React.Component{
    render(){
        let { page, articles } = this.props;
        // this function will return an object.
        let displayArticles = getFirstArticles(articles);      
        // condition if displayArticles has length, display masonry
        let articlesElement;
        if(displayArticles.length){
            // trasform this array into an array of article Component
            articlesElement = displayArticles.map((article, i) => {
                return (                 
                      <Article key={i} article={article.firstArticle}/>
                    )
            });
        }
        return(
             <div id="siteArticles" class="row__col-9">
                <h2 class="headlineText headlineText--dark">{page}</h2>
                <section class="articleRoll">
                    {articlesElement}
                </section>
            </div>
        );
    }
}

const getFirstArticles = (articles) => {
    // iterate to each property of object.
    let displayArticles = [];
    for(let article in articles){
        // retrieve the first element in this array.
        let firstArticle = articles[article][0];
        // create an object that will have this property and push it to an array.
        let firstArticleObj = {
            source: article,
            firstArticle
        }
        displayArticles.push(firstArticleObj);
    }
    return displayArticles;
}
