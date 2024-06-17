import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Contactos() {
  return (
    <div><div></div>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>CORREO ELECTRONICO</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>SUGERENCIAS Y QUEJAS  </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
  )
}
