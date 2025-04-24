'use strict'
const list = document.getElementById('toDoBar')
const listContainer = document.querySelector('.list-container')
const btnAdd = document.querySelector('.btn-add')
const dateLabel = document.querySelector(".date");

function addList() {
    if(list.value === '') {
        alert('Write something')
    } else {
        let li = document.createElement('li')
        li.innerHTML = list.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "&times"
        li.appendChild(span)
    }
    list.value = ""
    saveData()
}

btnAdd.addEventListener('click', function(){
    addList()
})

list.addEventListener('keydown',function(e){
    if(e.key === 'Enter') {
        addList()
    }
}) 

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveData()
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

const date = new Date()
const dayName = date.toLocaleDateString('en-US',{
    weekday:'long'
})
const fullDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day:'numeric'
})
dateLabel.innerHTML = `${dayName} ${fullDate} `



function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML =localStorage.getItem('data')
}
showTask()

