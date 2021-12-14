import DefaultRouter from "../router/DefaultRouter";
import "./app.css";

function App() {
    return (
        <div className="App">
            <div className={ "overlay" }>
                <DefaultRouter/>
            </div>
        </div>
    );
}

export default App;
