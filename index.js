function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        modifiedTodos.push('done - ' + todos[index]);
        return transform(index + 1, todos, modifiedTodos)
    }else{
        return modifiedTodos
    }
}
