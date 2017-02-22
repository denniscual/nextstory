import React from "react"

export default class Articles extends React.Component{
    render(){
        let { page } = this.props;
        return(
             <div id="siteArticles" class="row__col-9">
                <h2 class="headlineText headlineText--dark">{page}</h2>
                <section class="articleRoll grid">
                    <div class="grid__sizer"></div>
                    <div class="grid__gutter"></div>
                    <article class="article grid__item"><a href="#">
                        <figure class="article__header">
                            <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2012/08/steam_greenlight.png" alt="Twitch Communities"/>
                        </figure>
                        <div class="article__text">     
                            <h3 class="headline headline--dark">Twitch makes it easier to find streams to watch with topic-based Communities</h3>
                            <footer class="article__footer">
                            <p>The Next Web - 7 minutes ago</p>
                            </footer>
                        </div></a>
                    </article>
                </section>
            </div>
        );
    }
}