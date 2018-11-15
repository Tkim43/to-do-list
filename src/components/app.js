// order of import statements don't matter
import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import Add from './add_item'
import 'materialize-css/dist/js/materialize';
// you want to make sure that your import comes after materialize
import '../assets/css/app.css'
import {Route} from 'react-router-dom'
import axios from 'axios';

//creating some helper const's to prevent from continuous typing
const BASE_URL = 'http://api.reactprototypes.com/todos';
// query string always starts off with a ? and needs a key value pair
const API_KEY = '?key=tiffanydestroystheworld';

// get some item from add into list
class App extends Component{
    // owner of data has control over data and if you want to change the list array the app component can only do it
    constructor(props){
        super(props);
        this.state = ({
            list: [],
            error: ''
        });
    }
    // get the index of the todo item and remove it from state
    // need the ID to delete that particular item
    deleteItem = async (id) =>{

        console.log(id);

        await axios.delete(`${BASE_URL}/${id + API_KEY}`);

        // what to do with dummy data
        // const listCopy = this.state.list.slice();
        // listCopy.splice(index,1);
        //
        // this.setState({
        //     list: listCopy,
        // });
        this.getListData();

    };
    // we are  making an async function
    addItem = async (item) =>{
        // when sending data to the server you have to put a title
        await axios.post(BASE_URL + API_KEY, item);
        this.getListData();


        // item._id= randomString(8);
        // take original array and pull it apart
        // if you want item at the end you would put it like this
        // every item of the original lists get's added into the array
        // [...this.state.list, item]
        // this.setState({
        //     list: [item,...this.state.list]
        // })
    };
    componentDidMount(){
        this.getListData();
    }
    async getListData(){
        // nothing runs after this line until it finishes
        try{
            const resp = await axios.get(BASE_URL + API_KEY);
            this.setState({
                list: resp.data.todos
            });
        }catch(err){
            this.setState({
                error: 'Error getting todos'
            });
        }
        //Traditional Way to do Axios Calls
        //http://api.reactprototypes.com/todos?key=c718_demouser
        // call server to get data
        // most of the time its a get request for api's
        // axios.get(BASE_URL + API_KEY).then((response)=>{
        //     console.log(response);
        //     this.setState({
        //         list: response.data.todos
        //     })
        // }).catch((err)=>{
        //     console.log('Request Error:', err);
        //     this.setState({
        //         error: 'Error getting todos'
        //     })
        // });
        // console.log("after axios.get call");


        // what you use for dummy data
        // this.setState({
        //     list: listData
        // })

        // Async Await Way
        // you have to let the function know that you are doing async stuff

    }
    render(){
        const{error, list} = this.state;
        return(
            <div className ="container">
                <Route exact path="/" render={()=>{
                    return <List delete={this.deleteItem} data={list} error ={error}/>
                }}/>
                <Route path ="/add-item" render={()=>{
                    return <Add add={this.addItem()} />
                }}/>

            </div>
        )
    }
}

export default App;
