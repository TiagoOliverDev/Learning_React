import './App.css';
import FirstComponent from './components/FirstComponent';     //Importando o componente
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import Lista from './components/Lista';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Change from './components/Change';
   
function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent /> {/* Chamando o componente */}
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <Lista/>
      <RenderCond x={10} y={7}/>
      <Fragment/>
      <Container>
        <h1>Componente filho do container</h1>
      </Container>
      <List/>
      <h2>Testes de eventos React</h2>
      <Evento numero={1} />
      <Evento numero={2} />
      <Form/>
      <Change/>
    </div>
  );
}

export default App;
