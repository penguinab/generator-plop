
const judgeNameOnlyLetter=(name)=>{
    return /(?=^[a-zA-Z]+$)/g.test(name)
}
module.exports={
    judgeNameOnlyLetter
}

