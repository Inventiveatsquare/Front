import React, { Component } from 'react'
import axios from 'axios';

import './App.css';


class App extends Component {
 
  state = {
      clients: []
    }

    
   componentDidMount(){

       const clients =  axios.get('http://www.tryswifty.com/api/person')
       
      .then( response => {
        
          this.setState({clients: response.data})
          console.log(response);
        })
        // handle success
      }

     
     

  render()
  {

      const clients = this.state.clients.map(client => {
          return (

  <tr key={client._id}>
    <th scope="row">{client._id}</th>
    <td>{client.firstname}</td>
    <td>{client.lastname}</td>
  </tr>

    
          )
        })

     


      return (
       
          <div className="container">
           
          <div className="row">
      
            <div className="col-md-9 mt-9 mx-auto spacingpass1">

              
              

           <h2>Registered Clients List</h2>

           
           <table className="table">
<thead>
  <tr>
    <th scope="col">Client ID</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>
  </tr>
</thead>
<tbody>
{clients}

</tbody>
</table>

          
            </div>
      </div>
  </div>  
      )
  }

}


export default App;
