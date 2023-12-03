const checkCompletelyFilled = (id, matrix, cellFilled, setCellFilled) => {
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
                return true;
            case 'cell01':
                setCellFilled({
                    ...cellFilled,
                    cell01: true
                });
                return true;
            case 'cell02':
                setCellFilled({
                    ...cellFilled,
                    cell02: true
                });
                return true;
            case 'cell10':
                setCellFilled({
                    ...cellFilled,
                    cell10: true
                });
                return true;
            case 'cell11':
                setCellFilled({
                    ...cellFilled,
                    cell11: true
                });
                return true;
            case 'cell12':
                setCellFilled({
                    ...cellFilled,
                    cell12: true
                });
                return true;
            case 'cell20':
                setCellFilled({
                    ...cellFilled,
                    cell20: true
                });
                return true;
            case 'cell21':
                setCellFilled({
                    ...cellFilled,
                    cell21: true
                });
                return true;
            case 'cell22':
                setCellFilled({
                    ...cellFilled,
                    cell22: true
                });
                return true;
            default:
                console.log("No cell matched in cases")
        }

    }

    return false;
}

export {checkCompletelyFilled};