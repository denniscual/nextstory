import React from "react"
import Article from "./Article"

export default class Articles extends React.Component{
    render(){
        let { page, articles, categoryFilter } = this.props;
        // create an articles array.
        let displayArticles = [];
        // condition if displayArticles has length, display masonry
        let articlesElement;
        if(categoryFilter == "SHOW_ALL"){
            // this function will return an object.
            displayArticles = getFirstArticles(articles);    
             if(displayArticles.length){
                // trasform this array into an array of article Component
                articlesElement = displayArticles.map((article, i) => {
                    return (                 
                        <Article key={i} source={article.source} article={article.firstArticle}/>
                        )
                });
            }        
        }else{
            displayArticles = articles[categoryFilter];
            if(displayArticles.length){
                // trasform this array into an array of article Component
                articlesElement = displayArticles.map((article, i) => {
                    return (                 
                        <Article key={i} source={categoryFilter} article={article}/>
                        )
                });
            }  
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
