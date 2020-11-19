import "./App.css";
import Landing from "./Components/Landing";
import { BrowserRouter, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Landing />
                {/* <Route path="/" component={Landing} /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
