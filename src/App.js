import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Question1 from './components/Questions';

function App() {
  return (
    <div>
      <Navbar/>
      <main className="px-5 mt-2">
        <Question1/>
      </main>
      </div>  
      
  );
}


export default App;
