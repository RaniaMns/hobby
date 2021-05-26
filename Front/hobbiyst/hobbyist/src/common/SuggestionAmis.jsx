import {Form, Container,  FormGroup, FormLabel, Button } from "react-bootstrap";
import React from "react";


class SuggestionAmis extends React.Component {

  render() {
    return (
      <div>
      <div className="Product">
      <img src="http://lorempixel.com/240/180/technics/7" />
      <div className="Content">
        <h1>Rania Mansour</h1>
        <span><strong>Pays :</strong>Tunisia</span>

        <button>Ajouter</button>
      </div>
    </div>
       <div className="Product">
       <img src="https://developer.mozilla.org/static/img/favicon144.png"
        />
       <div className="Content">
         <h1>Wala Motaamed</h1>
         <span><strong>Pays :</strong> Tuinisa</span>
         <button>Ajouter</button>
       </div>
     </div>
     </div>
      );
  
}
}

export default SuggestionAmis;
