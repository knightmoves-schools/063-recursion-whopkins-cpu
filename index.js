function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        modifiedTodos.push({...todos[index], description: 'done - ' + todos[index].description});
        return transform(index + 1, todos, modifiedTodos)
    }else{
        return modifiedTodos
    }
}
