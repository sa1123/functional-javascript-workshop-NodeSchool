function countWords(inputWords){
    return inputWords.reduce(function(result, currentWord){
        result[currentWord] = ++result[currentWord] || 1
        return result;
    }, {})
}

module.exports = countWords;