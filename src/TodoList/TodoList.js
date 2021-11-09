import React    from "react";
import template from "./TodoList.jsx";

let dumlist=[];

class TodoList extends React.Component {
  constructor(){
    super();
    this.state={
      myTasks:[],
      taskname:'',
      dataobj:{
        task:'',
        id:0
      },
      ObjTask:[]
    }

    this.getthetask = this.getthetask.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    // this.fndelete = this.fndelete.bind(this);
  }

  getthetask(eve){
   const {taskname} = this.state;
   const {value} = eve.target;
   this.setState({
     taskname:value
   })
   console.log(taskname);
  }

  fndelete(index){
    dumlist.splice(index,1);
    this.setState({
      myTasks:dumlist
    })
  }

  addTaskToList(){
    const {taskname,myTasks,dataobj}  = this.state;
    dumlist.push(taskname);
    this.setState({
      myTasks:dumlist,
      dataobj:{
        ...this.state.dataobj,
        task:taskname,
        id:this.id+1
      }
    })
    console.log(myTasks);
    console.log(dataobj);
  }

  render() {
    return template.call(this);
  }
}

export default TodoList;
