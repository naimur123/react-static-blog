import "./app.css";
import Comment from "./components/Comments/Commnet";
import Post from "./components/Post/Post";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch,Link, Route } from "react-router-dom";

function App() {
  return (
  <Router>
     <div className="top">
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" > 
         
          <Link exact className="link" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
          </Link>  
          </li>
          <li className="topListItem">  
          <Link exact className="link" to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          About Us
          </Link> 
          
          </li>
       
        </ul>
      </div>
            
        </div>
 
  
   
   <Switch>
   <Route exact path="/" >
   <Post/>
   <Comment/>
   </Route>
   <Route  path="/about" >
   <About/>
   </Route>
   </Switch>
   
   
   </Router>
   
  
   
  );
}

export default App;
