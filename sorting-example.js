var sortArray = [1, 2, 5, 9, 10]

sortArray.sort()

function sortfunction (a,b ) {
    return (a - b)
}

sortArray.sort(sortfunction)
