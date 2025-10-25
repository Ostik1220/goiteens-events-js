import { Component } from 'react';

class Counter extends Component {
    // constructor () {
    //     super();
    //     this.value=0;
    // } в реакті не обовязково писати конструктор бо він створюється автоматично

    state = {
        test: true,
        value: 0,
        text: 'hello world'
    };

    plus = () => {
        console.log(this.props.data);
        // this.state.value = this.state.value + 1; неправильно так робити
        this.setState({
            value: 5
        })
    }  

    minus = () => {
        // this.state.value = this.state.value - 1; неправильно так робити
        // this.setState({
        //     value: 0
        // }) передаємо обєкт якщо треба змінити старе значення на нове
        // якщо ми старе значення хочем змінити і записати як нове то передаємо в сетстейт колбек функцію
        this.setState((prevState) =>{
            return { value: prevState.value - 1 }   
        })
    }   



    render() {
        return (
            <div>
                <button onClick={this.plus}>+</button>
                <h3>{this.state.value}</h3>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default Counter;
