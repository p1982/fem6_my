import React, {Component} from 'react'

class RandomPlanet extends Component{
    state ={
        randomPlanet: [],
        id: null
    }

    conponentDidMount() {
        const id = setInterval(() => {
            const planetId = 1;
        const req = fetch(`http://danit.com.ua/products/${planetId}`).then(res =>{
           return res.json()
        }).then(({name, diameter, terrain, population}) => {
            this.setState({
                randomPlanet: {name, diameter, terrain, population}
            })
        })
        }, 3000);
        this.setState({id})
    }
    
    componentWillUnmount() {
        clearInterval(this.state.id)
    }

    render(){
        const {randomPlanet: {name, diameter, terrain, population}} = this.state
        return (
            <>
            <h2>Planet name: {name}</h2>
            <ul>
        <li>Planet diameter: {diameter}</li>
        <li>Planet terrain: {terrain}</li>
        <li>Planet population: {population}</li>
            </ul>
            </>
        )
    }
        
    
}

export default RandomPlanet