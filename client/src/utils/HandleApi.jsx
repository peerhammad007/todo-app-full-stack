import axios from 'axios';

const baseUrl = 'http://localhost:4000'

const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setTodo(data);
    })
}

const addTodo = (text, setText, setTodo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText('');
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err));
}

const updateTodo = (_id, text, setText, setTodo, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id, text})
    .then((data) => {
        console.log(data);
        setText('');
        setIsUpdating(false);
        getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
}

export {getAllTodo, addTodo, updateTodo};