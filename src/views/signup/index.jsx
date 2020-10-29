import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../domain/firebase';
import { BoxLogin } from '../login/styles';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();

            const { email, password } = event.target.elements;

            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        email.value,
                        password.value,
                    );
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history],
    );

    return (
        <BoxLogin>
            <form onSubmit={handleSignUp}>
                <h1 className="title">Cadastre-se</h1>

                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />

                <button type="submit">Cadastrar</button>
            </form>
        </BoxLogin>
    );
};

export default withRouter(SignUp);
