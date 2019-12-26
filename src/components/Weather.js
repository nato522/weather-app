import React from 'react';

const Weather = props => (
    <div>
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.error && <p>Please fill the form</p>}
    </div>
);

export default Weather;