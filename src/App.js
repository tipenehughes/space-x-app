import "./App.css";
import { VehicleSpecsProvider } from "./Context/VehicleSpecsContext";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <VehicleSpecsProvider>
                    <Route path="/" component={Landing} />
                </VehicleSpecsProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
