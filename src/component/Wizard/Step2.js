import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateImg } from '../../ducks/reducer';
import './Wizard.css';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ img: this.props.imgage })
  }

  handleChange(value) {
    this.setState({ img: value })
  }

  render() {

    return (
      <div>
        <div className='wiz_input_container'>
          <div className='wiz_input_box'>
            <p>Image URL</p>
            <input style={{ width: "35vw" }} value={this.state.img} onChange={e => this.handleChange(e.target.value)} />
          </div>
        </div>
        <button className='wiz_button wiz_prev_button' onClick={_ => {
          this.props.updateImg(this.state.img);
          this.props.history.push('/wizard/step1');
        }}>Previous Step</button>
        <button className='wiz_button wiz_step_button' onClick={_ => {
          this.props.updateImg(this.state.img);
          this.props.history.push('/wizard/step3');
        }}>Next Step</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, { updateImg })(Step2);