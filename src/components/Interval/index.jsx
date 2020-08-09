import React from 'react'
import Card from '../../components/Card'
import {connect} from 'react-redux'

import './index.css'
import { changeNumberMin, changeNumberMax } from '../../store/actions/numberValue'

const Interval = props => {
    const {max, min, setMax, setMin} = props
    return (
        <div className='Interval'>
            <Card
                red
                title='Intervalo de números'>
                    <span>
                        <strong>Mínimo</strong>
                        <input
                            type='number' value={min}
                            onChange={({target: {value}})=> setMin(value)}
                        />
                    </span>
                    <span>
                        <strong>Máximo</strong>
                        <input
                            type='number' value={max}
                            onChange={({target: {value}})=> setMax(value) }
                        />
                    </span>
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

function mapDispatchToProps(dispatch) {
    return {
        setMin(novoNumero) {
            const action = changeNumberMin(novoNumero)
            dispatch(action)
        },
        setMax(novoNumero) {
            const action = changeNumberMax(novoNumero)
            dispatch(action) // Chama reducers
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Interval)