import React, {Component} from 'react';


class List extends Component{
    // automatically constructor gets called, render gets called then componentDidMount gets called
    // when the setState changes render gets called again
    render(){
        // map calls a callback function and loops through every item
        const listElements = this.props.data.map((item, index)=>{
            // creates a lot of <li>'s
            return (<li className ="collection-item row" key={item._id}>
                        <div className="col s8">{item.title}</div>
                        <div className="col s4 right-align">
                            <button onClick = {()=>{this.props.delete(item._id)}} className="btn red waves-effect waves-light" type="submit" name="action"><i className="material-icons">delete</i></button>
                        </div>
                    </li>)
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