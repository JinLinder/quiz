export const selectAction = (sel) =>{
    return {type: 'SELECT', payload: sel}
}

export const resetAction = (sel)=>{
    return {type: 'RESET', payload: sel}
}