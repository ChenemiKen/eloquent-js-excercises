
/*There is a new mobile game that starts with consecutively numbered clouds.Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

Example
Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

Function Description
Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers

Returns
int: the minimum number of jumps required

Input Format
The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

Constraints

Output Format
Print the minimum number of jumps needed to win the game.let si11 = 7 */


let si12 = [0,0, 1, 0, 0, 1, 0]
let so1 = 4
let si21 = 6
let si22 = [0, 0, 0, 0, 1, 0]
let so2 = 3

console.log(jumpingOnClouds(si22))
function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0
    for(let i=0; i<c.length; i++){
        // console.log(i)
        if(c[i+2]===0){
            jumps++
            i++
        }else if(c[i+1]===0){
            jumps++
        }
    }
    return jumps
}