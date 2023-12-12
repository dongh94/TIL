const str = 'Hello Javascript String';
const length = str.length;
console.log('length: ', length);

const charat = str.charAt(9);
console.log('charat: ', charat);

const charcodeat = str.charCodeAt(9);
console.log('charcodeat: ', charcodeat);

const fromcharcode = String.fromCharCode(97);
console.log('fromcharcode: ', fromcharcode);

const indexof = str.indexOf('a');
console.log('indexof: ', indexof);

const lastindexof = str.lastIndexOf('a')
console.log('lastindexof: ', lastindexof);

const str_split = str.split('');
console.log('str_split: ', str_split);

const str_slice1 = str.slice(6);
const str_slice2 = str.slice(6, 16);
console.log('str_slice1: ', str_slice1);
console.log('str_slice2: ', str_slice2);

const substr = str.substring(6, 16)
console.log('substr: ', substr);

const replace = str.replace('Javascript', 'javascript');
const replace_all = str.replaceAll('l', 'L');
console.log('replace: ', replace);
console.log('replace_all: ', replace_all);

const str2 = ' + String2'
const str_concat = str.concat(str2);
console.log('str2: ', str2);
console.log('str_concat: ', str_concat);

const str3 = '     Hello     Javascript   String     '
const trim_start = str3.trimStart();
const trim_end = str3.trimEnd();
const trim = str3.trim();
console.log('str3: ', str3);
console.log('trim_start: ', trim_start);
console.log('trim_end: ', trim_end);
console.log('trim: ', trim);

console.log('바뀌지 않는 초기 String : ', str)

console.log('tolowercase: ', str.toLowerCase());
console.log('touppercase: ', str.toUpperCase());
console.log('includes: ', str.includes('Javascript'))

const str_arr = ['banana', 'apple', 'orange', 'grape'];
str_arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
console.log('str_arr: ', str_arr); // 내림차순 출력: ['orange', 'grape', 'banana', 'apple']

// 반복 메서드 !!
const repeatStr = str.repeat(5);
console.log('repeatStr: ', repeatStr);
