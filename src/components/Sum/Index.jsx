import React from 'react'
import Card from '../Card'
import {connect} from 'react-redux'

const Sum = props => {
    const {max, min} = props
    return (
        <div className='Sum'>
            <Card
                red
                title='Soma'>
                    <span> Resultado </span>
                        <strong> { Number(min) + Number(max) } </strong>
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

export default connect(mapStateToProps)(Sum)