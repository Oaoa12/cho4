import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/home-page";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { store } from "./redux";
import { AboutUs } from "./pages/AboutUs"; 
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<AboutUs />} /> 
              <Route path="/products" element={<HomePage />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;