import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import "./ListeMovie.css";
import Modal from "react-bootstrap/Modal";

function Show(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
   
  };
  const add=()=>{
    props.setListe([
      ...props.liste,
      {
        title: tit.current.value,
        description: des.current.value,
        posterURL: pos.current.value,
        rating: rat.current.value,
      },
    ]);
    handleClose()
  }
  const handleShow = () => setShow(true);
  const tit = useRef();
  const des = useRef();
  const pos = useRef();
  const rat = useRef();
  const tra = useRef();
  return (
    <>
      <Button variant="primary" onClick={handleShow} className ="btn-ajout">
        TAP TO ADD
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title style={{margin :'2px' , color :"blue" , font :"bold" , padding : "10px" ,
           paddingLeft :"15px" , marginLeft : "15px"  }}>Ajout de Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section>
        <form className="Form-container">
        <label > Title : </label>
          <input className="container-add" type={"text"} ref={tit} id="Titre" placeholder="Enter the Title please"></input>
          <label > Description : </label>
          <input className="container-add" type={"text"} ref={des}id="descr" placeholder="About Movie"></input>
          <label > PosterUrl : </label>
          <input className="container-add" type={"text"} ref={pos} id="poster" placeholder="Poster UrL"></input>
          <label > Rating : </label>
          <input className="container-add" type={"number"} ref={rat} id="Rate" placeholder="Rate the Movie"></input>
          <label> Trailer: </label>
          <input className="container-add" type={"text"} ref={tra} id="Trailer" placeholder="ADD Trailer"></input>
          </form>
          </section>
        </Modal.Body>

        <Button variant="secondary" onClick={handleClose} className="close">
          Close
        </Button>
        <Button variant="primary" onClick={add} className="save">
          Save Changes
        </Button>
           </Modal> 
    </>
  );
}
export default Show;