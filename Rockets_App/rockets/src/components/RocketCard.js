import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

const RocketCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    Rocket: {props.rocketData.rocket.rocket_name} Type: {props.rocketData.rocket.rocket_type}
                     Lauched at: {props.rocketData.launch_site.site_name_long}
                    <br/>
                    <p>Payload: {props.rocketData.rocket.second_stage.payloads.map(payload =>
                        <span>{payload.payload_id} {payload.payload_type} Manufactured by:{payload.manufacturer} Country of origin: {payload.nationality}</span>
                       )}
                    </p>
                    <br/>
                    <span> Launch Images </span>
                     {props.rocketData.links.flickr_images.map(url =>
                         <img lg="6" src={url} alt="launchimage"></img>
                     )}
                </CardBody>
            </Card>
        </div>
    );
};

RocketCard.propTypes = {
    rocket:PropTypes.any.isRequired
}

export default RocketCard;