import React from "react"

export default class SortLinks extends React.Component{
    render(){
        return(
            <div>
                <div id="sortLinks">       
                    <ul class="siteMenu siteMenu--isHorizontal">
                    <li class="siteMenu__item siteMenu__item--isActive"><a href="#">All News</a></li>
                    <li class="siteMenu__item"><a href="#">Latest</a></li>
                    <li class="siteMenu__item"><a href="#">Popular</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}