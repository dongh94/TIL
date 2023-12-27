function permuteArray(array) {
    const result = [];
    const indexes = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            indexes.push(i);
        }
    }

    const tempArray = array.slice();
    for (let i = 0; i < indexes.length; i++) {
        tempArray[indexes[i]] = 1;
        for (let j = i + 1; j < indexes.length; j++) {
            tempArray[indexes[j]] = 1;
            result.push([...tempArray]);
            tempArray[indexes[j]] = 0;
        }
        tempArray[indexes[i]] = 0;
    }

    return result;
}

const myArray = [0, 0, 0, 0];
const permutations = permuteArray(myArray);
console.log("결과:", permutations);
