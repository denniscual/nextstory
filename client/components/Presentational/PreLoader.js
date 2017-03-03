import React from "react"
import classNames from "classnames"

const PreLoader = ({ processSources, processArticles }) => {
    // this is class is for loader. we use classnames package for dynamically adding of class.     
    let loaderClassess = classNames({
        "container container--isFluid preloaderWrapper": true,
        "isHide": !processSources.fetching && !processArticles.fetching
    });  
    return(
        <div class={loaderClassess}>
            <div class="row">
                <nav class="row__col-3 ">
                    <ul class="sideNav">
                        <li class="sideNav__item">
                            <h4 class="preloader preloader__h3"></h4>
                            <ul class="siteMenu siteMenu--isVertical noBorder">
                                {[...generatePreloadingElements(10, preloaderList)]}
                            </ul>
                        </li>
                        <li class="sideNav__item">
                            <h4 class="preloader preloader__h3"></h4>
                            <ul class="siteMenu siteMenu--isVertical noBorder">
                                {[...generatePreloadingElements(10, preloaderListWide)]}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="siteArticles" class="row__col-9">
                    <h2 class="headlineText headlineText--dark preloader preloader__h3"></h2>
                    <section class="articleRoll">
                        {[...generatePreloadingElements(6, preloaderArticle)]}
                    </section>
                </div>
            </div>
        </div>
    );
}

// creating our Pre Loader Elements
const preloaderList = (key) => (          
    <li key={key} class="siteMenu__item preloader preloader__li"></li>
);
let preloaderListWide = (key) => (
    <li key={key} class="siteMenu__item preloader preloader__li preloader__li--wide"></li>
);
let preloaderArticle = (key) => (
    <div key={key} class="grid__item">
        <article class="article noBoxShadow">
            <figure class="article__header preloader">
            </figure>
            <div class="article__text">     
                <h3 class="headline headline--dark preloader preloader__title"></h3>
                <footer class="article__footer">
                    <p class="preloader preloader__desc"></p>
                    <p class="preloader preloader__desc"></p>
                    <p class="preloader preloader__desc"></p>
                </footer>
            </div>
        </article>
    </div>
);
// functions that will generate the preloader.
const generatePreloadingElements = (noTimes, callbackFunc) => {
    // we create here an array of preloader elements
    let arrayElements = [];
    // we will pupsh the element on the array based on the no. of times given.
    for(let i = 0; i < noTimes; i++){
        // we will push the component on this array with the given key.
        arrayElements.push(callbackFunc(i));
    }
    return arrayElements;
}

export default PreLoader;