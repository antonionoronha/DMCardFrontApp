import React, { Component } from 'react';
import './App.css';
import api from './api';
import PostForm from './components/PostForm'

class App extends Component{

  state= {
    solicitations: [],
  } 

  async componentDidMount(){
    const response = await api.get('http://localhost:5000/solicitations/');
    //console.log(response.data);

    this.setState({ solicitations: response.data })
  }

  onDelete(solicitation_id)
  {
    api.delete('http://localhost:5000/solicitations/'+solicitation_id)
      .then(response=>{
        console.log(solicitation_id)

        var solicitations = this.state.solicitations;

        for(var i = 0; i < solicitations.length; i++)
        {
          if(solicitations[i].id===solicitation_id)
          {
            solicitations.splice(i,1);
            this.setState({solicitations:solicitations});
          }
        }

      });
  }

  render(){

    const {solicitations} = this.state;

    return(
      <div>

        <PostForm/>
        
        <div class="row">
            <table class="table">
             <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cliente</th>
                <th scope="col">Endereço</th>
                <th scope="col">Renda</th>
                <th scope="col">Score</th>
                <th scope="col">Status</th>
                <th scope="col">Crédito</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
              {solicitations.map(solicitation =>(  
                 
                  <tbody>
                    <tr>
                      <th scope="row">{ solicitation.id }</th>
                      <td> { solicitation.client }</td>
                      <td> { solicitation.address }</td>
                      <td>R$ { solicitation.income }</td>
                      <td> { solicitation.score } </td>
                      <td> { solicitation.status } </td>
                      <td>R$ { solicitation.credit } </td>
                      <td><a href="#"  class="btn btn-danger" onClick={() => this.onDelete(solicitation.id)}>Deletar</a></td>
                    </tr>
                </tbody>
               
                ))}
            </table>
          </div>     
      </div>
    );
  };
};

export default App;
