export const selectAction = (sel) =>{
    return {type: 'SELECT', payload: sel}
}

export const resetAction = ()=>{
    return {type: 'RESET'}
}