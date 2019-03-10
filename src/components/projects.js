import React, {Component}  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import firstPage from  "../res/product-1.png" 
import secondPage from  "../res/product-1.png" 
import thirdPage from  "../res/product-1.png" 
//import {Tabs, Tab} from 'react-mdl'

export default class Projects extends Component {
   constructor(props) {
       super(props);
       this.state = {activeTab:0}
   }
   
    render()
    {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {firstPage}
      alt="Firs "
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondPage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdPage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;


           {/* then you can just set up another carousel underneath etc etc just set the height of the damn thing its too damn big
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>ASP.NET/CORE</Tab>
            <Tab>AZURE</Tab>
            </Tabs>*/}
            </div>
        )
    }
}