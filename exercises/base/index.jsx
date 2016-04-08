// Loading react related libraries
var React = require('react');
var ReactDOM = require('react-dom');

//const Task = require('task.jsx');
//var Hello = function (props) {
//  return (<h1>Hello {props.to}!</h1>);
//};

const data = [{
  "id": "1e01ba13-ea47-4d24-9131-d95c23d1bb8f",
  "done": false,
  "task": "Learn React"
}, {
  "id": "076e0daf-e4ee-42af-8c3d-f6210920b0b7",
  "done": true,
  "task": "Rake the yard"
}, {
  "id": "5516fdbb-046a-4a4a-9085-36086b5ef00a",
  "done": false,
  "task": "Buy milk"
}, {
  "id": "385f6953-9658-4b3d-a791-afcd9460cb2b",
  "done": false,
  "task": "Buy eggs"
}, {
  "id": "e8f3921b-157c-4ac5-b54c-24485048a9c1",
  "done": true,
  "task": "Prepare next trip to south"
}];

const Task = function ({id, done, task}) {
  return <div className={'task ' + (done ? 'done' : 'undone')}>
    <div>
      {task}
    </div>
    <AddTaskInput {...this.props} />
  </div>;
};

const AddTaskInput = ({id, done, task}) => {
  return <div className="task-actions">
    <button className="task-btn remove-btn">
      <i className="fa fa-times-circle-o"></i>
    </button>
    <button className="task-btn">
      { done ?
        <i className="done fa fa-check-circle-o"></i>
        :
        <i className="undone fa fa-check-circle-o"></i>
      }
    </button>
  </div>;
};

const TaskList = ({tasks}) => <div>{tasks.map((t) => <Task key={t.id} {...t} />)}</div>;

var TodoApp = function () {
  //var name = "lifelife";
  //const stuff = ['Do dishes', 'Code app', 'Start marketing campaign', 'Get funding'];
  const tasks = data.reduce((col, t) => {
    t.done ? col.done.push(t) : col.undone.push(t);
    return col;
  }, {done: [], undone: []});
  return (
    <div className="todo-app">
      <div className="add-task-container">
        <input
          type="text"
          value=""
          placeholder="Add task..." />
      </div>
      <TaskList tasks={tasks.undone} />
      <TaskList tasks={tasks.done} className="ready-tasks" />
    </div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
