import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import TopBackground  from "./components/TopBackground/index.js";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import OverviewSection from "./components/OverviewSection";
function App() {

  const [theme,setTheme] = useState(dark)

  const toggleTheme = () =>{
    setTheme(() => theme.title === 'dark' ? light: dark)
  }
  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <GlobalStyle/>
        <TopBackground/>
        <Header toggleTheme = {toggleTheme} theme = {theme.title}/>
        <TopSection/>
        <OverviewSection/>
      </div>
    </ThemeProvider>
  );
}

export default App;
