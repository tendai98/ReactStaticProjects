import React from 'react'
import cardlayout from '../style/cards.css'
import boosted from '../img/boosted.png'
import emailIcon from '../img/email_icon.png'
import linkedInIcon from '../img/linkedin_icon.png'


function Card1(){
    return (
        <div className='card-main'>
            <img alt="profile" className='card-profile' src={boosted}/>
            <h4 className='card-name'>Tendai Bhebhe</h4>
            <h4 className='card-title'>Computer Programmer</h4>
            <div className='card-buttons'>
                <div className='card-email-button'>
                    <img src={emailIcon} alt="icon"/>
                    <h6>Email</h6>
                </div>
                <div className='card-linkedin-button'>
                    <img src={linkedInIcon} alt="icon"/>
                    <h6>LinkedIn</h6>
                </div>
            </div>
           
            <h6 className='card-about-topic'>About</h6>
            <p>Developer with more than 5 years of experience working on mostly native development like Android, C#, Java</p>
            <h6 className='card-interests-topic'>Interests</h6>
            <p>Fighter Jets, military aircraft, military systems, documentaries, tinkering, reading, good music, watching movies</p>
       
        </div>
    )
}

function Card2(){
    return (
        <div className='card-main'>
            <img alt="profile" className='card-profile' src={boosted}/>
            <h4  className='card-name'>Tendai Bhebhe</h4>
            <h4 className='card-title'>Computer Programmer</h4>
            <div className='card-buttons'>
                <div className='card-email1-button'>
                        <img src={emailIcon} alt="icon"/>
                        <h6>Email</h6>
                </div>
            </div>
            <h6 className='card-about-topic'>About</h6>
            <p>Developer with more than 5 years of experience working on mostly native development like Android, C#, Java</p>
            <h6 className='card-interests-topic'>Interests</h6>
            <p>Fighter Jets, military aircraft, military systems, documentaries, tinkering, reading, good music, watching movies</p>
       
        </div>
    )
}

function CardLayout(){
    return (
        <div className='card-panel'>
            <Card1/>
            <Card2/>
        </div>
    )
}

export default CardLayout