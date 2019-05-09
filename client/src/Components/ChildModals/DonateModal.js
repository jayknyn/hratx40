import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import DonateModalItem from './DonateModalItem'

class DonateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Donating: [{name: 'Loading..', description: '', time: '', url: ''}]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/charities', {params: {
      topicName: this.props.topic
    }})
      .then((response) => {
        if (response.data.length) {
          this.setState({
            Donating: response.data
          })
        } else {
          this.setState({
            Donating: [{name: 'No events in the near future', description: 'Please check out the charity pages!', time: '', url: ''}]
          })
        }
      })
      .catch((error) => {
        this.setState({
          Donating: [{name: 'Error', description: '', time: '', url: ''}]
        })
      })

  }

  render() {
    return (
      <div id="child-modal" style={{textAlign: "center"}}>
        <Typography variant = 'h3' >
          Donate to these Charities!
        </Typography>
        <hr/>
        <div style={{overflowY:"scroll", height: '35vh'}}>
        {this.state.Donating.map((opportunity, index) => {
          return (
            <DonateModalItem opportunity = {opportunity} key = {index} />
          )
        })}
        </div>

      </div>
    )
  }
}
export default DonateModal;