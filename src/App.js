import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll</h1>
      </header>
      <main>
        <InfiniteScroll />
      </main>
    </div>
  );
  }
export default App;
