const calculator = () => {
    
    const addFunction = (a, b) => {
        return a + b;
    }

    const subtractFunction = (a, b) => {
        return a - b;
    }

    const multiplyFunction = (a, b) => {
        return a * b;
    }

    const divideFunction = (a, b) => {
        return a / b;
    }

    return{
        addFunction,
        subtractFunction,
        multiplyFunction,
        divideFunction,
    }
}

export default calculator;