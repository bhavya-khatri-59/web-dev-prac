res = ''

function display(result, nequal = true){
            
    p1 = document.querySelector('.Text')
    if(!nequal){
        p1.innerHTML = parseFloat(result).toFixed(6)
        return
    }
    p1.innerHTML = result

}

function backspace(result) {
    result = result.substring(0, result.length - 1)
    display(result)
    return result
}