const caesarCipher = (string) => {
    const caesarCipherArr = [...string];
    const regex = /^[A-Za-z]+$/;
    const finalArr = [];

    for(let i = 0; i < caesarCipherArr.length; i++){
        if(!regex.test(caesarCipherArr[i])){
            finalArr.push(caesarCipherArr[i]);
        }else{
            const letterToUnicode = caesarCipherArr[i].charCodeAt();
            let addThree = letterToUnicode + 3;

            if(addThree > 123){
                addThree = addThree - 122 + 64;
            }

            const toNormalLetter = String.fromCharCode(addThree);

            finalArr.push(toNormalLetter);
        }
    }

    return finalArr.join('');
}

module.exports = caesarCipher;