import './App.css';
import  Turnos from './components/Turnos';
import VideoPlayer from './components/Video';

function App() {


  return (
    <div>
      <header className="App-header">
        <div>
          <h1>VE EN BICICLETA!</h1>
        </div>
      </header>
      <body className="App-body">
        <div style={{textAlign: "center"}}>
          <Turnos></Turnos>
          <VideoPlayer videoId="HRyLBnIwk7Q" />

        </div>
      </body>
      <footer className="App-footer">
        <h4>
          Guatemala, 5 de mayo de 2023<br></br>Grupo 13
        </h4>
      </footer>
    </div>
  );
}

export default App;
