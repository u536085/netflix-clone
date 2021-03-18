import React from 'react';
import './css/App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Series from './components/Series.jsx';
//import Films from './components/Films.jsx';
//import NewAndPopular from './components/NewAndPopular.jsx';
//import MyList from './components/MyList.jsx';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div class='App-content'>
          <NavBar />
        
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
