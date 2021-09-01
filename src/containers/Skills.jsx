import React, {Fragment} from 'react';

import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
    return ( 
        <Fade left duration={1000} distance="40px">
            <Container className="text-center my-5 section section-lg "style={{paddingTop:'0',paddingBottom:'0'}}>
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead" style={{marginBottom:'40px'}}>{skillsSection.subTitle}</p>
            <Row>
                {/* <Col lg="6">
                    <DisplayLottie animationData={webdev} />
                </Col> */}
                <Col lg="12">
                    <div className="d-flex justify-content-center flex-wrap ">
                        {
                            skillsSection.softwareSkills.map((skill) => {
                                return <Fragment key={skill.skillName}>
                            <div className="icon icon-lg icon-shape shadow rounded-circle mb-5 ml-1"  id={skill.skillName}>
                                <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                            </div>
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName}
                                >
                                {skill.skillName}
                            </UncontrolledTooltip>
                                </Fragment>
             z               })
                        }
                    </div>
                    <div>
                        {
                            skillsSection.skills.map(skill => {
                                return <p className='lead2' key={skill}>{skill}</p>
                            })
                        }
                    </div>
                </Col>
            </Row>
            </Container>
        </Fade>
     );
}
 
export default Skills;