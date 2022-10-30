import './App.css';
import FirstComponent from './components/FirstComponent'; //Importando o componente
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent /> {/* Chamando o componente */}
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={10} y={7}/>
      <Fragment/>
      <Container>
        <h1>Componente filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
