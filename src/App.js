import './styles/global.css';
import DraftLottery from './components/draft-lottery';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>2021 Gentleman's League of Fantasy Football</h1>
      </header>
      <section className="content">
        <DraftLottery />
      </section>
    </div>
  );
}

export default App;
