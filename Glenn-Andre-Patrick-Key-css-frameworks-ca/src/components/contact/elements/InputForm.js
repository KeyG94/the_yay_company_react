import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function InputForm() {
    return (
        <>
            <Form className="container form-container__custom shadow pt-4 pb-4">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className="form-input__custom p-4"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="form-input__custom p-4"/>
                </Form.Group>
               

                <Form.Group>
                    <Form.Label htmlFor="basic-url">Website</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend className="d-none d-lg-block">
                            <InputGroup.Text>https://</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" className="form-input__custom p-4"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label controlId="formMessage">Message</Form.Label>
                    <Form.Control as="textarea" rows="5" maxlength="500" className="form-input__custom p-4"/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <input 
                        type="checkbox" 
                        className="checkbox__custom mr-2"
                        controlId="rights"
                        value="checked"
                        />
                    <label
                    for="rights"
                    className="form-checbox__label"></label>
                </Form.Group>
                <span className="label-checkbox">Allow us to sell your personal details to whomever we want.</span>

                <Button variant="primary" type="submit" className="input-form-btn p-2 mt-2 mb-2">
                    Submit
                </Button>

            </Form>
        </>
    )
}

export default InputForm
