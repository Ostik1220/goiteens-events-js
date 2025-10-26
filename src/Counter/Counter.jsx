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
         this.setState((prevState) =>{
            return { value: prevState.value + 1 }   
        })
        this.props.getData(this.state.value);
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

                this.props.getData(this.state.value);

    }   



    render() {
        return (
            <div>
                <button onClick={this.plus}>+</button>

                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default Counter;
