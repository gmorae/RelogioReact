import React, {Component} from 'react';
import './App.css';


function DataFromatada(props) {
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends Component{
  constructor(props){
    super(props) //permite que usa o this
    this.state = {
      date: new Date()
    }

  }

  // Ciclo de vida que ocorre quando o componente é inserido o DOM
  componentDidMount(){
    this.TimerId = setInterval( () => {
      this.thick()
    })
    console.log("relogio => " + this.TimerId)
  }

  // Ciclo de vida que ocorre quando o compnente é removido do DOM 
  componentWillMount(){
    clearInterval(this.TimerId)
  }

  thick(){
    this.setState({
      date: new Date()
    })
  }

  // Renderiza na tela o titulo e o retorno da função DataFormatada
  // Passando date com o valor atual do state
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFromatada date= {this.state.date} />
      </div>
    )
  }
}

// Função principal invocada pelo index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
