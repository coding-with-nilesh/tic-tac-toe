import { useState } from 'react';
import './index.css';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const defaultSelections = [];

for (let i = 0; i < 3; i++) {
    defaultSelections.push('');
}

export function Board() {
    const [selections, setSelections] = useState(defaultSelections);
    const [nextLetter, setNextLetter] = useState("X");

    function handleCellClick(index) {

        if (selections[index] == "X" || selections[index] == "O") {
            return;
        }

        var newSelections = [...selections];
        newSelections[index] = nextLetter;

        setSelections(newSelections);
        setNextLetter(nextLetter == "X" ? "O" : "X");
    }

    const cells1 = [];
    const cells2 = [];
    const cells3 = [];

    for (let i = 0; i < 3; i++) {
        cells1.push(<div className="cell" onClick={(e) => handleCellClick(i)}>{selections[i]}</div>);
    }

    for (let i = 3; i < 6; i++) {
        cells2.push(<div className="cell" onClick={(e) => handleCellClick(i)}>{selections[i]}</div>);
    }

    for (let i = 6; i < 9; i++) {
        cells3.push(<div className="cell" onClick={(e) => handleCellClick(i)}>{selections[i]}</div>);
    }

    return (
        <div className="board">
            <div className='row'>
                {
                    cells1
                }
            </div>

            <div className='row'>
                {
                    cells2
                }
            </div>

            <div className='row'>
                {
                    cells3
                }
            </div>

            <div className="line vertical-line line-1"></div>
            <div className="line vertical-line line-2"></div>

            <div className="line horizontal-line line-1"></div>
            <div className="line horizontal-line line-2"></div>

        </div>
    );
}