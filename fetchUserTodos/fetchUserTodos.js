function fetchUserTodos() {
    return Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
    ])
}

fetchUserTodos()
    .then(response => {
        response.forEach(res => {
            if (!res.ok) throw new Error("Fetch failed! Invalid URL!");
        });
        return Promise.all(response.map(res => res.json()));
    })
    .then(data => {
        const result = [];
        const users = data[0];
        const todos = data[1];
        for (let i = 0; i < users.length; i++) {
            const userTodos = [];
            for(let j = 0; j < todos.length; j++) {
                if (users[i].id === todos[j].userId) {
                    userTodos.push(todos[j]);
                }
            }
            users[i].todos = userTodos;
            result.push(users[i]);
        }
        result.forEach(res => console.log(res));
    })
    .catch(err => {
        console.log(err);
    })