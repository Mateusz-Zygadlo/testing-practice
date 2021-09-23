function capitalize(string){

    const newArr = [...string.toLowerCase()];
    newArr[0] = newArr[0].toUpperCase();

    return newArr.join('');
}

module.exports = capitalize;