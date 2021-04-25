import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
            <Main />
        <Footer/>
    </div>
  );
}

export default App;
