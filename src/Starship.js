import { Component } from "react";

export default class Starship extends Component {


    stat = {
        pilots:[],

    }

    componentDidMount= async () => {
        try{

        }catch(err) {
            console.warn(err)
        }
    }
    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
                <h3>{this.props.class}</h3>
                <p>${this.props.cost}</p>
                <a href={this.props.url}>documentation</a>
                {this.props.pilots.length ?   <h4>pilots</h4> : null}
            </>
        )
    }
}