import './App.css';
import { PageBoard } from './PageBoard/PageBoard';
import upcomingEvents from './upcoming-events.json';
import { GlobalStyle } from './GlobalStyle';

function App() {
  console.log(upcomingEvents);
  return (
    <div className="App">
      <PageBoard events={upcomingEvents}/>
        <GlobalStyle />
    </div>
  );
}

export default App;
