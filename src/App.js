import logo from './logo.svg';
import './App.scss';
import './tailwind.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/contact'
import ProjectsGallery from './components/Portfolio'
import About from './components/about'
import Skills from './components/Skills';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    grey: {
      '300': '#e0e0e0'  // defining grey[300] explicitly
    }
  },
});




function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element ={<About />} />
          <Route path="contact" element = {<Contact />} />
          <Route path="Portfolio" element={<ProjectsGallery />} />
          <Route path='skills' element={<Skills/>} />
        </Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
