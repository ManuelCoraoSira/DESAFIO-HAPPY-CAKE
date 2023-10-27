
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
const Contact = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Button variant="secondary" className="p-2 mt-3 secondary-color" size="lg">
                    Enviar
                </Button>
            </Form.Group>
        </Form>
    );
};


export default Contact;