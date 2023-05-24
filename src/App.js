import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import ToDo from "./pages/ToDo";
import Notification from "./pages/Notification";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "@fontsource/poppins"
import '@fontsource/public-sans';
import CssBaseline from '@mui/material/CssBaseline';
import LabelBottomNavigation from "./components/bottomNav";
import StatusChangeNotification from "./components/notif";

const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#E51836',
    },
    secondary: {
      main: '#E51836'
    }, 
  },
  typography: {
    title: {
      fontSize: 20,
      fontFamily: "Poppins, Arial",
      fontWeight: 800,
      color:'black'
    },
    fontFamily: 'Poppins, Arial',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
        <LabelBottomNavigation />
        <StatusChangeNotification />
      </Router>
    </ThemeProvider>
  );
}

export default App;
