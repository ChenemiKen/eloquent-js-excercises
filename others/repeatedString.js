let si = "gfcaaaecbg"
let ni = 547602

console.log(repeatedString(si, ni))

function repeatedString(s, n) {
    // Write your code here
    let lenS = s.length
    let initFreqOfa = 0
    let indexOflasta = 0
    for(let char=0; char<lenS; char++){
        if(s[char] === 'a'){
            initFreqOfa++
            indexOflasta = char
        }
    }
    let notA =lenS - initFreqOfa
    console.log(initFreqOfa)
    // let lastApostn = indexOflasta+1
    let b = Math.floor(n/lenS) /* what to multiply s by  */
    console.log(b)
    let rptdSLessOne = lenS*b
    console.log(rptdSLessOne)
    let aOfRptdS = initFreqOfa*b
    let notAOfRptdS = notA*b
    console.log(notAOfRptdS)
    let c = n-rptdSLessOne
    console.log(c)
    for(let char of s.slice(0,c)){
        if(char === 'a'){
            aOfRptdS++
        }
    }
    return aOfRptdS
}

// function repeatedString(s, n) {
//     // Write your code here
//     let rptdS = ''
//     console.log(rptdS)
//     while(rptdS.length<n){
//         rptdS=rptdS+s
//     }
//     console.log(rptdS)
//     let freqa = 0
//     for(let char of rptdS.slice(0,n)){
//         if(char === 'a'){
//             freqa++
//         }
//     }
//     return freqa
// }
