import React, { useState } from 'react'
import { Button, Modal, Divider} from 'semantic-ui-react'
import SearchExercises from './SearchExercises';

const AddExerciseModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Add Exercise</Button>}
      >
        <Modal.Header>Add Exercise</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Search from our list of exercises
            <SearchExercises />
            <Divider/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    )
}

export default AddExerciseModal
