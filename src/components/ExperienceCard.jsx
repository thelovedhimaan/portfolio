import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col
} from "reactstrap"; 

import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const ExperienceCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState(['blue', 'red']);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    return ( 
        <Col lg="12">
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: '#14123B'}} >
                    <h3 className="text-white">{data.company}</h3>
                </CardHeader>
                <CardBody >
                    <img ref={imgRef} className=" bg-white rounded-circle  img-center img-fluid shadow-lg " src={data.companylogo} style={{ width: "100px" }} onLoad={() => getColorArrays()} alt=""/>
                    <CardTitle tag="h4">{data.role}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <CardText className="description my-3  text-left" style={{ fontWeight:'500'}}>
                        <div className='mb-2'>{data.desc}</div>
                        <ul >
                            {
                                data.descBullets ? 
                                data.descBullets.map((desc) => {
                                    return <li className='mb-2' key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                    </CardText>
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;