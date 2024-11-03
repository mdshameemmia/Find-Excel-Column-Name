function convertToTitle(columnNumber) {
    let title = '';
    while (columnNumber > 0) {
        columnNumber--
        const remainder = columnNumber % 26
        title = String.fromCharCode(remainder + 65) + title
        columnNumber = Math.floor(columnNumber / 26)
    }
    
    return title;
}

// console.log(convertToTitle(8000000000))
console.log(convertToTitle(8000000000))