import './App.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import homeStyle from "./Styles/Home.module.css";
import AllRoutes from './Routing/AllRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
