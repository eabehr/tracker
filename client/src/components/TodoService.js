import axios from 'axios';

class TodoService {

    sendData(data) {
        axios.post('http://localhost:4200/todos/add/post', {
            title: data.title,
            cadence: data.cadence,
            frequency: data.frequency
        })
        .then(function (response) {
           console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default TodoService;