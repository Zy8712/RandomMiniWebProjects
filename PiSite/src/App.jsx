import './App.css'
import { Router, Route } from 'wouter';
import Navbar from './components/Navbar';
import Home from "./pages/Home";

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}
