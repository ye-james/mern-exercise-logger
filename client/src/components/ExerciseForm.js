import React, { useState } from 'react'
import { Modal, Header, Button, Form } from 'semantic-ui-react';

const ExerciseForm = ({open, handleModal}) => {

    return (
        <div>
            <Modal open={open} closeIcon onClose={handleModal}>
                <Modal.Header>Add an Exercise</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Exercise Name</label>
                            <input placeholder="Ex: Bench Press"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Set</label>
                            <input placeholder="1"/>
                        </Form.Field>
                        <Form.Field>
                            <label># of reps</label>
                            <input placeholder="10"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Amount of weight</label>
                            <input placeholder="35 lbs"/>
                        </Form.Field>
                        <Button type='submit' basic color="blue">Add</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ExerciseForm
