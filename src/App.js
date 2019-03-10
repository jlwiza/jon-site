import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl';
import Main from './components/main';
import Project from './components/projects';
import { Link } from 'react-router-dom';
import Projects from './components/projects';
class App extends Component {
  render() {
    return <React.Fragment>
      <div className="demo-big-content">
    <Layout fixedHeader>
        <Header  className="header-color" transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" >
            <Navigation >
                <Link  to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
           
        </Content>
    </Layout>
   
</div>

<Main/>

<Projects/>
            
            <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="/">About</a>
                <a href="/">Terms</a>
                <a href="/">Partners</a>
                <a href="/">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="/">Specs</a>
                <a href="/">Tools</a>
                <a href="/">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="/">How it works</a>
                <a href="/">Patterns</a>
                <a href="/">Usage</a>
                <a href="/">Products</a>
                <a href="/">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="/">Questions</a>
                <a href="/">Answers</a>
                <a href="/">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>

    </React.Fragment>;
  }
}

export default App;
