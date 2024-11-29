import React, {Component} from 'react'

const withEditList = Wrapped => {
    return class extends Component {
        state = {
            list: [...this.props.list]
        };    
        
        handleRemove = (idx) => {
            this.setState(({list}) => {
                const newList = [...list]; 
                newList.splice(idx, 1);
                return {
                    list: newList
                }
            })
        }; 
        
        render() {
            return <Wrapped {...this} />
        }
    }
}

export default withEditList;
