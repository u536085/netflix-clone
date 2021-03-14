import React from 'react';
import './css/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
//import Home from './components/Home.jsx';
//import Series from './components/Series.jsx';
//import Films from './components/Films.jsx';
//import NewAndPopular from './components/NewAndPopular.jsx';
//import MyList from './components/MyList.jsx';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div class='App-content'>
          <NavBar />
          <Route path='/' component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;


//<Route path='/series' component={Series} />
//<Route path='/films' component={Films} />
//</Route path='/newandpopular' component={NewAndPopular} />
//<Route path='/mylist' component={MyList} />
