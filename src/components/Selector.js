import React, { useState } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import Select from 'react-select';

const peoples = [
    {value: "Hugh Jackman", label: "Hugh Jackman"},
    {value: "Tom Cruise", label: "Tom Cruise"},
    {value: "Chris Hemsworth", label: "Chris Hemsworth"},
    {value: "Henry Cavill", label: "Henry Cavill"},
    {value: "Chris Evans", label: "Chris Evans"},
    {value: "Vin Diesel", label: "Vin Diesel"},
    {value: "Leonardo Dicaprio", label: "Leonardo Dicaprio"},
    {value: "Robert Downey Jr", label: "Robert Downey Jr"}
]


const Selector = () => {
    
    const [selectedValue, setValue] = useState(null)
    const [e, sete] = useState([])

    const selectHandler = (selectedValue) => {
        setValue(selectedValue)
        sete(selectedValue.map((x) => (x.label)))
    }
    
    const clearModel = () => {
        selectHandler([])
    }
    
    const changeModel = () => {
        sete(["New Person"])
    }

    return (
        <div className= 'selector'>
            <Container fluid>
                <Row>
                    <Row><h2>Multi Select</h2></Row>
                    <Row><h3>Select Multiple Elements</h3></Row>
                    <Form>                    
                    <Select 
                        defaultValue={[selectedValue]}
                        closeMenuOnSelect={false}
                        isSearchable={false}
                        isMulti={true}
                        options={peoples}
                        hideSelectedOptions={false}
                        onChange={selectHandler}
                        
                    />
                    </Form>
                    <Row><h3>Selected Value: </h3><h4>{e.map((x) => (<li>{x}</li>))}</h4></Row>
                    <Button onClick={clearModel}>Clear model</Button>
                    <Button onClick={changeModel}>Change model</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Selector
