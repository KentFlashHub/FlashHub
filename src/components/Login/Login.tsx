import { Api } from '../api/api';
import { CustomState, LoginData, activePage, useCustomState, handleLogin } from '../utils';
import './forms.css';
import React, { useState, FormEvent } from 'react';
import GoogleAuth from '../api/GoogleAuth';

interface LoginProps {
    api: Api;
    loginState: CustomState<LoginData>;
    activePageState: CustomState<activePage>;
    clientId: CustomState<string>;
}


export default function Login({ api, loginState, activePageState, clientId }: LoginProps) {
    return (
        <div className="landing-container">

            <div className="landing-img">
                <img src="/logoimg.png" alt="" className="logo" width="400" height="400" />
            </div>

            <div className="sologan">
                <h2>Unlock your potential {' '}
                    <span className='green-text'>flashcard & marterial</span>
                    {' '} at your fingertips!
                </h2>
                <form className="form-container">

                    <p>Sign Up</p>
                    <div className="form-field">
                        <GoogleAuth clientId={clientId.get()} api={api} activePageState={activePageState} loginState={loginState} />
                    </div>
                </form>
            </div>

        </div>
    );
}
