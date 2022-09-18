// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//   const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0)

// findMin
// const findMin = (...arguments) => Math.min(...arguments)


// meregeObjects
// const meregeObjects = (object1, object2) =>({...object1, ...object2})

// doubleAndReturnArgs
// const doubleAndReturnArgs = (arr, ...arg) => [...arr, ...arg.map(v +> v *2)]


// Slice and Dice

// const removeRandom = items => {
//     let x = Math.floor(Math.random() * items.length);
//     return [...items.slice (0, x), ...items.slice(x + 1)];
// }


// const extend = (arr1, arr2) => {
//     return[...arr1, ...arr2];
// }


// const addKeyValue = (obj, key, val) => {
//     let nwobject = {...obj}
//     nwobject[key] = val;
//     return nwobject;
// }


// const combine = (obj1, obj2) => {
//     return{...obj1, ...obj2};
// }

const update = (obj, key, val) => {
    let nwobject = {...obj}
    nwobject[key] = val;
    return nwobject;
}