import React, {Component}  from 'react';
import {Grid, Cell} from 'react-mdl';

export default class Skills extends Component {
    render()
    {
        return (
           <Grid>
               <Cell col={12}>
               <div style={{display: 'flex'}}>{this.props.skill}</div>
               </Cell>
           </Grid>
        )
    }
}