/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs.length === 0 ) return ""
    for( let i = 0 ; i < strs[0].length;i++ ){
        const character = strs[0][i]
        for ( let j = 0 ; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]) return prefix
        }
        
        prefix = prefix + character
    }
    
    return prefix
};