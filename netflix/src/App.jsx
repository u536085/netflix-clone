import React from 'react';
import '../src/css/App.scss';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Series from './components/Series.jsx';
import Films from './components/Films.jsx';
import MyList from './components/MyList.jsx';
//import NewAndPopular from './components/NewAndPopular.jsx';
import SearchArea from './components/SearchArea.jsx';

class App extends React.Component{
  // constructor() {
  //   super()
  //   this.state =(){
  //     movie: [],
  //     searchTerm: ''   }
  // }
  render() {
    return (
    <BrowserRouter>
      <div className="App-content">
        <NavBar/>
        <Route path='/' component={Home} exact />
        <SearchArea/>
        <Route path='/series' component={Series} />
        <Route path='/films' component={Films} />
        <Route path='/mylist' component={MyList} />
      </div>
    </BrowserRouter>
    )
  }
}
export default App;
