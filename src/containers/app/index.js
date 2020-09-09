import React, { Component } from 'react'
import {Container} from 'react-bootstrap';
import Todos from './todoList'
import AddTodo from './addTodo'
import Header from '../layout/title'




class App extends Component {

    constructor(){

        super();

        this.state = {

            todos: [

                { id : 1, todo:'Go to school on 7:00 am', status:true, isEditMode:false},
                { id : 2, todo:'Go to libary on 2:00 pm', status:false, isEditMode:false },
                { id : 3, todo:'Have dinner on 6:00 pm', status:false, isEditMode:false },
                { id : 4, todo:'Have Homeworks on 9:00 pm', status:false, isEditMode:false },
                { id : 5, todo:'Sleep 00:00 am', status:false, isEditMode:false }
             

            ]


        }

    }


    /***
     * 
     * addTodo function : add new todo
     * @todo => an array of object
     * 
     */

    addTodo = (todo) => {

        let todos = [...this.state.todos,todo];
        this.setState({

            todos

        })



    }



    /***
     * 
     * updateTodo fuction : to update Todos.todo 
     * @todo => an array of object
     */

    updateTodo = (todo) => {

        this.setState({
            todos:todo
        })



    }



    /***
     * 
     * editStatus function : update todo.status
     * input: @id : todo.id
     *get Index of the todo by FindIndex()
     * status === true ? status === false : status === true 
     * 
     */

    

    editStatus = (id) => {


        const Index = this.state.todos.findIndex(element => element.id === id )
        let newArr = [...this.state.todos];
        newArr[Index] = {...newArr[Index],status:!newArr[Index].status}


        this.setState({

            todos:newArr
        })




    }


    /***
     * 
     * removeTodo function : remove a todo in todos list
     * input : id then get the todo by Filter function.
     * output : remove the todo.
     * 
     * @id : todo.id
     * 
     */

    removeTodo = (id) =>{


        const todos = this.state.todos.filter(h => {
                return h.id !==id;

        });

        this.setState({

                todos
        })




    }


    /***
     * 
     * changeEditMode function : get status edit mode true or false. 
     * @id : todo.id,
     * 
     */
    changeEditMode = (id) => {

        const Index = this.state.todos.findIndex(element => element.id === id )
        let newArr = [...this.state.todos];
        newArr[Index] = {...newArr[Index],isEditMode:!newArr[Index].isEditMode}


        this.setState({

            todos:newArr
        })

    }



    



render(){


    return(

        <Container className='p-5 shadow-sm'>
            <Header />
            <AddTodo  addTodo= {this.addTodo}  />
            <Todos todos={ this.state.todos } removeTodo={this.removeTodo}
             editStatus={this.editStatus} changeEditMode={this.changeEditMode} updateTodo={this.updateTodo}/>


        </Container>

    )
}





}



export default App