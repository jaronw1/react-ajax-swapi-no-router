import { Component } from "react";
import axios from "axios";
import Starship from "./Starship";

export default class Starships extends Component {
    state = {
        startships: []
    }

    componentDidMount = async () => {
        try{
            const response = await axios.get("https://swapi.dev/api/starships")
            this.setState({
                startships: response.data.results
            })

        } catch(error){
            console.log(error)
        }
    }
    render() {
        const shipsInState = this.state.startships.map((ship, i) => {
            return <Starship
                key={"ship-" + i}
                name={ship.name}
                cost={ship.cost_in_credits}
                class={ship.starship_class}
                url={ship.url}
                pilots={ship.pilots}

            />
        })

        return(
            <>
                <h1>StarShips</h1>
                {shipsInState}
            </>
        )
    }
}
