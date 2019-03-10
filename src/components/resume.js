import React, {Component}  from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

export default class Resume extends Component {
    render()
    {
        return (
            <div>
                <Grid>
                    <Cell col={4}Left Side>
                    <div style={{textAlign: 'center'}}>
                    <img
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatar"
                    style={{height: '200px'}}
                    />
                     </div>

                    <h2 style={{paddingTop:'2em'}}>Jonathan Lwiza</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>So what happens that will do is that these are texts about who and what I am or whatever </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>554 Elwood Road, East Northport, NY, 11731</p>
                    <h5>Phone</h5>
                    <p>(631) 432-3364</p>
                    <h5>Email</h5>
                    <p>jonathanlwiza@gmail.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                   
                    </Cell>
                    <Cell className='resume-right-col' col={8}Right Side>
                    <h1>Education</h1>
                    <Education
                    startYear={2012}
                    endYear={2012}
                    schoolName="Suffolk County Community College"
                    schoolDescription="Some sh dsfa dsit about the uniersity"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Experience</h2>

                    <Experience
                    startYear={2012}
                    endYear={2012}
                    jobName="My Job"
                    jobDescription="Some sh dsfa dsit about the uniersity"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}