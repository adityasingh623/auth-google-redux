import React from 'react';
import { connect } from 'react-redux';
import { trySignIn, trySignOut } from "../actions/index";

class WelcomePage extends React.Component{

    renderLoginButton(){
        return (
            <button className="ui google plus button" onClick={this.props.trySignIn}>
                <i className="google plus icon"></i>
                Sign in with Google
            </button>
        );
    }

    renderUserDetailsWhenLoggedIn(){
        return (
            <div>
                <table className="ui celled table">
                    <tbody>
                        <tr>
                            <td>{this.props.userAuthReducer.userFirstName}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userLastName}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userEmail}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userId}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userAccessToken}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userIdToken}</td>
                        </tr>
                        <tr>
                            <td>{this.props.userAuthReducer.userAuthProvider}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="ui google plus button" onClick={this.props.trySignOut}>
                    <i className="google plus icon"></i>
                    Sign Out
                </button>
            </div>
        );
    }

    render(){
        console.log(this.props.userAuthReducer);
        return (
            <div>
                {this.props.userAuthReducer.loginStatus ? this.renderUserDetailsWhenLoggedIn() :this.renderLoginButton()}
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        userAuthReducer : state.userAuthReducer
    };
}

export default connect(mapStateToProps, {
    trySignIn : trySignIn,
    trySignOut : trySignOut
})(WelcomePage);