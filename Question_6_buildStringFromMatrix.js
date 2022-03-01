const Question_6_buildStringFromMatrix = (inMatrixElements, NumRows, NumColumns) => {
    if(NumRows === 0) {
        return -1;
    }
    let matrixString = "";
    // Traversing through the matrix
    for (let i = 0; i < NumRows; i++) {
        for (let j = 0; j < NumColumns; j++) {
            matrixString += inMatrixElements[i][j];
            if(i !== NumRows-1 || j !== NumColumns-1) {
                matrixString += ",";
            }
        }
    }
    return matrixString;
}

const matrix = [[2, 3, 4, 8],
    [5, 7, 9, 12],
    [1, 0, 6, 10]];
console.log(Question_6_buildStringFromMatrix(matrix, 3, 4));
