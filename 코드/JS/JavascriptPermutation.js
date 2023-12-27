// 0.  1부터 N까지 자연수 중에서 중복 없이 r개를 고른 수열 (중복X 순열) nPr
// 조건1. 고른 수열은 오름차순이어야 한다. (dept = r index/ start or cut = n index + i check)
// 조건2. 같은 수를 여러 번 골라도 된다. (dept = r index/ start)
// 조건3. 둘다
// 조건4. newArr 에서 뽑아서 순열

// 5. n개의 자릿수 0에서 중복 없이 r개를 1로 바꾸는 수열 (중복 X 순열)

const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "JavascriptPermutation.txt";
const inputArr = fs.readFileSync(filePath).toString().trim().split("\n")
const input = inputArr.filter(Number).map(Number)

const [n, r] = input;
const result = Array(r).fill(0);
const check = Array(n + 1).fill(false);

const newArr = Array(n).fill(0).map((v, i) => i * 2).reverse();
const newCheck = Array(newArr.length).fill(false)

const binCheck = Array(n).fill(0); // r개만 1

// dept는 기본적으로 r 의 index
// for 는 기본적으로 n 의 length
// i 는 기본적으로 n 의 index => check 든 visit 이든.
// result 는 기본적으로 n 의 r = result[dept]
const funcPermutation = (dept) => {
    if (dept === r) {
        console.log(result);
        return
    }

    for (let i = 1; i < n + 1; i++) {
        if (!check[i]) {
            result[dept] = i;
            check[i] = true;
            funcPermutation(dept + 1)
            check[i] = false
        }
    }
}

// cut으로 n의 index의 별도 기준값이 되어 조정 가능
const funcPermutation1 = (dept, cut) => {
    if (dept === r) {
        console.log(result)
        return
    }

    for (let i = 1; i < n + 1; i++) {
        if (!check[i] && i > cut) {
            result[dept] = i;
            check[i] = true;
            funcPermutation1(dept + 1, i);
            check[i] = false;
        }
    }
}

// start로 n 의 index 자체를 조정 가능
const funcPermutation1_1 = (dept, start) => {
    if (dept === r) {
        console.log(result)
        return
    }

    for (let i = start; i < n + 1; i++) {
        if (!check[i]) {
            result[dept] = i;
            check[i] = true;
            funcPermutation1_1(dept + 1, i + 1);
            check[i] = false;
        }
    }
}

const funcPermutation2 = (dept) => {
    if (dept === r) {
        console.log(result);
        return
    }

    for (let i = 1; i < n + 1; i++) {
        result[dept] = i;
        funcPermutation2(dept + 1)
    }
}

const funcPermutation3 = (dept, cut) => {
    if (dept === r) {
        console.log(result)
        return
    }

    for (let i = 1; i < n + 1; i++) {
        if (cut <= i) {
            result[dept] = i;
            funcPermutation3(dept + 1, i)
        }

    }
}
// 복습
// dept: r(골라야하는 수 수)의 index
// for: n(총 수)만큼
// check n(총 수)의 index
// result n개에서 r을 고른 return 값
const funcPermutation4 = (dept) => {
    if (dept === r) {
        console.log(result);
        return
    }

    for (let i = 0; i < newArr.length; i++) {
        if (!newCheck[i]) {
            result[dept] = newArr[i]
            newCheck[i] = true
            funcPermutation4(dept + 1)
            newCheck[i] = false

        }
    }
}

// dept (r)가 cnt 되면 
// start (i)가 index가 되면 된다.
const funcPermutation5 = (dept, start) => {
    if (dept === r) {
        console.log(binCheck)
        return
    }

    for (let i = start; i < n; i++) {
        if (!binCheck[i]) {
            binCheck[i] = 1
            funcPermutation5(dept + 1, i + 1)
            binCheck[i] = 0
        }
    }
}
// 위의 함수와 동일하지만 이런식으로 매개변수의 위치를 바꾸면 기억하기 힘들 수 있음. 
const funcPermutation5_1 = (start, cnt) => {
    if (cnt === r) {
        console.log(binCheck)
        return
    }

    for (let i = start; i < n; i++) {
        if (!binCheck[i]) {
            binCheck[i] = 1
            funcPermutation5(i + 1, cnt + 1)
            binCheck[i] = 0
        }
    }
}

// funcPermutation(0)
// funcPermutation1(0, 0)
// funcPermutation1_1(0, 0)
// funcPermutation2(0)
// funcPermutation3(0, 0)
console.log('newArr: ', newArr);
funcPermutation4(0)
// funcPermutation5(0, 0)




