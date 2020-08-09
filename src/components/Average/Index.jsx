import React from 'react'
import Card from '../Card'
import './index.css'
import { connect } from 'react-redux'

// Padrão de projeto decorator
const Average = props => {
    const {min, max} = props

    return (
        <div className='Average'>
            <Card
                red
                title='Media'>
                    <span> Resultado </span>
                    <strong> { (Number(min) + Number(max)) / 2 } </strong> 
            </Card>
        </div>
    )
}

const mapStateToProps = ({numberValue}) => {
    return {
        min: numberValue.min,
        max: numberValue.max
    }
}


export default connect(mapStateToProps)(Average)