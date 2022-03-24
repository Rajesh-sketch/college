import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Enquiry from './component/Enquiry';
import Register from './component/Register';
import Enrollment from './Enrollment';
import Faculty from './component/Faculty';
import Admissions from './component/Admissions';
import Preuniversity from './Preuniversity';
import Bachelors from './Bachelors';
import Masters from './Masters';
import Transportation from './component/Transportation';






function App() {
  return (
    <Router>
    
    <div className="App">
      <Header/>
      <div className="d-flex">
         
            
      
      <Route exact path='/' component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/enquiry" component={Enquiry}/>
      <Route exact path="/Enrollment" component={Enrollment}/>
      <Route exact path="/Faculty" component={Faculty}/>
      <Route exact path="/Admissions" component={Admissions}/>
      <Route exact path="/Preuniversity" component={Preuniversity}/>
      <Route exact path="/Bachelors" component={Bachelors}/>
      <Route exact path="/Masters" component={Masters}/>
      <Route exact path="/Transportation" component={Transportation}/>
      
  </div>
  
      
    

      
    </div>
    </Router>
    
  );
}

export default App;
