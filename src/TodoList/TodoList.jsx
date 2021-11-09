import "./TodoList.css";
import React from "react";

function template() {
  const {dataobj} = this.state;
  return (
    <div className="todo-list">
      <h4 className="h4-title">TodoList:Keep track of everything</h4>
      <br />
      <br />
      <b>Task: </b>
      <input
        class="form-control"
        onChange={this.getthetask}
        type="text"
        placeholder="readonly input example"
        className="input"
      />
      <br />
      <br />
      <button
        type="button"
        onClick={this.addTaskToList}
        class="btn btn-success"
      >
        Add Notes
      </button><br/><br/>

      <div>

{
       
       this.state.myTasks.length > 0 ? 
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              {/* <th scope="col">Done</th> */}
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.myTasks.map((val,index)=>{
                return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val}</td>
                        {/* <td><button type="button" class="btn btn-success">Finish</button></td> */}
                        <td><button type="button" onClick={()=>this.fndelete(index)} class="btn btn-danger">Delete</button></td>
                </tr>
             })
            }
          </tbody>
          
        </table>
        :
        <h4 className="default">Pls Add Some Work to be Done!</h4>
}
      </div>
    </div>
  );
}

export default template;
