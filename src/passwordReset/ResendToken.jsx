import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.svg';
import { Link } from 'react-router-dom';

export default function ResendToken(){
    return(
        <section className='ResendTokenWrapper'>
            <img src={businessGuy} alt="" className="resetImage" />
            <div className='token--wrapper'>
                <img src={logo} alt="" className="loanifyLogo" />
                <div className='token-text'>
                    <p>Token resent to your email.</p>
                    <Link to="/forgot-password"> 
                    <p><FontAwesomeIcon icon={faXmark}className="x-icon"></FontAwesomeIcon></p>
                    </Link>
                </div>
            </div>
        </section>
    )
}