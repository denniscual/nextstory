import React from "react"

export default class Footer extends React.Component{
    render(){
        return(
            <footer id="siteFooter" class="container container--isFluid">
                <div class="container container--isFluid">
                    <div class="row">
                    <div class="row__col-8">
                        <p><a href="#"><img src="/static/images/logo.svg" alt="site logo" class="logo" /></a><span>next story</span></p>
                        <p>Next Story is the most trust website on giving an appropriate latest and breaking news of today’s world.</p>
                        <ul class="siteMenu">
                        <li class="siteMenu__item"><a href="#"></a></li>
                        <li class="siteMenu__item"><a href="#"> </a></li>
                        <li class="siteMenu__item"><a href="#"> </a></li>
                        </ul>
                    </div>
                    <div class="row__col-2">
                        <h5 class="headlineText--light">Categories</h5>
                        <ul class="siteMenu siteMenu--isVertical">
                            <li class="siteMenu__item"><a href="#">General</a></li>
                            <li class="siteMenu__item"><a href="#">Sports</a></li>
                            <li class="siteMenu__item"><a href="#">Business</a></li>
                            <li class="siteMenu__item"><a href="#">Entertainment</a></li>
                            <li class="siteMenu__item"><a href="#">Music</a></li>
                            <li class="siteMenu__item"><a href="#">Technology</a></li>
                        </ul>
                    </div>
                    <div class="row__col-2">
                        <h5 class="headlineText--light">Help</h5>
                        <ul class="siteMenu siteMenu--isVertical">
                        <li class="siteMenu__item"><a href="#">Support</a></li>
                        <li class="siteMenu__item"><a href="#">Email-us</a></li>
                        <li class="siteMenu__item"><a href="#">Privacy</a></li>
                        <li class="siteMenu__item"><a href="#">Terms          </a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}