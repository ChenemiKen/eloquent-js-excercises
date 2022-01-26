let ni = 8
let pathi = "UDDDUDUU"
let pathSplit = pathi.split('')
// console.log(pathSplit)

console.log(countingValleys(ni,pathi))

function countingValleys(steps, path) {
    // Write your code here
    function maping(a){
        if(a.toUpperCase()==='U'){
            return 1
        }else if(a.toUpperCase()==='D'){
            return -1
        }else{
            return 0
        }
    }
    let pathMaped = path.split('').map(maping)
    let valleyCount = 0
    let sum = 0
    for(let i=0; i<steps; i++){
        let prevsum = sum
        sum += pathMaped[i]
        if(prevsum === 0 && sum === -1){
            valleyCount++
        }
    }
    return valleyCount
}