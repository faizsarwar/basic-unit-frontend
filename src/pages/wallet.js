import React, { useEffect , useState} from 'react'
import Transfer from "../Transfer"
import { useSubstrateState } from '../substrate-lib'
import { useSubstrate } from '../substrate-lib'

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import {  Container } from 'semantic-ui-react';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';


function Wallet() {
  const { api } = useSubstrateState()
  const [ AllAssets, setAllAssets ] = useState([])


  const {
    state: {currentAccount },
  } = useSubstrate()

  // querying assets
  useEffect(() => {
    api.query.assets.asset.entries().then((posts) => {
      const p = posts.map(post => {
        return {
          id: post[0].toHuman(),
          content: post[1].toHuman(),
        }
      })
      console.log(AllAssets, p[0].content , currentAccount.address)
      setAllAssets(p)
    })
  }, [api])


  return (
    <div>
      <Container style={{margin: "0px",textAlign: "left",}}>
        <h1>Owned Assets</h1>

        {AllAssets.map((object, index) => {
            if (object.content.owner === currentAccount.address) {
              return (

                <div style={{padding: "70px"}}>
                <h1>Asset #{index}</h1>

                <h3>Asset Id</h3>
                <p> {object.id}</p>     

                <h3>Asset Owner</h3>
                <p> {object.content.owner}</p>   

                <h3>Min Balance</h3>
                <p> {object.content.minBalance}</p>

                <h3>Max Supply</h3>
                <p> {object.content.supply}</p>  
                
                <h3>Admin</h3>
                <p> {object.content.admin}</p>
                
              </div>
              )
            } else {
              return null
            }
          })}

      </Container>


      <Transfer/>
    </div>
  );
}

export default Wallet;