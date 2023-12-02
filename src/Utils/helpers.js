const markWinner = (winner, id, nestedWinner, setNestedWinner) => {
    let winnerCell = 'winner' + id[0] + id[1];
    switch (winnerCell) {
        case "winner00":
            if (nestedWinner.winner00 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner00: winner,
                });
            break;

        case "winner01":
            if (nestedWinner.winner01 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner01: winner,
                });
            break;

        case "winner02":
            if (nestedWinner.winner02 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner02: winner,
                });
            break;

        case "winner10":
            if (nestedWinner.winner10 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner10: winner,
                });
            break;

        case "winner11":
            if (nestedWinner.winner11 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner11: winner,
                });
            break;

        case "winner12":
            if (nestedWinner.winner12 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner12: winner,
                });
            break;

        case "winner20":
            if (nestedWinner.winner20 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner20: winner,
                });
            break;

        case "winner21":
            if (nestedWinner.winner21 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner21: winner,
                });
            break;

        case "winner22":
            if (nestedWinner.winner22 === null)
                setNestedWinner({
                    ...nestedWinner,
                    winner22: winner,
                });
            break;
        default:
        console.log("No winner matches");
    }
}

export const checkNestedWinner = (id, matrix, nestedWinner, setNestedWinner) => {
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
        if (matrix[i][j][k][q] === null) break;
        if (checkPlayer === null) 
            checkPlayer = matrix[i][j][k][q];
        else if (checkPlayer != matrix[i][j][k][q]) break;
    }
    if (q >= 3) {
        winner = checkPlayer;
        markWinner(winner, id, nestedWinner, setNestedWinner);
        return;
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
        return;
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
            return;
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
            return;
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
                break;
            case 'cell01':
                setCellFilled({
                    ...cellFilled,
                    cell01: true
                });
                break;
            case 'cell02':
                setCellFilled({
                    ...cellFilled,
                    cell02: true
                });
                break;
            case 'cell10':
                setCellFilled({
                    ...cellFilled,
                    cell10: true
                });
                break;
            case 'cell11':
                setCellFilled({
                    ...cellFilled,
                    cell11: true
                });
                break;
            case 'cell12':
                setCellFilled({
                    ...cellFilled,
                    cell12: true
                });
                break;
            case 'cell20':
                setCellFilled({
                    ...cellFilled,
                    cell20: true
                });
                break;
            case 'cell21':
                setCellFilled({
                    ...cellFilled,
                    cell21: true
                });
                break;
            case 'cell22':
                setCellFilled({
                    ...cellFilled,
                    cell22: true
                });
                break;
            default:
                console.log("No cell matched in cases")
        }

    }
}

// CHECK WINNER OF THE GAME
export const checkCompleteWinner = (id, matrix, nestedWinner, winner, setWinner) => {
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));
    const clickedKey = 'winner' + id[0] + id[1];

    if (nestedWinner[clickedKey] === null) return;

    let winner2 = null;
    let diagonal = false;
    let q;
    if (i === j || (i === 2 && j === 0) || (i === 0 && j === 2))
        diagonal = true;

    // check row
    let checkPlayer = null;
    for (q = 0; q < 3; q++) {
        const checkKey = 'winner' + id[0] + q.toString();
        if (nestedWinner[checkKey] === null) break;
        if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
        else if (checkPlayer != nestedWinner[checkKey]) break;
    }
    if (q >= 3) {
        winner2 = checkPlayer;
        setWinner(winner2);
        return;
    }

    // check col
    checkPlayer = null;
    for (q = 0; q < 3; q++) {
        const checkKey = 'winner' + q.toString() + id[1];
        if (nestedWinner[checkKey] === null) break;
        if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
        else if (checkPlayer != nestedWinner[checkKey]) break;
    }
    if (q >= 3) {
        winner2 = checkPlayer;
        setWinner(winner2);
        return;
    }

    // check diagonal
    if (diagonal === true) {
        // top left to bottom right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            const checkKey = 'winner' + q.toString() + q.toString();
            if (nestedWinner[checkKey] === null) break;
            if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
            else if (checkPlayer != nestedWinner[checkKey]) break;
        }
        if (q >= 3) {
            winner2 = checkPlayer;
            setWinner(winner2);
            return;
        }

        // bottom left to top right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            const checkKey = 'winner' + (2 - q).toString() + q.toString();
            if (nestedWinner[checkKey] === null) break;
            if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
            else if (checkPlayer != nestedWinner[checkKey]) break;
        }
        if (q >= 3) {
            winner2 = checkPlayer;
            setWinner(winner2);
            return;
        }
    }
}