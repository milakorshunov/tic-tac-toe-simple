import React, { CSSProperties, useState } from "react";
import Cell from "./Cell";


function Board() {
    const [cells, setCells] = useState<string[]>(Array(9).fill(''));
    const [symbol, setSymbol] = useState<string>("X");
    type GameState = 'Active' | 'Victory' | 'Tie';
    const [state, setState] = useState<GameState>('Active');



    function handleClick(index: number) {

        if (cells[index] === '' && state === "Active") {
            const newCells = [...cells];
            newCells[index] = symbol;
            setCells(newCells);

            if (checkVictory(newCells)){
                setState("Victory");
            } else if(newCells.every((el)=> el !== "")){
                setState("Tie");
            } else {
                setSymbol(symbol === "X" ? "O" : "X");
            }

        }

    }

    function checkBoardState() {
        if (state === "Victory") {
            return `${symbol} Won!`;
        }
        else if (state === "Tie") {
            return 'The score is Tie';
        } else {
            return `${symbol} moves next`;
        }

    }

    function checkVictory(newCells: string[]) {

        const victoryCombo: number[][] = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const combo of victoryCombo) {
            const [a, b, c] = combo;
            if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
                return true;
            }
        }
        return false;

    }

    function resetGame() {

        setCells(Array(9).fill(""));
        setState("Active");

    }

    const styles: { [key: string]: CSSProperties } = {
        table: {
            margin: "20px auto",
            borderCollapse: "collapse",
        },
        button: {
            textAlign: "center",
            marginTop: "20px",
            padding: "10px 20px",
        }

    }

    return (
        <>
            <h1>{checkBoardState()}</h1>
            <table style={styles.table} >
                <tbody>
                    <tr>
                        <Cell onClick={() => handleClick(0)} value={cells[0]} />
                        <Cell onClick={() => handleClick(1)} value={cells[1]} />
                        <Cell onClick={() => handleClick(2)} value={cells[2]} />
                    </tr>
                    <tr>
                        <Cell onClick={() => handleClick(3)} value={cells[3]} />
                        <Cell onClick={() => handleClick(4)} value={cells[4]} />
                        <Cell onClick={() => handleClick(5)} value={cells[5]} />
                    </tr>
                    <tr>
                        <Cell onClick={() => handleClick(6)} value={cells[6]} />
                        <Cell onClick={() => handleClick(7)} value={cells[7]} />
                        <Cell onClick={() => handleClick(8)} value={cells[8]} />
                    </tr>

                </tbody>

            </table>
            <div><button onClick={resetGame}>Reset Game</button></div>

        </>
    );

}

export default Board;