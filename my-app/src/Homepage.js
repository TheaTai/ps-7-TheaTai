import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';

export class Homepage extends Component {
    render() {
        return (
            <Jumbotron>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hong_Kong_Night_Skyline.jpg/1200px-Hong_Kong_Night_Skyline.jpg" alt="From Wikipedia: File:Hong Kong Night Skyline.jpg" className="banner-image" />
                <p className="homepage-text">I grew up in Hong Kong, Hong Kong is not a big place and living space is in short supply. Almost all Hong Kongers, therefore, live in high-rise residential flats, ranging in height from twenty to forty floors and higher. Most mid-range buildings are slotted in together in massive developments meaning the view out of your window is usually of another building. These apartments are box sized, with the average coming in at roughly 50 square meters. This small space is one of the reasons Hong Kongers spend so much time out of their home, eating with friends, walking and hiking and of course at work. One of the positive aspects of this compact space on daily life in Hong Kong is that families tend to be very close.
        Shopping in Hong Kong is a lifestyle, a passion, and an addiction and it's true to say it's Hong Kongers favorite pastime. Evenings are often spent with friends trawling the shops, with a quick refill at a Dai Pai Dong in between, while window shopping seems to be an innate trait with the locals. Shops are everywhere, packed into the classic areas like Causeway Bay and the markets in Mongkok and spread out everywhere in between, often not shutting until after 10 p.m. Aspirationally, the locals like to head to the best malls in Hong Kong, and the air con is also a big attraction. Hong Kong has some of the world's swankiest malls, stuffed with international boutiques and shops bearing the good from fashion shows around the world. Above is Times Square, a massive mall in Causeway Bay.</p>
            </Jumbotron>
        );
    }
}