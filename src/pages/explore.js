import React from 'react';
import {
    Container,
    Grid,
  } from 'semantic-ui-react'
import Events from "../Events"
import BlockNumber from '../BlockNumber'
import Interactor from '../Interactor';
import Balances from '../Balances'


function Explore() {


    
  return (
    <div>
    <Container style={{margin: "0px"}}>
        <Grid stackable columns="equal">
        
          <Interactor/>

          <Grid.Row stretched>
            <Balances />
          </Grid.Row>

          <Grid.Row stretched>
            {/* <NodeInfo />
            <Metadata /> */}
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>

          <Grid.Row >
            <Events/>
          </Grid.Row>

        </Grid>
    </Container>
    
    </div>
  );
}

export default Explore;