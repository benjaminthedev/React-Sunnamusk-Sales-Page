import React from 'react'
import FindAStore from './FindAStore';
import Logo from './Logo'
import MenuList from './MenuList'
import './Header.scss';

const Header = () => {
    return (
        <>
        <div class="nav-tp">  
             
            <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="5b2a156d37465c0001c0d040" data-style-height="20px" data-style-width="100%" data-theme="light">
                <a href="https://uk.trustpilot.com/review/sunnamusk.com" target="_blank" rel="noreferrer">Trustpilot</a>
            </div>
                    
        </div>


          <div className="header__top">
          
             
             <div className="header__findAStore">
                <FindAStore />
            </div>


            <div className="header__logo">
                <Logo />
            </div>

            <div className="header__loginLink">
                <a href="https://sunnamusk.com/my-account/" target="_blank" rel="noreferrer" className="loginLink">Sign in or register</a>
            </div>

          </div>  
            <MenuList />
        </>
    )
}

export default Header
