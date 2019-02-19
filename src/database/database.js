import axios from 'axios';

let database = () => {
    let database;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        database = res.data;
    });
    return database;
}

export default database;