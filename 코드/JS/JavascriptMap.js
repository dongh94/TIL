const jsMap = new Map();

jsMap.set('test1', 'Hello Javascript Map');
// jsMap.set(test2, 'test2');
// jsMap.set('test3', test3);
jsMap.set(1, 'Map2')
jsMap.set(false, 3)
console.log('jsMap: ', jsMap);

const getMap = jsMap.get('test1')
console.log('getMap: ', getMap);

const hasMap = jsMap.has('test1')
console.log('hasMap: ', hasMap);

const deleteMap = jsMap.delete(1)
console.log('deleteMap: ', deleteMap);
console.log('jsMap: ', jsMap);

const sizeMap = jsMap.size
console.log('sizeMap: ', sizeMap);

const keysMap = jsMap.keys();
console.log('keysMap: ', keysMap);

const valuesMap = jsMap.values();
console.log('valuesMap: ', valuesMap);

const entries = jsMap.entries();
console.log('entries: ', entries);

jsMap.forEach(v => console.log(v))

const streamMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
console.log(streamMap)

const mapMap = new Map([...streamMap].map(([k, v]) => [k, v * 2]))
console.log(mapMap)

const filterMap = new Map(Array.from(streamMap).filter(([k, v]) => v >= 2))
console.log(filterMap)