import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            client: '',
            address: '',
            income: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    changeHandlerIncome = e => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/solicitations/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    } 

    refreshPage(){
        window.location.reload(false)
    }

    render(){
        const { client, address, income } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler} method='post'>
                
                <div class="form-row">
                
                    <div class="form-group col-md-3">
                        <label for="client">Cliente:</label>
                        <input type="text" name="client" value={client} onChange={this.changeHandler}/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="address">Endereço:</label>
                        <input type="text" name="address" value={address} onChange={this.changeHandler}/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="income">Renda:</label>
                        <input type="number" name="income" value={income} onChange={this.changeHandlerIncome}/>
                    </div>
                    <p></p>
                    <div>

                        <button type="submit" class="btn btn-primary" onClick={this.refreshPage}>Enviar solicitação</button>
                    </div>
                </div>

                </form>
            </div>
        )
    }

}

export default PostForm