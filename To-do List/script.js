const input = document.getElementById('input')
const add = document.getElementById('add')
const list = document.querySelector('.List')

add.addEventListener('click', addtask)

input.addEventListener('keydown', function(e){
    if (e.key === 'Enter' ){
        addtask()
    }
})

function addtask(){
    const task = input.value.trim()

    if (task === ''){
        alert('Please Enter Task Name')
        return
    }

    const li = document.createElement('li')
    const span = document.createElement('span')

    span.textContent = task

    const completebtn = document.createElement('button')
    completebtn.textContent = 'Done'
    completebtn.classList.add('complete-btn')

    completebtn.addEventListener('click', function(){
        li.classList.toggle('completed')
        completebtn.disabled = true
    })

    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'delete'
    deletebtn.classList.add('delete-btn')

    deletebtn.addEventListener('click', function(){
        li.remove()
    })

    li.appendChild(span)
    li.appendChild(completebtn)
    li.appendChild(deletebtn)
    list.appendChild(li)

    input.value = ''
    input.focus()
}