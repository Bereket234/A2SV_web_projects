const _ = require('lodash')

const arr = [3,2,1]
console.log(arr)

console.log(_.chunk(arr,2))


console.log(_.sortBy(arr))

console.log(_.filter(arr,(num)=>num%2))

console.log(_.concat(arr, 2, [3], [[4]]))
//debounce
const debouncer = _.debounce(()=>{console.log('debounced')},3000,{leading:false,trailing:true})
debouncer()

console.log("after oprations",arr)