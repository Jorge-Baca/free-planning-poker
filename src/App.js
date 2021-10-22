import { useState } from 'react';
import './App.css';
import RoomInfo from './components/RoomInfo';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {

    const [fd, setFd] = useState(false);

    return (
        <div className="App">
        <header className="App-header">
            <p>
            Planning poker gratis y gratuito. XD
            </p>
        </header>
        <RoomInfo cid={"ABCD1234"} nro-usuarios={4} />
        <p>Aqui van las cartillas</p>
        <Card faceDown={fd} />
        <button onClick={() => {console.log("Wenas");setFd(!fd);}}> Presiona aqui </button>
        <p>Aqui las estadísticas</p>
        <Footer />
        </div>
    );
}

export default App;
