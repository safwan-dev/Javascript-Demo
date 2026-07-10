const input = document.getElementById('input')
const add = document.getElementById('add')
const activeList = document.getElementById('active-list')
const completedList = document.getElementById('completed-list')

add.addEventListener('click', addTask)

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask()
    }
})

function addTask() {
    const task = input.value.trim()

    if (task === '') {
        alert('Please Enter Task Name')
        return
    }

    activeList.appendChild(createTaskItem(task))
    input.value = ''
    input.focus()
}

function createTaskItem(taskText, completed = false) {
    const li = document.createElement('li')
    if (completed) {
        li.classList.add('completed')
    }

    const span = document.createElement('span')
    span.textContent = taskText

    const editInput = document.createElement('input')
    editInput.type = 'text'
    editInput.classList.add('edit-input')
    editInput.value = taskText
    editInput.style.display = 'none'

    const actions = document.createElement('div')
    actions.classList.add('task-actions')

    let completeBtn

    if (!completed) {
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.classList.add('edit-btn')

        completeBtn = document.createElement('button')
        completeBtn.textContent = 'Done'
        completeBtn.classList.add('complete-btn')

        editBtn.addEventListener('click', function () {
            const isEditing = editInput.style.display !== 'none'

            if (!isEditing) {
                span.style.display = 'none'
                editInput.style.display = 'block'
                editInput.value = span.textContent
                editInput.focus()
                editBtn.textContent = 'Save'
                completeBtn.disabled = true
                return
            }

            const newText = editInput.value.trim()
            if (newText === '') {
                alert('Task cannot be empty')
                return
            }

            span.textContent = newText
            span.style.display = ''
            editInput.style.display = 'none'
            editBtn.textContent = 'Edit'
            completeBtn.disabled = false
        })

        editInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                editBtn.click()
            }
        })

        completeBtn.addEventListener('click', function () {
            li.remove()
            completedList.appendChild(createTaskItem(span.textContent, true))
        })

        actions.appendChild(editBtn)
        actions.appendChild(completeBtn)
    }

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', function () {
        li.remove()
    })

    actions.appendChild(deleteBtn)

    li.appendChild(span)
    li.appendChild(editInput)
    li.appendChild(actions)

    return li
}
