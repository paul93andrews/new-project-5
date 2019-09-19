import React, {Component} from 'react';
import firebase, { auth, provider } from '../firebase';
import '../ButtonStyles/_buttonStyles.scss';

class GuestButton extends Component {
    constructor() {
        super();
    }

    guestSubmit = () => {
        firebase.auth().signInAnonymously()
            .then((result) => {
                const guestUser = result.user;
                const guestUsername = ''
                this.props.guestAccess('user', guestUsername, guestUser.uid)
            });
        }

    render(){
        return(
            <button className="guestButton accessButton" onClick={this.guestSubmit}>Guest</button>
        )
    }
}

export default GuestButton;