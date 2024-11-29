import React, {Component} from 'react';
import RandomPlanet from '../RandomPlanet'

class PlanetList extends Component{
    state ={
        planetList: [],
        randomId: null
    }

    componentDidMount(){
        const req = fetch('http://danit.com.ua/products/')
        .then(res =>{
           return res.json()
        }).then((result) =>{
            console.log(result);
            this.setState({
                planetList: result
        })
        })
    }

    handelGetRandomPlanet() {
        // const id = Math.random()
        this.setState({
            randomId: id
        })
    }

    render(){
        const {planetList, randomId} = this.state
        
        const list = planetList.map(({name}) =>{
            return <li>{name}</li>
         })
        return (
            <>
            <ul>
                <RandomPlanet/>
            </ul>
            <div>
                <RandomPlanentToClick planentID={randomId} />
                <button onClick={this.handelGetRandomPlanet} />
            </div>
            <ul>
                {list}
            </ul>
            </>
        )
    }
        
    
}

export default PlanetList