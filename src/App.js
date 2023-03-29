import React, { createRef } from 'react'
import {
  Container,
  Dimmer,
  Loader,
  Grid,
  // Sticky,
  Message,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { SubstrateContextProvider, useSubstrateState } from './substrate-lib'
import { DeveloperConsole } from './substrate-lib/components'
// import { BrowserRouter,  } from "react-router-dom";

// import AccountSelector from './AccountSelector'
// import Balances from './Balances'
// import BlockNumber from './BlockNumber'
// import Events from './Events'
// import Interactor from './Interactor'
// import Metadata from './Metadata'
// import NodeInfo from './NodeInfo'
// import TemplateModule from './TemplateModule'
// import Transfer from './Transfer'
// import Upgrade from './Upgrade'

import ResponsiveDrawer from './drawer'

function Main() {
  const { apiState, apiError, keyringState } = useSubstrateState()

  const loader = text => (
    <Dimmer active>
      <Loader size="small">{text}</Loader>
    </Dimmer>
  )

  const message = errObj => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header="Error Connecting to Substrate"
          content={`Connection to websocket '${errObj.target.url}' failed.`}
        />
      </Grid.Column>
    </Grid>
  )

  if (apiState === 'ERROR') return message(apiError)
  else if (apiState !== 'READY') return loader('Connecting to Substrate')

  if (keyringState !== 'READY') {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    )
  }

  const contextRef = createRef()

  return (
    <div ref={contextRef} style={ { backgroundColor: '#f8f7f7'}}>      
      <Container style={{margin: "0px"}}>
        

        {/* this is an account selector  */}
        {/* <Sticky context={contextRef} style={{margin: "0px"}} >
          <AccountSelector />
        </Sticky> */}
        
        <ResponsiveDrawer/>

        <Grid stackable columns="equal">
          {/*NodeInfo it gives information about the connecetd node  */}
          {/*Metadata it gives info about metadata of the node */}
          {/*BlockNumber it gives info about the blocknumber */}
          {/*BlockNumber finalized it gives info about the blocknumber Finalized*/}
          {/* <Grid.Row stretched>
            <NodeInfo />
            <Metadata />
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row> */}

          {/* this is an example if how to query balances */}
          {/* <Grid.Row stretched>
            <Balances />
          </Grid.Row> */}

          {/* this is an example of how to do currency transfer and runtime upgrades */}
          {/* <Grid.Row>
            <Transfer />
            <Upgrade />
          </Grid.Row> */}

          {/* this is an example of pallet interactor and events */}
          {/* <Grid.Row>
            <Interactor />
            <Events />
          </Grid.Row> */}

          {/* this an example of how to intreact with substrate's' Template module  */}
          {/* <Grid.Row>
            <TemplateModule />
          </Grid.Row> */}

        </Grid>
      </Container>
      <DeveloperConsole />
    </div>
  )
}

export default function App() {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  )
}
