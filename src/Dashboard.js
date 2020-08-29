import React, {useState} from 'react';
import {connect} from 'react-redux';


function Dashboard(props) {
    const [newTodo, setNewTodo] = useState('')

    const addButtonHandler = () => {
        addTodo(newTodo)
        setNewTodo('')
    }

    const {todos = [], addTodo, deleteTodo} = props;
    return (
        <div className="App">
            {todos.map(el => <li>
                {el.title}
                <button onClick={() => deleteTodo(el.id)}>Delete</button>
            </li>)}

            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text"/>
            <button onClick={addButtonHandler}>add new todo</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    column: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
