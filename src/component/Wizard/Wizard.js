import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { clear } from './../../ducks/reducer';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


    function Wiz(props) {
        return (
            <div className='Wizard'>
            <div className='wiz_subheader'>
                <h2 className='wiz_heading'>Add New Listing</h2>
                <button className='wiz_subheader_button' onClick={_ => {
                props.clear();
                props.history.push('/')
                }}>Cancel</button>
            </div>
                <Route path='/wizard/Step1' component={Step1} />
                <Route path='/wizard/Step2' component={Step2} />
                <Route path='/wizard/Step3' component={Step3} />
            </div>
        )
    }
    
    export default connect(null, { clear })(Wiz);