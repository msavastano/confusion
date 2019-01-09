import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderLeader ({leader}) {
    return (
        <Fade in>
        <Media tag="li">
            
            <Media left middle>
                <Media object src={baseUrl + leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
            <Media heading>{leader.name}</Media>
            <p>{leader.designation}</p>
            <p>{leader.description}</p>
        </Media>
        
    </Media>
    </Fade>
    );
}

export default RenderLeader;