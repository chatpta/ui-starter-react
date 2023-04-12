import React from "react";
import "./App.css";
import ThemeCustomization from "themes";
import ScrollTop from "components/ScrollTop";
import Routes from "routes";
import { LlifProvider as AuthProvider } from "contexts/LlifContext";

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <AuthProvider>
          <>
            <Routes />
          </>
        </AuthProvider>
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;
