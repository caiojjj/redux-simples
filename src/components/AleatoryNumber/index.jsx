import React from 'react'
import Card from '../Card'
import {connect} from 'react-redux'
import './index.css'

const AleatoryNumber = props => {
    const { min, max } = props
    console.log(props)
    const aleatory = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className='AleatoryNumber'>
            <Card
                red
                title='Sorteio'>
                    <span> Resultado </span>
                        <strong> {aleatory} </strong>
            </Card>
        </div>
    )
}

const mapStateToProps = ({numberValue}) => {
    return {
        max: numberValue.max,
        min: numberValue.min
    }
}


export default connect(mapStateToProps)(AleatoryNumber)