import './App.css';
import { PageBoard } from './PageBoard/PageBoard';
import upcomingEvents from './upcoming-events.json';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Title/Title';  
import Counter from './Counter/Counter'; 


function App() {
  console.log(upcomingEvents);
  return (
    <div className="App">
      {/* lesson 1-6 
        <Title />
      <PageBoard events={upcomingEvents}/>
        <GlobalStyle />
        */}
        
        {/* lesson 7 */}
        <Counter />
    </div>
  );
}

export default App;
