import React, { Component } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import AddForm from './components/AddForm'
import List from './components/List'
import './App.css';
import '../node_modules/bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
    <div>
      <div className="container">
        <Header></Header>
        <AddForm></AddForm>
        <hr/>
        <List></List>
      </div>
      <Footer></Footer>
    </div>
    );
  }
}

export default App;
