import './App.css';
import { Component } from 'react';
import { PageBoard } from './PageBoard/PageBoard';
import upcomingEvents from './upcoming-events.json';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Title/Title';  


import Counter from './Counter/Counter'; 



class App extends Component{

  state = { 
    value: 0
  }


 getData = (number) => {
this.setState({value: number})
 }

  render(){
      const someData = '2025.10.25'
  return (
    <div className="App">
      {/* lesson 1-6 
        <Title />
      <PageBoard events={upcomingEvents}/>
        <GlobalStyle />
        */}
        
        {/* lesson 7 */}
        <Counter data={someData} getData={this.getData}/>
        <h3>{this.state.value}</h3>
    </div>
  );
}
}

export default App;
