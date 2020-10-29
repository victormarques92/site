import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router';
import firebase from '../../domain/firebase';
import { AuthContext } from '../../routes/auth';
import { BoxLogin } from './styles';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();

            const { email, password } = event.target.elements;

            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/admin');
            } catch (error) {
                alert(error);
            }
        },
        [history],
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin" />;
    }

    return (
        <BoxLogin>
            <form onSubmit={handleLogin}>
                <h1 className="title">Login</h1>

                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />

                <button type="submit">Entrar</button>
            </form>
        </BoxLogin>
    );
};

export default withRouter(Login);
