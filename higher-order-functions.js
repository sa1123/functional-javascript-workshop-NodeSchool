function repeat(operation, num){
    for(let i = 0; i<num; i++){
        operation(i);
    }
}

module.exports = repeat