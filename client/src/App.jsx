import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { InspectScreen } from "./Screens/InspectScreen";
import DuelScreen from "./Screens/DuelScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {


  // Hook that runs after React has updated the DOM
  // useEffect(() => {
  //   inspectUser()
  // }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/inspect" component={InspectScreen} />
        <Route exact path="/duel" component={DuelScreen} />
      </Switch>
    </Router>
  );
}

export default App;
