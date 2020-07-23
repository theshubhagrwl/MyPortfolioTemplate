import React from "react";
import "./App.css";
import Header from "./components/Sections/Header";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import "./App.css";
import Footer from "./components/Footer";
import Social from "./components/Sections/Social";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Projects />
        <Skills />
        <Social />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
