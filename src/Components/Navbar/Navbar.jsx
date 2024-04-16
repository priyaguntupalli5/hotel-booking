import React, { Component } from "react";
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const countryStateMap = {
  Canada: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
  // Add more countries and their states or provinces as needed
};

export default class Navbar extends Component {

  state = {
    isOpen: false,
    country: 'Canada',
    state: '',
    startDate: '',
    endDate: '',
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    const { country, state,  startDate, endDate } = this.state;
    const states = countryStateMap[country] || [];
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* App logo */}
            <Link to="/">
              <img src={Logo} alt="Beach Resort" />
            </Link>

            {/* Navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* Navbar links */}
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
              <select
                name="country"
                value={country}
                onChange={this.handleChange}
                className="nav-input"
              >
                {Object.keys(countryStateMap).map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </li>
            <li>
              <select
                name="state"
                value={state}
                onChange={this.handleChange}
                className="nav-input"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </li>
            <li className="date-input-wrapper">
              <label htmlFor="startDate" style={{fontSize: '14px'}}>Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
                className="nav-input date-input"
              />
            </li>
            <li className="date-input-wrapper">
              <label htmlFor="endDate" style={{fontSize: '14px'}}>End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
                className="nav-input date-input"
              />
            </li>                   
          </ul>
        </div>
      </nav>
    );
  }
}
