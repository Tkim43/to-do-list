import React, {Component} from 'react';


class List extends Component{
    // automatically constructor gets called, render gets called then componentDidMount gets called
    // when the setState changes render gets called again
    render(){
        // map calls a callback function and loops through every item
        const listElements = this.props.data.map((item, index)=>{
            // creates a lot of <li>'s
            return <li className ="collection-item" key={item._id}>{item.title}</li>
            // react already loops over an array for us
            // dont use index its bad to use
        });
        return(
            <ul className ="collection">
                {listElements}
            </ul>
        )
    }
}

export default List;