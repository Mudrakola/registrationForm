import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    invalidFirstName: '',
    invalidLastName: '',
    isRegistrationSuccess: true,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({
        invalidFirstName: 'Required',
      })
    }
    if (lastName === '') {
      this.setState({invalidLastName: 'Required'})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isRegistrationSuccess: false})
    }
  }

  eventHandlerFirst = event => {
    if (event.target.value === '') {
      this.setState({invalidFirstName: 'Required'})
    }
    if (event.target.value !== '') {
      this.setState({invalidFirstName: ''})
    }
  }

  eventHandlerLast = event => {
    if (event.target.value === '') {
      this.setState({invalidLastName: 'Required'})
    }
    if (event.target.value !== '') {
      this.setState({invalidLastName: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onResponseSubmit = () => {
    this.setState({isRegistrationSuccess: true, firstName: '', lastName: ''})
  }

  renderFirstName = () => {
    const {invalidFirstName, firstName} = this.state
    const inVal = invalidFirstName !== '' ? 'outlineCol' : 'notOutline'
    return (
      <>
        <label htmlFor="first-name" className="label-elemnt">
          FIRST NAME
        </label>
        <input
          onBlur={this.eventHandlerFirst}
          type="text"
          id="first-name"
          value={firstName}
          onChange={this.onChangeFirstName}
          className={`inputElement ${inVal}`}
          placeholder="First name"
        />
        <p className="invalid-para">{invalidFirstName}</p>
      </>
    )
  }

  renderLastName = () => {
    const {invalidLastName, lastName} = this.state
    const inVal = invalidLastName !== '' ? 'outlineCol' : 'notOutline'
    return (
      <>
        <label htmlFor="last-name" className="label-elemnt">
          LAST NAME
        </label>
        <input
          onBlur={this.eventHandlerLast}
          type="text"
          id="last-name"
          value={lastName}
          onChange={this.onChangeLastName}
          className={`inputElement ${inVal}`}
          placeholder="Last name"
        />
        <p className="invalid-para">{invalidLastName}</p>
      </>
    )
  }

  render() {
    const {isRegistrationSuccess} = this.state

    return (
      <div className="bg-container">
        <h1 className="registration-heading">Registration</h1>
        {isRegistrationSuccess ? (
          <>
            <form className="card-container" onSubmit={this.onSubmitForm}>
              <div className="fullName">{this.renderFirstName()}</div>
              <div className="fullName">{this.renderLastName()}</div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </>
        ) : (
          <form className="card-container" onSubmit={this.onResponseSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="successIcon"
              alt="success"
            />
            <p className="success-para">Submitted Successfully</p>
            <button type="submit" className="button-response">
              Submit Another Response
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
