import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';


function App() {
  return (
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;