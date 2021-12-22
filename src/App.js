import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
         <Sidebar />
         <Content />
      </div>
       <Footer />
    </Router>
  );
}

export default App;
