import logo from './logo.svg';
import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
     <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor={"Black"}/> 
     <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor={"Brown"}/> 
    </div>
  );
}

export default App;
