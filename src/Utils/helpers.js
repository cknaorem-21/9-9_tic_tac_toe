const markWinner = (winner, id, nestedWinner, setNestedWinner) => {
    let winnerCell = 'winner' + id[0] + id[1];
    // console.log(`${winnerCell} won by player ${winner}`)
    // console.log()
    switch (winnerCell) {
        case "winner00":
            if (nestedWinner.winner00 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner00: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            // setTimeout(()=>{console.log(`from switch case ${nestedWinner.winner00}`)},0)

            break;

        case "winner01":
            if (nestedWinner.winner01 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner01: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner02":
            if (nestedWinner.winner02 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner02: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner10":
            if (nestedWinner.winner10 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner10: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner11":
            if (nestedWinner.winner11 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner11: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner12":
            if (nestedWinner.winner12 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner12: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner20":
            if (nestedWinner.winner20 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner20: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner21":
            if (nestedWinner.winner21 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner21: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;

        case "winner22":
            if (nestedWinner.winner22 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner22: winner,
                });
            console.log(`${winnerCell} won by player ${winner}`);
            break;
        default:
            console.log("No winner matches");
    }
}

export const checkWinner = (id, matrix, nestedWinner, setNestedWinner) => {
    // extract index into array of numbers.
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));

    let winner = null;
    let diagonal = false;
    let q;
    if (k === l || (k === 2 && l === 0) || (k === 0 && l === 2))
        diagonal = true;



    // check row
    let checkPlayer = null;
    for (q = 0; q < 3; q++) {
        if (matrix[i][j][k][q] === null) {
            console.log(`row check if 1`)
            break;
        }
        if (checkPlayer === null) {
            console.log(`row check if 2`)
            checkPlayer = matrix[i][j][k][q];
        }
        else if (checkPlayer != matrix[i][j][k][q]) {
            console.log(`row check else if part`)
            break;
        }
    }
    if (q >= 3) {
        console.log(`q>=3 check`)
        winner = checkPlayer;
        markWinner(winner, id, nestedWinner, setNestedWinner);
        console.log(`From check row`);
    }

    // check col
    checkPlayer = null;
    for (q = 0; q < 3; q++) {
        if (matrix[i][j][q][l] === null) break;
        if (checkPlayer === null) checkPlayer = matrix[i][j][q][l];
        else if (checkPlayer != matrix[i][j][q][l]) break;
    }
    if (q >= 3) {
        winner = checkPlayer;
        markWinner(winner, id, nestedWinner, setNestedWinner);
        console.log(`From check col`);
    }

    // check diagonal
    if (diagonal === true) {
        // top left to bottom right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            if (matrix[i][j][q][q] === null) break;
            if (checkPlayer === null) checkPlayer = matrix[i][j][q][q];
            else if (checkPlayer != matrix[i][j][q][q]) break;
        }
        if (q >= 3) {
            winner = checkPlayer;
            markWinner(winner, id, nestedWinner, setNestedWinner);
            console.log(`From check diag1`);
        }

        // bottom left to top right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            if (matrix[i][j][2 - q][q] === null) break;
            if (checkPlayer === null) checkPlayer = matrix[i][j][2 - q][q];
            else if (checkPlayer != matrix[i][j][2 - q][q]) break;
        }
        if (q >= 3) {
            winner = checkPlayer;
            markWinner(winner, id, nestedWinner, setNestedWinner);
            console.log(`From check diag2`);
        }
    }
}


export const checkCompletelyFilled = (id, matrix, cellFilled, setCellFilled) => {
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));

    let completelyFilled = true;
    for (let p = 0; p < 3; p++) {
        for (let q = 0; q < 3; q++) {
            if (matrix[i][j][p][q] === null) {
                completelyFilled = false;
                break;
            }
        }
        if (completelyFilled === false)
            break;
    }

    if (completelyFilled === true) {
        const cellXY = 'cell' + id[0] + id[1];
        switch (cellXY) {
            case 'cell00':
                setCellFilled({
                    ...cellFilled,
                    cell00: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell01':
                setCellFilled({
                    ...cellFilled,
                    cell01: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell02':
                setCellFilled({
                    ...cellFilled,
                    cell02: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell10':
                setCellFilled({
                    ...cellFilled,
                    cell10: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell11':
                setCellFilled({
                    ...cellFilled,
                    cell11: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell12':
                setCellFilled({
                    ...cellFilled,
                    cell12: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell20':
                setCellFilled({
                    ...cellFilled,
                    cell20: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell21':
                setCellFilled({
                    ...cellFilled,
                    cell21: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            case 'cell22':
                setCellFilled({
                    ...cellFilled,
                    cell22: true
                });
                console.log(`${cellXY} completely filled`)
                break;
            default:
                console.log("No cell matched in cases")
        }

    }
}