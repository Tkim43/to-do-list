import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class List extends Component{
    // automatically constructor gets called, render gets called then componentDidMount gets called
    // when the setState changes render gets called again
    render(){
        if(this.props.error){
            return(
                <h1 className="center red-text">{this.props.error}</h1>
            )
        }
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
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/add-item" className="btn blue darken-2" >Add Item</Link>
                    </div>
                </div>
                <ul className ="collection">
                    {listElements}
                </ul>
            </div>

        )
    }
}

export default List;