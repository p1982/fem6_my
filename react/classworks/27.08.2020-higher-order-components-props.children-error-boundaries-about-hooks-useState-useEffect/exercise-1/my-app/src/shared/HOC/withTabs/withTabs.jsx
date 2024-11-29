import React, { Component } from 'react'

const withTabs = Wrapper => {
    return class extends Component {
        state = {
            list: this.props.list,
        }
    
        handleOpen = (index) => {
            this.setState(({list}) => {
                const newList = list.map((item, idx) => 
                ({...item, active: index === idx}))
                return {
                    list: newList
                }
            })
        }

        render() {
            return <Wrapper {...this}/>
        }
    }
}

export default withTabs