import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import './components/newsItem.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <NewsList />
      </div>
    </div>
  );
}

export default App;
