import React, { useState, useEffect } from 'react'
import {
    Article
} from './Styling';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <Article
            className={`color ${index > 20 && 'color-light'}`}
            style={{
                backgroundColor: `rgb(${bcg})`,
                padding: '2rem'
            }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}>
            <p>{weight}%</p>
            <p>{hexValue}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </Article >
    )

}

export default SingleColor
