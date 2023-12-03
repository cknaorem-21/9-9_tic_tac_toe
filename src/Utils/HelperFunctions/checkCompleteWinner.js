// CHECK WINNER OF THE GAME
const checkCompleteWinner = (id, matrix, nestedWinner, winner, setWinner, nestedWinnerPlayer) => {
    const [i, j, k, l] = Array.from(id, (number) => parseInt(number));
    const clickedKey = 'winner' + id[0] + id[1];

    // if (nestedWinner[clickedKey] === null) return;

    let winner2 = null;
    let diagonal = false;
    let q;
    if (i === j || (i === 2 && j === 0) || (i === 0 && j === 2))
        diagonal = true;

    // check row
    let checkPlayer = null;
    for (q = 0; q < 3; q++) {
        const checkKey = 'winner' + id[0] + q.toString();
        if(checkKey === clickedKey && nestedWinnerPlayer!=null) checkPlayer = nestedWinnerPlayer;
        else if (nestedWinner[checkKey] === null) break;
        if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
        else if (checkPlayer != nestedWinner[checkKey] && checkPlayer!=nestedWinnerPlayer) break;
    }
    if (q >= 3) {
        winner2 = checkPlayer;
        setWinner((prev)=>prev=winner2);
        return;
    }

    // check col
    checkPlayer = null;
    for (q = 0; q < 3; q++) {
        const checkKey = 'winner' + q.toString() + id[1];
        if(checkKey === clickedKey && nestedWinnerPlayer!=null) checkPlayer = nestedWinnerPlayer;
        else if (nestedWinner[checkKey] === null) break;
        if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
        else if (checkPlayer != nestedWinner[checkKey] && checkPlayer!=nestedWinnerPlayer) break;
    }
    if (q >= 3) {
        winner2 = checkPlayer;
        setWinner((prev)=>prev=winner2);
        return;
    }

    // check diagonal
    if (diagonal === true) {
        // top left to bottom right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            const checkKey = 'winner' + q.toString() + q.toString();
            if(checkKey === clickedKey && nestedWinnerPlayer!=null) checkPlayer = nestedWinnerPlayer;
            else if (nestedWinner[checkKey] === null) break;
            if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
            else if (checkPlayer != nestedWinner[checkKey] && checkPlayer!=nestedWinnerPlayer) break;
        }
        if (q >= 3) {
            winner2 = checkPlayer;
            setWinner((prev)=>prev=winner2);
            return;
        }

        // bottom left to top right diagonal
        checkPlayer = null;
        for (q = 0; q < 3; q++) {
            const checkKey = 'winner' + (2 - q).toString() + q.toString();
            if(checkKey === clickedKey && nestedWinnerPlayer!=null) checkPlayer = nestedWinnerPlayer;
            else if (nestedWinner[checkKey] === null) break;
            if (checkPlayer === null) checkPlayer = nestedWinner[checkKey];
            else if (checkPlayer != nestedWinner[checkKey] && checkPlayer!=nestedWinnerPlayer) break;
        }
        if (q >= 3) {
            winner2 = checkPlayer;
            setWinner((prev)=>prev=winner2);
            return;
        }
    }
}

export {checkCompleteWinner};