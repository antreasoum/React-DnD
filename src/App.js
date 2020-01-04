import React from 'react';
import board from './components/board';
import card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
        <main className="flexbox">


            <board id="board-1" className="board">
                <card id="card-1" className="card" draggable="true">
                    <p>card one</p>
                </card>
            </board>

            <board id="board-2" className="board">
                <card id="card-2" className="card" draggable="true">
                    <p>card two</p>
                </card>
            </board>

            </main>
        </div>
    );
}

export default App;