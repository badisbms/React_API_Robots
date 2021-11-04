import "./App.css";
import { useState } from "react";
import Myuser from "./components/Myuser";
import User from "./components/User";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [visible, setvisible] = useState(false);

  function showComponent() {
    window.open("#tutu", "_self");
    setvisible(!visible);
  }

  return (
    <>
      <BrowserRouter>
      <Header
          showComponent={showComponent}
          visible={visible}
          setvisible={setvisible}
        />
        <Switch>
        <Route path="/" exact>

        <div className="App">
          {visible ? (
            <User showComponent={showComponent} visible={visible} />
          ) : null}
     </div>
       

        </Route>
          <Route path="/robot"  exact>
         
          
          <div className="App">
          <User/>
          </div>
          </Route>
        </Switch>

      
      </BrowserRouter>
    </>
  );
}

export default App;
