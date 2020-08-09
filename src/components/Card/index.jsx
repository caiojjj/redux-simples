import React from 'react'
import './Card.css'


function Card(props) {
    return (
        <div className={'Card Red'}>
            <div className='Header'>
                <span
                    className='Title'>
                    {props.title}
                </span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}

export default Card