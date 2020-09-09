import React, { Component } from 'react'

import { Form } from 'react-bootstrap'


class addTodo extends Component{

    constructor(props){

        super(props)

        this.state = {

            id: null,
            todo: '',
            status: false,
            isEditMode:false
            
        }

    }

    /**
     * 
     * @param {
     * } e : object
     * 
     * handleChange function : onChange
     */

    handleChange = (e) => {
        this.setState({

            id: Math.random(),
            todo: e.target.value


        })
    }

    /**
     * 
     * @param {*} e 
     * handleSubmit : confirm update 
     */

    handleSubmit = (e) =>{

        e.preventDefault();
        this.props.addTodo(this.state)

    }

    render(){


        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Control className='rounded-0' size='lg' type='text' placeholder='Your todos' onChange={this.handleChange}/>
            </Form.Group>
            </Form>

            
        )
    }





}
export default addTodo;