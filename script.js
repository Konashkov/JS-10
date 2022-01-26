
let thisArray = [10, 2 ,45, 78, 56, 2]
let biggestNumber = 0; 
for(let a = 1;a < thisArray.length;a++){
 if(thisArray[a]>thisArray[a-1]) {biggestNumber = thisArray[a]}
 console.log(biggestNumber)
}
console.log(biggestNumber)