function getShortMessages(messages){
    return messages.filter(function(words){
       return words.message.length < 50;
    }).map(function(word){
        return word.message
    });
}

module.exports = getShortMessages;