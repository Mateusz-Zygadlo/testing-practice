const arrayAnalysis = (arr) => {
    
    const average = arr.reduce((acc, cur) => acc + cur) / arr.length;
    const min = arr.sort((a, b) => a - b)[0];
    const max = arr.sort((a, b) => a - b)[arr.length - 1];
    const length = arr.length;
    
    return {
        average,
        min,
        max,
        length,
    };
}

export default arrayAnalysis;