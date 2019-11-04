import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardText } from 'reactstrap';

const DetailsPannel = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <p>Launch Details:</p>
                    <CardText>{props.description}.</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

DetailsPannel.propTypes = {
    description:PropTypes.string.isRequired
}

export default DetailsPannel;