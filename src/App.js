import './App.css';
import { PageBoard } from './PageBoard/PageBoard';
import upcomingEvents from './upcoming-events.json';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Title/Title';  

function App() {
  console.log(upcomingEvents);
  return (
    <div className="App">
        <Title />
      <PageBoard events={upcomingEvents}/>
        <GlobalStyle />
    </div>
  );
}

export default App;
