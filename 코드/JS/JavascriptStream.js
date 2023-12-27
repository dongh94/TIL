/**
 * forEach(i => console.log(i)): 전체 반복
 * 
 * map(i => i + 1): 변환 값 Array 
 * filter(i => i > 1): True 값 Array
 * sort((a, b) => a - b): 정렬 Array (a-b: asc / b-a: desc)
 * slice(0, 2): 0 ~ 1 까지 잘린 Array
 * 
 * reduce((a, i) => a + i, 0): 누적 값 Value
 * find(i => i === 3): 해당 값 Value
 * indexOf(i): index 값 Value nor -1
 * 
 * some(i => i > 2): true/ false
 * every(i => i > 0): true/ false 
 */

const array = [1, 2, 3, 4]
console.log('array: ', array);

// 1-1. forEach - array.forEach(callback) : 전 반복
array.forEach((item, key) => {
    console.log('array[' + key + '] : ' + item++)
    return item
})
console.log('array: ', array);

// 1-2. forEach - 전체 반복
const array2 = []
array.forEach(item => {
    item++
    array2.push(item)
})
console.log('array2: ', array2);
// 2. map - return 새로운 변환 값 Array
const map_array = array.map(item => { return item * 2 });
console.log('map_array: ', map_array);

// 3. filter - return 조건 True인 값의 배열
const filter_array = array.filter((item) => { return item > 2 })
console.log('filter_array: ', filter_array);

// 4. 원본, return 값 둘다 정렬
const sort_array = array.sort((a, b) => { return a - b });
console.log('sort_array: ', sort_array);
console.log('array: ', array);

// 5. 첫 포함, 마지막 불포함(보통 길이) 배열 return
const slice_array = array.slice(0, 2);
console.log('slice_array: ', slice_array);

const slice_array2 = array.slice(2, 1);
console.log('slice_array2: ', slice_array2);

// 6. reduce - return 누적 값 acc
const reduce_value = array.reduce((acc, curr) => { return acc + curr }, 0)
console.log('reduce_value: ', reduce_value);

// 7. find : 조건 True인 첫 값
const find_value = array.find((item) => { return item === 3 });
console.log('find_value: ', find_value);

// 7. find : 조건 True인 첫 인덱스
const findIndex_value = array.findIndex((item) => item === 2 || item === 3)
console.log('findIndex_value: ', findIndex_value);

// 8. 찾지 못하면 -1
const index = array.indexOf(3);
console.log('index: ', index);

// 9. true
const some_bool = array.some((i) => { return i > 2 });
console.log('some_bool: ', some_bool);

// 10. true
const every_bool = array.every((i) => { return i > 0 });
console.log('every_bool: ', every_bool);

// 11. reduce
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const fruitCount = fruits.reduce((acc, fruit) => {
    if (!acc[fruit]) {
        acc[fruit] = 1;
    } else {
        acc[fruit]++;
    }
    return acc;
}, {});

console.log(fruitCount);
// 결과: { apple: 3, banana: 1, orange: 1, grape: 1 }
const test_arr01 = Object.values({ a: 1, b: 2, c: 3 });
console.log('test_arr01: ', test_arr01);

const test_set01 = new Set(['x', 'y', 'z']).values();
console.log('test_set01: ', test_set01);

const lastIndex = fruits.lastIndexOf('apple');
console.log('lastIndex: ', lastIndex);

const null_v = null;
console.log('null_v: ', null_v === false);
const undefined_v = undefined;
console.log('undefined_v is false ? : ', undefined_v === false);
console.log('undefined_v is just undefined ?: ', undefined_v === undefined);

const Math_array = [1, 2, 3, 4, 5];
const random_value = Math_array[Math.floor(Math.random() * 5)]
console.log('random_value: ', random_value);

min_v = Infinity;
max_v = -Infinity;
Math_min = Math.min(Math_array[4], min_v);
Math_max = Math.max(Math_array[0], max_v);
console.log('Math_min: ', Math_min);
console.log('Math_max: ', Math_max);

const concat_array1 = [1, 2, 3];
const concat_array2 = [4, 5];
const concat_value = 6;
const concat_array = concat_array1.concat(concat_array2, concat_value);
// const concat_array = [...concat_array1, ...concat_array2, concat_value];
console.log('concat_array: ', concat_array);

// true
bin_arr = []
console.log('bin_arr: ', !!bin_arr);

// 반복 plus
const repeatStr = 'abc'
const repeat_array = [...Array(3).fill(repeatStr)]
const repeat_str = Array(3).fill(repeatStr).join('')
console.log('repeat_array: ', repeat_array);
console.log('repeat_str: ', repeat_str);
console.log(repeat_array + ['붙이기'])
console.log(repeat_str + ['붙이기'])

