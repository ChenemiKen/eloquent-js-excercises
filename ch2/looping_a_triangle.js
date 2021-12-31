/*
LOOPING A TRIANGLE
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/
// solution 1
for(i=0; i<8; i++){
    my_string = ''
    for(j=0; j<i; j++){
        my_string += '#'
    }
    console.log(my_string)
}

// solution 2
for(i=0; i<8; i++){
    my_string = ''
    while(my_string.length<i){
        my_string +='#'
    }
    console.log(my_string)
}