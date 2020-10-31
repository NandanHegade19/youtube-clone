import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import VideoContent from './Components/VideoContent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './Components/SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path = "/search/:searchTerm">
          <Header/>
            <div className = "app__videoContent">
              <Sidebar/>
              <SearchPage/>
            </div>
          </Route>
          <Route path = "/">
            <Header/>
            <div className = "app__videoContent">
              <Sidebar/>
              <VideoContent/>
            </div>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;