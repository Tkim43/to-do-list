import React, {Component} from 'react';
import listData from '../dummy_data/list';

class List extends Component{
    constructor(props){
        super(props);
        this.state = ({
            list: []
        });
    }
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        // call server to get data
        this.setState({
            list: listData
        })
    }
    // automatically constructor gets called, render gets called then componentDidMount gets called
    // when the setState changes render gets called again
    render(){
        console.log("State:", this.state.list);
        // map calls a callback function and loops through every item
        const listElements = this.state.list.map((item, index)=>{
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