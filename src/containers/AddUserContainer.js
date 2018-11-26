import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import AddUserForm from '../components/addUserForm';
import { addUser } from '../actions/index';

class AddUserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { addUser } = this.props;

    const { firstName, lastName, address, company, telephoneNumber, dob } = e.target.elements;
    const info = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      company: company.value,
      telephoneNumber: telephoneNumber.value,
      dob: dob.value,
    };
    addUser(info);
  }

  handleChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return (
      <Grid>
        <AddUserForm onSubmit={(e) => { this.onSubmit(e) }} />
      </Grid>
    );
  }
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  addUser: (info) => (dispatch(addUser(info))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
