import React, {Component}  from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render()
    {
        return <React.Fragment>  
          <div style ={{width:'100%', margin:'auto'}}>
        
            <Grid className='landing-grid'>
            <Cell col={12}>
            <img src='https://www.alternativesyouth.org/wp-content/uploads/2016/11/person-icon.png'
            alt= "avatar"
            className="avatar-img"
            />
            <div className="banner-text">
            
                <h1>Full Stack Developer</h1>
                <hr/>

                <p>HTML/CSS | Bootstrap | Javascript | C/C++ | React.js</p>

                <div className="social-links">
                <a href="http://google.com" target="blank">
                <i className='fa fa-linkin-square' rel="noopener norefferrer" aria-hidden='true'/>
                </a>
                </div>
            </div>
            </Cell>
            </Grid>
          </div>
          <video class='videoplayer' autoplay muted loop id='vidly'>
    <source   src = "http://img.mobiscroll.com/demos/trailer_iphone.m4v" type="video/x-m4v"/>
    </video>
        </React.Fragment>
    }
}

export default LandingPage;