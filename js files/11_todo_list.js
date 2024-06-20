arr = []
function add() {
    i1 = document.querySelector('.i1')
    i2 = document.querySelector('.i2')
    arr.push([i1.value, i2.value])
    i1.value = ''
    i2.value = ''
    html = ''
    for(i = 0; i < arr.length; i++) {
        html += `<div>${arr[i][0]}</div> <div>${arr[i][1]}</div><div><button class = 'del' onclick = 'del(${i})'>Delete</button></div>`
    }
    div = document.querySelector('.d')
    div.innerHTML = html
}
function shortcut(event) {
    if(event.key == 'Enter'){
        add()
    }
}
function del(i) {
    arr.splice(i, 1)
    html = ''
    for(i = 0; i < arr.length; i++) {
        html += `<div>${arr[i][0]}</div> <div>${arr[i][1]}</div><div><button class = 'del' onclick = 'del(${i})'>Delete</button></div>`
    }
    div = document.querySelector('.d')
    div.innerHTML = html
}