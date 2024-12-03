import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Pendiente({onAgregarTarea}) {
    const [texto, setTexto] = useState("");

    const manejarCambio = (e) => {
      setTexto(e.target.value);
    };
  
    const manejarClick = () => {
      if (texto.trim() !== "") {
        onAgregarTarea(texto); // Llamar la función para agregar tarea
        setTexto(""); // Limpiar el input después de agregar
      }
    };
    

    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ingresa aqui tu tarea: </Form.Label>
          <Form.Control type="text" placeholder="Tipea tu pendiente" value={texto} onChange={manejarCambio} />
        </Form.Group>
        <>
        <Button variant="primary" onClick={manejarClick}>Agregar a la Lista</Button>
        </>
      </Form>

    );
}
export default Pendiente;