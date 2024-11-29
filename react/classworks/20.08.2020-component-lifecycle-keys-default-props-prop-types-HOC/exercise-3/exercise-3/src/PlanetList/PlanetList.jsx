import React, {Component} from 'react'

class PlanetList extends Component{
    state ={
        planetList: []
    }

    componentDidMount(){
        const req = fetch('https://swapi.dev/api/planets/').then(res =>{
           return res.json()
        }).then(({results}) =>{
            this.setState({
                planetList: results
            })
        })
    }

    render(){
        const {planetList} = this.state
        const list = planetList.map(({name}) =>{
            return <li>{name}</li>
         })
        return (
            <>
            <h1>Star Wars: Planets</h1>
            <ul>
                {list}
            </ul>
            </>
        )
    }
        
    
}

export default PlanetList