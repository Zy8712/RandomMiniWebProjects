import { Router, Route } from 'wouter';

import NavBar from './components/NavBar';

import Download from './pages/DownloadPage';
import Instructions from './pages/InstructionsPage';
import Faq from './pages/FaqPage';

import Footer from './components/Footer';

import './App.css';

export default function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" component={Download} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/faq" component={Faq} />
        <Footer />
      </Router>
    </>
  )
}