import React, { useState } from 'react';
import { Container, Input, Divider, Header, Table, Button, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ExerciseForm from './ExerciseForm';


const containerStyles = {
    margin: '4em 0 4em 0'
}

const ExerciseLog = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [modalStatus, setModalStatus] = useState(false);
    console.log(startDate)
    const handleModal = () => {
        setModalStatus(!modalStatus)
    }

    return (
        <div>
            <Container style={containerStyles}>
                <Input icon='search' placeholder='Search...' />
                <Divider/>
                <Header as="h2">Exercise Log</Header>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan='2'>Exericse Name</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='2'>Set</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='2'># of Reps</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='2'>Weight</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Edit</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Bench Press</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>135 lb</Table.Cell>
                            <Table.Cell width={2}>
                                <Button size='mini' compact basic color="blue">Edit</Button>
                                <Button size='mini' compact basic color="red">Delete</Button>
                            </Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Bench Press</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>135 lb</Table.Cell>
                            <Table.Cell width={2}>
                                <Button size='mini' compact basic color="blue">Edit</Button>
                                <Button size='mini' compact basic color="red">Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Bench Press</Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>145 lb</Table.Cell>
                            <Table.Cell width={2}>
                                <Button size='mini' compact basic color="blue">Edit</Button>
                                <Button size='mini' compact basic color="red">Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='12'>
                            <Button size='small' basic color="blue" onClick={handleModal}>Add Exercise</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                <Divider/>
                <Label horizontal>Date: </Label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                <Button size='small' floated='right' basic color="blue">Save</Button>
                <ExerciseForm handleModal={handleModal} open={modalStatus}/>
            </Container>
        </div>
    )
}

export default ExerciseLog;
