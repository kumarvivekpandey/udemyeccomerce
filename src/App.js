
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Footer from './Footer';
import Login from "./Login";
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/Checkout" >
            <Header/>
            <Checkout />
            <Footer />
          </Route>
          
          <Route   exact path="/">
          <Header/>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
