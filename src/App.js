import "./App.css";
import Landing from "./Components/Landing";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" component={Landing} />
            </div>
        </BrowserRouter>
    );
}

export default App;
