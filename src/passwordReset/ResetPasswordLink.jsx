import React from 'react';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.svg';
import { Link } from 'react-router-dom';


export default function ResetPasswordLink(){
    return(
        <section className='resetLink-Wrapper'>
            <img src={businessGuy} alt="" className="resetImage" />
            <div className='resetLinkLogoAndText'>
                <div>
                    <img src={logo} alt="" className="loanifyLogo" />   
                </div>
                <div className='resetLinkText'>
                    <p className='text--link'>Reset password link has been sent to your email.</p>
                    <Link to="/reset-password">
                        <p className='resetlinkbutton'>Reset Password</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}