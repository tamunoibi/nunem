import React from 'react';
import Container from './Container';
import human from '../assets/img/human.svg';

const Link = ({ url, text, }) => {
    return (<div className='box'>
        <a href={url} className='btn'>{text}</a>

    </div>)
};
const Image = ({ source }) => {
    return (<div className='child'>
        <img src={source} />
    </div>)
};
const Content = ({ title, content, link }) => {
    return (<div className='child'>
        <h4>{title}</h4>
        <p>{content}</p>
        {link && <a className='btn' href={link.url}>{link.text}</a>}
    </div>)
};
export default function SectionA() {
    return (
        <div className='sectionA'>
            <div className='carousel'>

                <Container>

                    <h1>MENAGET TECHNOLOGY CONSULTING</h1>
                    <h2>Unlock your business potential and create immeasurable possibilities</h2>
                
                    <h4>We offer Professional Web Application Design and Development</h4>
                    <h4>Mobile Application Development</h4>
                    <h4>Data Science and Analytic Services</h4>
                    <h4>Cloud Solutions</h4>
                </Container>

            </div>
            <div className='background'>
            </div>
            <Container>
                <div className='parent'>
                    <Image source={human} />
                    <Content title='Scale Up Your Development With Our Engineers'
                        content='Fill your vacant Developer positions whether remotely or full time with help from our list of the developers skilled in modern technologies . We have a combination of skilled developers readily available for deployment. Just tell us what you need and how your team works. We will amass a group of skilled developers that fits perfectly into your culture to ensure absolute success.' link={{ text: 'Service Details', url: 'google.com' }} />

                </div>
            </Container>
            <Container>
                <div className='box-container'>
                    <Link url='www.google.com' text='Hire A Developer' />
                    <Link url='www.google.com' text='Hire A Service Agent' />
                    <Link url='www.google.com' text='Start A Project' />
                </div>

            </Container>

        </div>
    )
}
