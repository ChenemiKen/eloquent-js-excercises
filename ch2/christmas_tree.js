christmassTree(30)

function christmassTree(n){
    let m = n-1
    let branch = 1
    while(n>0){
        space = ' '.repeat(n)
        branches = '#'.repeat(branch)
        line = space+branches
        console.log(line)
        n--
        branch+=2
    }
    for(i=0; i<=2; i++){
       console.log(' '.repeat(m)+"''")
    }
    console.log(" ".repeat(m-2)+"======")
}