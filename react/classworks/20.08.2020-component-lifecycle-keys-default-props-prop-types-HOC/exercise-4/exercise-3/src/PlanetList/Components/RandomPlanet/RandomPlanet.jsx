import React, {Component} from 'react'

class RandomPlanet extends Component{
    state ={
        randomPlanet: [],
        id: null
    }

    componentDidMount() {
        const req = fetch(`http://danit.com.ua/products/${planetId}`).then(res =>{
            return res.json()
         }).then(({name, diameter, terrain, population}) => {
             this.setState({
                 randomPlanet: {name, diameter, terrain, population}
             })
         });
    }

    componentDidUpdate(){
        // get random id
        const req = fetch(`http://danit.com.ua/products/${planetId}`).then(res =>{
            return res.json()
         }).then(({name, diameter, terrain, population}) => {
             this.setState({
                 randomPlanet: {name, diameter, terrain, population}
             })
         });
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