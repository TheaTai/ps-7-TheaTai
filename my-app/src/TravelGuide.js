import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col, CardImgOverlay } from 'reactstrap';

export class TravelGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        d3.csv("data/projects.csv").then((d) => {
            this.setState({ data: d });
        });
    }

    render() {
        console.log(this.state.data)
        return <div className="container">
            <p className="travel-guide-text">As a Special Administrative Region of China, Hong Kong is situated on the southeast coast of China, occupying an area of 426 square miles (1,104 square kilometers). The city is one of the world's leading financial, banking and trading centers. It is made up of four parts: Hong Kong Island, Kowloon Peninsula, the New Territories and the Outlying Islands. The prosperous island is the center of economy, politics, entertainment and shopping with its southern part noted for sea shores and bays. Kowloon is another flourishing part where Tsim Sha Tsui, Yau Ma Tei and Mong Kok are the most popular destinations. The New Territories and Outlying Islands are ideal places to experience a peaceful and natural holiday. The city has a population of about 6,970,000 and most people (about 97% of the population) are Chinese and speak Cantonese and English. There are few language barriers, making the city one of the hottest travel destination in Asia.</p>
            {this.state.data.map((d, i) => {
                return <Col sm="10" key={"project" + i}>
                    <Card className="travel-guide">
                        <CardBody>
                            <img src={d.img} alt={d.alt} className="card-image" />
                            <CardTitle className="card-title">
                                {d.name}
                            </CardTitle>
                            <CardText className="card-text">
                                {d.description}
                            </CardText>
                            <a target="_blank" href={d.link}>
                                <Button>Learn more</Button>
                            </a>
                        </CardBody>
                    </Card>
                    <br />
                </Col>
            })}
        </div>
    }
}