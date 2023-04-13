function getShortMessages(messages){
    const result =  messages.filter(function(words){
       if(words.message.length < 50){
            return words.message;
       }
    }).map(function(item){
        return item.message;
    })

    return(result);
}

module.exports = getShortMessages;