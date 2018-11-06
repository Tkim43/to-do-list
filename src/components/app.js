// order of import statements don't matter
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';

const App = () => (
    <div className ="container">
        <h1 className ="center">To Do list</h1>
        <List/>
    </div>
);

export default App;
