import React from 'react';
import { connect } from 'react-redux';


function Dashboard(props) {
  const {todos = [], column} = props;
  return (
    <div className="App">
      {todos.map(el => <li>{el.title}</li>)}
      {column[0].name}

    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  column: state.columns
});

export default connect(mapStateToProps, null)(Dashboard);
