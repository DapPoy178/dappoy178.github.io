let input   = document.querySelector('.add-item');
let btnAdd  = document.querySelector('.btn-add');
let task   = document.querySelector('.card-body');

// add func
btnAdd.addEventListener('click', () => {
    if  (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('tasks');
        newItem.innerHTML   = 
        `
        <p> ${input.value} </p>
        <div class="btn-act d-flex flex-row">
            <i class="bi bi-check-square px-3 done"></i>
            <i class="bi bi-x-square-fill delete"></i>
        </div>
        `
        task.appendChild(newItem);
        input.value = '';
    }else{
        alert('Please fill the empty field');
    }
})

// delete func
task.addEventListener('click', (e) => {
    if  (e.target.classList.contains('delete'))
    {
        e.target.parentElement.parentElement.remove();
    }
})

// check func
task.addEventListener('click', (e) => {
    if  (e.target.classList.contains('done')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})