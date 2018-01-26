import React from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from 'containers/DashboardAppBar'
import { Route, Switch, Redirect } from 'react-router-dom';
import Labels from 'containers/Labels';
import './index.css';

class Dashboard extends React.Component {

    render() {
        const { onSignOut } = this.props;

        return (<div className="Dashboard">
            <DashboardAppBar onSignOut={onSignOut} />
            <div className="Dashboard__content">
                <Switch>
                    <Redirect exact to="/dashboard/labels/INBOX" from="/dashboard"/>
                    <Route path="/dashboard" component={Labels} />
                </Switch>
            </div>
        </div>);
    }

}

Dashboard.propTypes = {
    onSignOut: PropTypes.func.isRequired
}

export default Dashboard;