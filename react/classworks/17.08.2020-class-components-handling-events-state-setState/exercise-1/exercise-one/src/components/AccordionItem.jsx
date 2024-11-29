import React, {Component} from 'react';
import './AccordionItem.css';

class AccordionItem extends Component {
    state = {
        open: false
    };

    handleClick = () => {
       this.setState(({open}) => {
           return {
               open: !open
           }
       })
    };
    
    render (){
       const {title, content} = this.props;
       const {open} = this.state;
       const openClass = open ? 'is-expanded' : '';
       return (<div className="accordion-item" onClick={this.handleClick}>
        <p className={`title ${openClass}`}>
            {title}
        </p>
        <div className={`content ${openClass}`}>
          <p>
              {content}
          </p>
        </div>
      </div>)
    }
}
export default AccordionItem
