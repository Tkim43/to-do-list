// order of import statements don't matter
import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import Add from './add_item'
import 'materialize-css/dist/js/materialize';
// you want to make sure that your import comes after materialize
import '../assets/css/app.css'
import listData from "../dummy_data/list";
import{randomString} from '../helpers';

// get some item from add into list
class App extends Component{
    // owner of data has control over data and if you want to change the list array the app component can only do it
    constructor(props){
        super(props);
        this.state = ({
            list: []
        });
    }
    addItem = (item) =>{
        item._id= randomString(8);
        // take original array and pull it apart
        // if you want item at the end you would put it like this
        // every item of the original lists get's added into the array
        // [...this.state.list, item]
        this.setState({
            list: [item,...this.state.list]
        })
    };
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        // call server to get data
        this.setState({
            list: listData
        })
    }
    render(){
        return(
            <div className ="container">
                <h1 className ="center">To Do list</h1>
                <Add add={this.addItem}/>
                <List data ={this.state.list}/>
            </div>
        )
    }
}

export default App;
