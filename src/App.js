import React,{Component} from 'react';

import axios from 'axios';

export default class PersonList extends React.Component{
  
  constructor(){
    super();
    this.state={
      name:'',
      id:'',
      persons:[]
    }
  }

  handleChangeAdd=event=>{
    this.setState({name:event.target.value});
  }

  handleChangeDelete = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmitAdd=event=>{
    event.preventDefault();

    let user={
      name:this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }

  handleSubmitDelete = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      let persons=res.data;
      this.setState({persons});
    })
  }



render(){
  let persons=this.state.persons;

  return(
    <div>
    <ul>
      {persons.map(person=><li>{person.name}</li>)}
    </ul>
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={this.handleChangeAdd}></input>
        </label>
        <button onClick={this.handleSubmitAdd}>Add</button>

        <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChangeDelete} />
          </label>
          <button onClick={this.han}>Delete</button>

      </form>
    </div>
    </div>
  )
}


  }