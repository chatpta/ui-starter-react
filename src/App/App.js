import DefaultRouter from "../router/DefaultRouter";
import "./app.css";
import { GlobalStyles } from "@mui/material";
import LoadVisitorToken from "../componentsRunOnLoad/visitorToken/LoadVisitorToken";
import LoadUserProfile from "../componentsRunOnLoad/UserProfile/LoadUserProfile";

function App() {
    return (
        <div className="App">
            <div className={ "overlay" }>
                <GlobalStyles styles={ { body: { backgroundColor: "rgb(26, 35, 39)" } } }/>
                <LoadVisitorToken/>
                <LoadUserProfile/>
                <DefaultRouter/>
            </div>
        </div>
    );
}

export default App;
