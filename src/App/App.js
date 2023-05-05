import React from "react";
import "./app.css";
import ThemeCustomization from "themes";
import ScrollTop from "components/ScrollTop";
import Routes from "routes";
import { NativeAuthProvider } from "contexts/NativeAuthContext";

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <NativeAuthProvider>
          <>
            <Routes />
          </>
        </NativeAuthProvider>
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;
