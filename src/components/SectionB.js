import React from 'react';
import Container from './Container';
import train from '../assets/img/train.svg';
import db from '../assets/img/db.svg';
import blocks from '../assets/img/blocks.svg';
const textContent = [
    { title: 'APPLICATION FOR BUSINESSES', content: 'At Menaget, we make use of modern business applications to solve pressing business problems. With our technical know how , we help you improve customer engagement by creating simplified applications for your business that improves your brand and recognition.' },
    { title: 'DIGITAL SOLUTIONS', content: 'At Menaget, we help you find value in the tech world. We help you design a service plan that fits and meets your budget and clearly defines expected goal.By partnering with us, we ensure that your end goals take precedence over expenses and together we create a roadmap to service success' },
    { title: 'CYBER SECURITY', content: 'Given the increased number of cyber threats and attacks on businesses, it has become evident that an effective and efficient cybersecurity plan is now an important requirement for businesses. At Menaget protecting your privacy is our priority. Our cybersecurity practice safeguard businesses against unforeseen attacks which could be extremely damaging to businesses.' },
    { title: 'DATA ANALYTICS', content: 'We utilize the power of our data analytics to increase the overall efficiency of your business. At Menaget, we help you optimize your data assets which reflects in how prompt and better you make decisions. We help you draft out ways of doing business efficiently with reduced costs via storing and analysing large amounts of data. At the end of the day, you can make better business decisions and analyse customers trends and satisfaction better, which can lead to new and better products and services.' },
];
const Content = ({ title, content, link }) => {
    return (<div className='child'>
        <h4>{title}</h4>
        <p>{content}</p>
        {link && <a className='btn' href={link.url}>{link.text}</a>}
    </div>)
};
const Image = ({ source }) => {
    return (<div className='child'>
        <img src={source} />
    </div>)
};

export default function SectionB() {
    return (
        <div className='sectionB'>
            <Container>
                <div className='parent'>



                    <Content title='Cloud Services' content='We guarantee automated provisioning and monitoring of cloud stacks to improve service management and delivers a reliable user experience. We offer serves/storage systems to boost service delivery' link={{ text: 'Service Details', url: 'google.com' }} />
                    <Image source={train} />

                    <Image source={db} />
                    <Content title='Application Development Servicess' content='We help businesses accelerate product releases by reducing time spent across all stages of the application development lifecycle using open source technologies, automation, our in-house built tools and licensed third party tools.' link={{ text: 'Learn More', url: 'www.google.com' }} />

                    <Content title='Digital Marketing' content='We help you implement viable digital marketing tactics to effectively reach and engage your target customers online.' />
                    <Image source={blocks} />

                </div>
            </Container>
        </div>
    )
}
