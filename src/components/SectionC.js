import React from 'react';
import Container from './Container';
const textContent = [
    {title: 'APPLICATION FOR BUSINESSES', content: 'At Menaget, we make use of modern business applications to solve pressing business problems. With our technical know how , we help you improve customer engagement by creating simplified applications for your business that improves your brand and recognition.'},
    {title: 'DIGITAL SOLUTIONS', content: 'At Menaget, we help you find value in the tech world. We help you design a service plan that fits and meets your budget and clearly defines expected goal.By partnering with us, we ensure that your end goals take precedence over expenses and together we create a roadmap to service success'},
    {title: 'CYBER SECURITY', content: 'Given the increased number of cyber threats and attacks on businesses, it has become evident that an effective and efficient cybersecurity plan is now an important requirement for businesses. At Menaget protecting your privacy is our priority. Our cybersecurity practice safeguard businesses against unforeseen attacks which could be extremely damaging to businesses.'},
    {title: 'DATA ANALYTICS', content: 'We utilize the power of our data analytics to increase the overall efficiency of your business. At Menaget, we help you optimize your data assets which reflects in how prompt and better you make decisions. We help you draft out ways of doing business efficiently with reduced costs via storing and analysing large amounts of data. At the end of the day, you can make better business decisions and analyse customers trends and satisfaction better, which can lead to new and better products and services.'},
];

export default function SectionC() {
    return (
            <div className='sectionC'>
               <Container>
               <h3>WE ALSO OFFER:</h3>
               <br />
                {textContent.map((content) => {
                
                return ( 
                    <div>
                        <h4>{content.title}</h4>
                       <p>{content.content}</p>
                    </div>
                    )
                })}
                <p>We provide your business with 24/7 customer support using multiple channel through email, livechat, phone.</p>
                <div className='center'>
                  <a href='www.google.com'>HMCompleteSolution</a>
                </div>
               </Container>
            </div>
    )
}
