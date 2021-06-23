import React, { useState, useEffect } from 'react';
import { Accordion, Form, Grid, Header, Button } from 'semantic-ui-react';

const Routine2 = () => {

    const [set, setSet] = useState({inputs: ['set-0']})
  
    const handleFormSubmit = (e) => {
        console.log(e.target.id);
    }

    const appendRow = () => {
        let newInput = `set-${set.inputs.length}`;
        const newSet = [...set.inputs.concat(newInput)]
        setSet({inputs: newSet})
    }

    const removeSet = (row) => {
      setSet({inputs: [...set.inputs.filter(i => i !== row)]});
    }

    const handleChange = (e) => {
        e.persist();
    }

    const renderSetPanels = [
      <Form onSubmit={handleFormSubmit}>
        {set.inputs.map((row,index) => {
          return (
          <Form.Group key={index} widths={2} inline>
            <Form.Input fluid label='Reps' id={`reps-${index}`} name='reps' width={4} />  
            <Form.Input fluid label='Weight'  id={`weight-${index}`} name='weight' width={4}/>
            <Button type="submit" onClick={() => removeSet(row)}>-</Button>
        </Form.Group> );
        })}
          <Button onClick={appendRow}>Add Row</Button>
          <Button type="submit">Save</Button>
      </Form>
    ]

  const level1Panels = [
      { key: 'panel-1a', title: 'Bench Press', content: renderSetPanels},
      { key: 'panel-ba', title: 'Incline Bench Press', content: 'Level 1B Contents' },
    ]
    

    
    const level2Panels = [
      { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
      { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
    ]


    const Level1Content = (
      <div>
        <Accordion.Accordion panels={level1Panels} />
      </div>
    )


    const Level2Content = (
      <div>
        Welcome to level 2
        <Accordion.Accordion panels={level2Panels} />
      </div>
    )
    
    const rootPanels = [
      { key: 'panel-1', title: 'Day 1: Chest Day', content: { content: Level1Content } },
      { key: 'panel-2', title: 'Day 2: Leg Day', content: { content: Level2Content } },
    ]

    return (
        <Grid columns={2}>
            <Grid.Row textAlign='center'>
                <Header a2='h2'>Start Adding Exercies!</Header>
            </Grid.Row>
            <Grid.Row>
              <Accordion defaultActiveIndex={0} panels={rootPanels} styled/>
            </Grid.Row>
        </Grid>
    )
}

export default Routine2;