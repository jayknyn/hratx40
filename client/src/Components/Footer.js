import React from 'react';
import Paper from '@material-ui/core/Paper';
import { faInfoCircle, faEnvelope, faMapMarkerAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const divStyle = {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  listStyle: 'none',
  height: '64px',
  backgroundColor: '#C4ADAE',
  opacity: '.90'
}

const paperStyle = {
  textAlign: 'center'
}

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: true,
      info: false,
      contact: false,
      location: false,
      scroll: false
    }
    
    this.handleContact = this.handleContact.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  checkInfo() {
    if (this.state.info) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>HRATX40</h2>
            <ul>
              <li>Austin Anderson</li>
              <li>David Castillo</li>
              <li>Drew DiStefano</li>
              <li>Drew Lockliear</li>
              <li>Jarrod Miller</li>
              <li>Jay Kannaiyan</li>
              <li>Jonathan Becker</li>
              <li>Jonathon Lopez</li>
              <li>Maggie Gray</li>
              <li>Mathew Feinberg</li>
              <li>Nicholas Miron</li>
              <li>Ryan Ferrer</li>
            </ul>
            <br />
          </div>
        </Paper>
      )
    }
  }

  checkContact() {
    if (this.state.contact) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>Contact</h2>
            <h4 style={paperStyle}>contact@repl.today</h4>
            <br />
          </div>
        </Paper>
      )
    }
  }

  checkLocation() {
    if (this.state.location) {
      return (
        <Paper>
          <div>
            <br />
            <h2 style={paperStyle}>Location</h2>
            <h4 style={paperStyle}>Autstin, TX</h4>
            <br />
          </div>
        </Paper>
      )
    }
  }

  handleInfo() {
    if (this.state.info === true) {
      this.setState({
        info: false,
        contact: false,
        location: false
      })
    } else {
      this.setState({
        info: true,
        contact: false,
        location: false
      },() => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  handleContact() {
    if (this.state.contact === true) {
      this.setState({
        contact: false,
        location: false,
        info: false
      })
    } else {
      this.setState({
        contact: true,
        location: false,
        info: false
      }, () => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  handleLocation() {
    if (this.state.location === true) {
      this.setState({
        contact: false,
        info: false,
        location: false
      })
    } else {
      this.setState({
        contact: false,
        info: false,
        location: true,
      }, () => window.scrollTo(0,document.body.scrollHeight))
    }
  }

  render() {
    if (this.state.icons === true) {
      return (
        <div>
          <div style={divStyle}>
            <FontAwesomeIcon name='info' icon={faInfoCircle} size='2x' onClick={() => {this.handleInfo()}}/>
            <FontAwesomeIcon name='contact' icon={faEnvelope} size='2x' onClick={() => {this.handleContact()}}/>
            <FontAwesomeIcon name='home' onClick={() => {this.props.footerPageChange()}} icon={faHome} size='2x'/>
            <FontAwesomeIcon name='location' icon={faMapMarkerAlt} size='2x' onClick={() => {this.handleLocation()}}/>
            <FontAwesomeIcon onClick={() => {window.open('https://github.com/hratx-blue-ocean/hratx40',"_blank")}} icon={faGithub} size='2x'/>
          </div>
          {this.checkInfo()}
          {this.checkContact()}
          {this.checkLocation()}
        </div>
      )
    }
  } 
}
export default Footer;