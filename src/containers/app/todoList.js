import React from 'react'
import {ListGroup,Alert,Row,Col,Form} from 'react-bootstrap';
import { Remove, EditAttributes } from '@material-ui/icons';
import { Button} from '@material-ui/core';



const Todos = ({todos, removeTodo, editStatus,changeEditMode,updateTodo}) => {

  

   /**
    * finIndexTodo: find Index of an object
    * @param {*} e : obj
    * @returns Index : index of object was found 
    */

    const findIndexTodo = (e) => {
        
        let id =  e.target.getAttribute('data-id');
        let Index = todos.findIndex(element => element.id === parseInt(id) )
        
        return Index;

    }
    
    
    
    /**
     * handleChange : get event onChange of update Todo input
     * then update  todo.todo
     * @param {*} e : object
     * 
     */
    const handleChange = (e) => {

        let Index = findIndexTodo(e)
        let newArr = [...todos];
        newArr[Index] = {...newArr[Index],todo:e.target.value}

        const todo = [...newArr]
        updateTodo(todo)

    
       

    }


    /**
     * handleSubmit : defined update and reset todo isEditMode to false.
     * when the object has updated
     * @param {*} e : object
     */
    const handleSubmit = (e) => {
         e.preventDefault();
         let Index = findIndexTodo(e);
         let newArr = [...todos];
         newArr[Index] = {...newArr[Index],isEditMode:false}
         const todo = [...newArr]
         updateTodo(todo)
        
     
        

    }

    /**
     * 
     * @param {*} e : object
     * split to handle update the object if user want todo.
     * 
     * renderEdit function conrainers form input to update.
     * renderDefault function container default showing.
     * 
     *  when user click on Todo text -> isEditMode : true and call RenderEdit.
     *  -> show update form, submit update -> is EditMode:false
     * 
     */

   const renderDefault = (e) => {
        return (
         <div>
            {     
            e.status ? (<del className='h6 text-capitalize'>{e.todo}</del>) : 
            (<h6 className='text-capitalize' onDoubleClick={() => {changeEditMode(e.id)}}>{e.todo}</h6>)
            }

         </div>
              )
    }


    const rederEdit = (e) => {

        return (
            <Form onSubmit={handleSubmit} data-id={e.id}>
            <Form.Group>
            <Form.Control type='text' defaultValue={e.todo} className='w-100' onChange={handleChange} data-id={e.id}/>
            </Form.Group>
            </Form>

        )
    }


    const ListTodos = todos.length ?  todos.map(

        (todo) => {
            return (

                <ListGroup.Item key={todo.id} className='rounded-0'>

                    <Row className='mt-3'>
                        <Col md={6}>{todo.isEditMode ?  rederEdit(todo) : renderDefault(todo)} </Col>
                        <Col md={2}>{todo.status ? (<kbd  className='bg-success'>Completed</kbd>) : (<kbd className='bg-info'>Incomplete</kbd>)}</Col>
                        <Col md={2}>{todo.status ? (<EditAttributes  className='text-success' onClick={()=>{editStatus(todo.id)}} />) 
                                    : (<EditAttributes className='text-info'  onClick={()=>{editStatus(todo.id)}} />)}</Col>
                        <Col md={2}>
                            <Button onClick={()=>{removeTodo(todo.id)}} className='p-sm-0 m-sm-0'>
                                <Remove className='text-danger'/>
                            </Button>
                           
                        </Col>
                    </Row>
           
                    
                </ListGroup.Item>



            )


        }


    ):

    (
        <Alert variant='info'>
            You havent todos list!
        </Alert>
    )



    return (
        <ListGroup>
            {ListTodos}
        </ListGroup>
      
    )

}



export default Todos;