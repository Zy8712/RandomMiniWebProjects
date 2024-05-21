import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageLayout from './layouts/PageLayout';

export default function App() {

  return (
    <>
      <PageLayout>
        <Header />

        <Footer />
      </PageLayout>
    </>
  )
}