for(i=0; i<=7; i++){
    my_string = ''
    form = ''
    mid = Math.ceil(7/2)
    for(j=0; j<7; j++){
        if(j=mid){
            my_string += '#'
        }else{
            my_string += ' '
        }
    }
    console.log(my_string)
}
console.log('end')