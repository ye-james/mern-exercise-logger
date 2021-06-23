import React from 'react'
import { Grid, Segment, Divider, Header} from 'semantic-ui-react'




const Routine = () => {
    return (
        <>
        <Header as='h2' textAlign='center'>Lets get started</Header>
        <Segment placeholder>

            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
        
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                <Header>
                    Create a new routine
                </Header>
                </Grid.Column>
        
                <Grid.Column>
                <Header>
                    Choose from existing template
                </Header>
                </Grid.Column>
            </Grid.Row>
            </Grid>

      </Segment>
      </>
    )
}

export default Routine

