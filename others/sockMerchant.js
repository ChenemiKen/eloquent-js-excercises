// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.
const arr = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

// brute force
// console.log(sockMerchant(15, arr))

function sockMerchant(n, ar) {
    // Write your code here
    let pairs = 0
    for(let i=0; i<n; i++){
        console.log(ar[i])
        let sar = ar.slice(i+1,)
        console.log(sar)
        for(let j=0; j<sar.length; j++){
            if(sar[j] === ar[i]){
                pairs +=1
                ar.splice(i,1)
                console.log(ar.splice(i+j,1))
                i-=1
                break
            }
        }
        console.log(ar)
    }
    return pairs
}


// binary search
console.log(sockMerchant2(15, arr))

function sockMerchant2(n, ar) {
    // Write your code here
    let pairs = 0
    let mid = Math.floor((ar.length)/2)
    for(let i=0; i<mid; i++ ){
        for(let j=mid; j<arr.length; j++){
            if(ar[j] === ar[i]){
                pairs++
                ar.splice(i,1)
                ar.splice(j,1)
                i--
                break
            }
        }
    }
}