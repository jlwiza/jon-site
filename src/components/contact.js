import React, {Component}  from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

export default class Contact extends Component {
    render()
    {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                <Cell col={6}>
                <h2>Jonathan Lwiza</h2>
                <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '250px'}}
                />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Yo stufff and Im awesome and stuff and here is a paragraph about how im cool isnt that something more and more stuff etc and more typing ill have to put something here eventually but im not sure what ill put here yet it will be good and then I would be there being able to say a whole bunch of stuff and what not but for now its just garbage text</p>
                </Cell>
                <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>

                <div className="contact-list">
                <List>
  <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
    <i className="fas fa-phone-square" aria-hidden="true"/>
    (631) 432-3364
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
    <i className="fas fa-envelope" aria-hidden="true"/>
    jonathanlwiza@gmail.com
    </ListItemContent>
  </ListItem>
 
</List>
                </div>
                </Cell>
                </Grid>
               
            </div>
        )
    }
}