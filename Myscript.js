const todo = document.getElementById('todo')

function add(){
    //1.ambil nilai dari textnya
    let newText = document.getElementById('new_text')

    //2. tambahkan list ke dalam ul
    let newTodo = "<li> <span onclick='toggle(this)'>" + newText.value + "</span>" +
                "<span onclick='removeItem(this)'> [x] </span>" +
                "</li>"

    todo.insertAdjacentHTML('afterbegin',newTodo);   

    //3. kosongkan fieldnya
    newText.value=" "
}

function toggle(el){
    el.classList.toggle('done')
}

function removeItem(el){
    el.parentElement.remove()
}