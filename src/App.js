import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Mint from "./Mint";
import PageNotFound from "./PageNotFound";
import './App.css'
import './fonts/RockSalt-Regular.ttf';
function App() {
  return (
    <BrowserRouter>
    <div id = "first" style = {{
      backgroundColor: '#eaeaea',
      fontFamily: "Light"
    }}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/mint' component={Mint} />
        <Route component = {PageNotFound} />
      </Switch>
      </div>
    </BrowserRouter>
  );

}
export default App;