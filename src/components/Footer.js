import React from 'react'
import Container from './Container'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>

                how are you
                    <form>
                    <input type="email" placeholder="Enter your Email address..." />
                    <button type="submit" class="button_1">Subscribe</button>
                </form>
                <p>Subscribe to our newsletter to receive news and update</p>
                <div className='footer-bottom'>
                    <p>We Accept
                        <i className="fa fa-cc-paypal" aria-hidden="true"></i>
                        <i className="fa fa-cc-visa" aria-hidden="true"></i>
                        <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                        <i className="fa fa-cc-discover" aria-hidden="true"></i>
                    </p>
                    <p>Nunem Ltd Floor Batelco Building Manama, Bahrain. ©2019 - All rights reserved</p>
                </div>
            </Container>

        </footer>
    )
}
