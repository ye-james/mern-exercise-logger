import React, { useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Divider, Header, Table, Button, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ExerciseForm from './ExerciseForm';
import { fetchCurrentExercise, deleteExercise, getLog  } from '../../redux/actions/log';

const containerStyles = {
    margin: '4em 0 4em 0'
}

const ExerciseLog = () => {  
    const dispatch = useDispatch();
    let { url } = useRouteMatch();

    const logs = useSelector(state => state.logs.logs);
    const [startDate, setStartDate] = useState(new Date());
    const [modalStatus, setModalStatus] = useState(false);


    useEffect(() => {
        dispatch(getLog())
    }, [dispatch])


    const handleModal = () => {
        setModalStatus(!modalStatus)
    }

    const handleExerciseDelete = id => {
        dispatch(deleteExercise(id));
    }
    
    const editExercise = id => {
        dispatch(fetchCurrentExercise(id));
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
                        {logs.length !== 0 ? logs.map(exercise => {
                            return (
                                <Table.Row key={exercise._id}>
                                    <Table.Cell>{exercise.name}</Table.Cell>
                                    <Table.Cell>{exercise.set}</Table.Cell>
                                    <Table.Cell>{exercise.reps}</Table.Cell>
                                    <Table.Cell>{exercise.weight}</Table.Cell>
                                    <Table.Cell width={2}>
                                    <Link size='mini' basic color="blue" component={Button} to={`/log/edit/${exercise._id}`} onClick={() => editExercise(exercise._id)}>Edit</Link>
                                        <Button size='mini' compact basic color="red" onClick={() => handleExerciseDelete(exercise._id)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }) : <Table.Cell>No Logged Exercises</Table.Cell>}
                    </Table.Body>

                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='12'>
                            <Link size='small' basic color="blue" component={Button} to={`${url}/add`}>Add Exercise</Link>
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
