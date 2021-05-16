import {Form, Container,  FormGroup, FormLabel, Button } from "react-bootstrap";
import React from "react";
import event from "../services/eventService";

class EditDeleteEvent extends React.Component {
    
   constructor(props){
        super(props);
        this.state= {
            evenements: [
            ],
           
        };
    
      // this.retrieveTutorials = this.retrieveTutorials.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      }
   /*  componentDidMount() {
       this.setState({isLoading: true});
       const response=event.getEvent();
        this.setState({ evenements: response , isLoading: false});
        this.retrieveTutorials();
      }*/

      componentDidMount() {
        event.getEvent()
          .then(response => {
            this.setState({
              evenements: response.data
            });
            console.log(response.data,1);
          })
          .catch(e => {
            console.log(e);
          });
        }

       // onClick={() => {event.deleteEvent(evt)}}
/*

        List()
        {  this.state.evenements.map(evt =>  { 
          
        return(
            <tr>
              <td>{evt.name}</td>
              <td>{evt.description}</td>
              <td>{evt.place}</td>
              <td>{evt.date}</td>
             
            
              <td>
                <button class="btn btn-danger" > Supprimer</button>
               &nbsp;&nbsp;
  
                <a href="" class="btn btn-outline-primary mr-2">Modifier</a>
              </td>
            </tr>
            )
         } );
        }

*/

  render() {
   // const {evenements, isLoading} = this.state;
    return(
<div>
<table class="table border shadow">
          <thead class="thead-dark">
            <tr>
        
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
              <th scope="col">Lieu</th>
              <th scope="col">Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>{this.state.evenements.name}</td>
              <td>{this.state.evenements.description}</td>
              <td>{this.state.evenements.place}</td>
              <td>{this.state.evenements.date}</td>
                <td>
                  <button class="btn btn-danger" onClick={() => {event.deleteEvent(this.state.evenements)}}  > Supprimer</button>
                 &nbsp;&nbsp;

                  <a href="" class="btn btn-outline-primary mr-2">Modifier</a>
                </td>
              </tr>

          </tbody>
        </table>
       
      </div>
    );
  }
}

export default EditDeleteEvent;
