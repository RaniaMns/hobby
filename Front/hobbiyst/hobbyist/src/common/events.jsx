import {Form, Container,  FormGroup, FormLabel, Button } from "react-bootstrap";
import React from "react";
import event from "../services/eventService";
import EditDeleteEvent from "./EditDeleteEvent";


class Events extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      nom:"",
      description:"",
      lieu:"",
      date:"", 
      affiche:0,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   this.handleAffiche= this.handleAffiche.bind(this);
  

  }


 
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleInputChange(e){
    switch (e.target.name) {
      case 'nom':
          this.setState({nom: e.target.value});
          break;
      
      case 'description':
        this.setState({description: e.target.value});
          break;
      
      case 'lieu':
          this.setState({lieu: e.target.value});
          break;

      case 'date':
        this.setState({date: e.target.value});
          break;
      
      default:
      break;
    }}

  handleSubmit(e) {
  e.preventDefault();
  event.ajoutEvent(this.state);
 console.log(this.state);	 
  }

  Annuler = () => { 
    this.setState({
      nom:"",
      description:"",
      lieu:"",
      date:"", 
    });
    this.refs.nom.value="";
    this.refs.description.value="";
    this.refs.lieu.value="";
    this.refs.date.value="";

  }
  handleAffiche(){ 
    this.setState({affiche:1});
  }


/*		
handleSubmit(event) {
  event.preventDefault();
        axios.post('/encadrant', {
     Name:this.state.Name,
     email:this.state.email,
     type:this.refs.encadrantType.value
   
   });	
 }*/

  render() {
    return (
      <div>
     <Container>
        <div class="row"> 
        <div class="col s12">
          <h3>Création</h3>
          <h6>Evénement</h6>
          

          <hr></hr>
                    <Form class="form-group">
                                 <FormGroup>
                                  <FormLabel>Nom</FormLabel>
                                  <input className="form-control"  ref="nom"  type="text" name="nom" placeholder="Intitulé de l'évenement"  required  onChange={this.handleInputChange} />
                                  </FormGroup>
                                
                                
                                <FormGroup>
                                  <FormLabel>Description</FormLabel>
                                  <input className="form-control" rows="3"  type="textarea" ref="description"  name="description"  placeholder="Plus d'informations sur l'évenement"  required  onChange={this.handleInputChange} />
                                </FormGroup>
                                 
                                <div class="form-row">
                               <div class="col-6"> 
                                <FormGroup>
                                  <FormLabel>Lieu</FormLabel>
                                  <input className="form-control" type="text" ref="lieu" name="lieu" placeholder="Ajouter l'adresse"  required  onChange={this.handleInputChange}/>
                                </FormGroup>
                                </div>
                                <div class="col-3"> 
                                <FormGroup >
                                  <FormLabel>Date</FormLabel>
                                  <input class="form-control" type="date" ref="date"  name="date" onChange={this.handleInputChange}/>
                                </FormGroup>
                                </div>
                                <div class="col-3"> 
                                <FormGroup>
                                  <FormLabel>Heure</FormLabel>
                                  <input class="form-control" type="time" name="heure" onChange={this.handleInputChange}  />
                                </FormGroup>
                                </div>
                              </div>
                                <Button class="btn btn-success btn-block" onClick={this.handleSubmit} type="submit" >Ajouter</Button>&nbsp;&nbsp;
                                <button type="button" class="btn btn-outline-primary"  onClick={this.Annuler} >Annuler</button>  
                                <hr></hr>
                              </Form> 
                              
              </div>
              </div>
            
                  <div class="row">
                  
                  <button class="btn btn-link btn-lg"  onClick={this.handleAffiche} name="affiche" >Voir évenements</button> 
 
        </div>
        <div>
        { this.state.affiche==1? <EditDeleteEvent/> 
        : null }
        </div>
       </Container>
      </div>
    );
  }
}

export default Events;
