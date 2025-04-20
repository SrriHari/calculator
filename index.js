// let hari = ["abc", "def", "xyz"];

// let h = hari.map((value, index, arr) => {
//   return value, index, arr;
// });

// console.log(h);

// hari.sort(a);

/*
forEach (no return)
map (returns)

filter (all element)
find (first matching element)

sort (a-b/b-a)
every (AND)
some (OR)

reduce (accumulating each element)

object

this (calling property of the same object inside a method )
call (another object calling)
apply (same like call, but with array(list))
bind (return)

primitive - Stack(deepCopy)
object, array - Heap(callByReference(shallowCopy))[for deepCopy: obj1 = {...obj2} but if a key has another obj, it is a 
shallowCopy, to make it deepCopy eg:person2 = {...person, hobbies:{...person.hobbies}}]

Another Way to make deep copy:
by using JSON: JSON.stringify
*/

let o = [1, 2, 3, 4, 5];

let sum = o.reduce((acc, val, i, arr) => {
  return acc + val;
}, 0);

console.log(sum);
