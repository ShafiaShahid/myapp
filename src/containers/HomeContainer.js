import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table } from 'react-bootstrap';

class HomeContainer extends React.Component {
    render() {
        const { users } = this.props;

        const tbody = [];

        console.log(users);

        if (users.length === 0) {
            tbody.push((
                <tr>
                    <td colSpan="10"><h4>There are currently no users</h4></td>
                </tr>
            ));
        } else {
            for (let i in users) {
                tbody.push((
                    <tr>
                        <td>{parseInt(i) + 1}</td>
                        <td>{users[i].info.firstName}</td>
                        <td>{users[i].info.lastName}</td>
                        <td>{users[i].info.address}</td>
                        <td>{users[i].info.company}</td>
                        <td>{users[i].info.telephoneNumber}</td>
                        <td>{users[i].info.dob}</td>
                    </tr>
                ));
            }
        }

        return ((
            <Grid>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>#</th>
                            <th style={{textAlign:"center"}}>First Name</th>
                            <th style={{textAlign:"center"}}>Last Name</th>
                            <th style={{textAlign:"center"}}>Address</th>
                            <th style={{textAlign:"center"}}>Company</th>
                            <th style={{textAlign:"center"}}>Telephone Number</th>
                            <th style={{textAlign:"center"}}>DoB</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {tbody}
                    </tbody>
                </Table>
            </Grid>
        ));
    }
};

const mapStateToProps = ({ users }) => ({
    users,
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
