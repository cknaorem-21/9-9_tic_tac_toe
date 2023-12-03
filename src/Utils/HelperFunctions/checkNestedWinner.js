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

const checkNestedWinner = (id, matrix, nestedWinner, setNestedWinner) => {
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
        return winner;
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
        return winner;
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
            return winner;
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
            return winner;
        }
    }

    // if no winner found
    return null;
}

export {checkNestedWinner}