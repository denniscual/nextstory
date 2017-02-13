import React from "react"
import { Link } from "react-router"

import Test from "./Test"

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            info: "old value"
        }
    }
    onHandleSubmit = () => {
        this.setState({
            info: "new value"
        })
    }
    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Irishtagram</Link> 
                </h1>
                <Test info={this.state.info}/>
                <button onClick={this.onHandleSubmit}>Click Me</button>

                {/* the props inside the Main component will be passed automatically to the child component of Main like PhotoGrid. */}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}