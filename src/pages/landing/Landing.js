import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectVisit
} from "../../store/reducers/visitorReducers";

import styles from "./Landing.module.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function Landing() {
  const visit = useSelector( selectVisit );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ incrementAmount, setIncrementAmount ] = useState( "2" );
  const incrementValue = Number( incrementAmount ) || 0;
  const { loginUser, registerUser, logoutUser, isLoggedIn } = useAuth();

  return (
    <div>
      <div className={ styles.row }>
        <button
          className={ styles.button }
          aria-label="Login"
          onClick={ () => navigate( "/auth/change-password" ) }
        >
          Change password
        </button>
        <button
          className={ styles.button }
          aria-label="Login"
          onClick={ () => isLoggedIn ? logoutUser() : navigate( "/login" ) }
        >
          { isLoggedIn ? "Log out" : "Go to Login" }
        </button>
        <button
          className={ styles.button }
          aria-label="Login"
          onClick={ () => loginUser( { email: "from-landing@example.com", password: "password" } ) }
        >
          Login
        </button>
        <button
          className={ styles.button }
          aria-label="Login"
          onClick={ () => registerUser( { email: "from-landing-register@example.com", password: "password" } ) }
        >
          Register
        </button>
      </div>
      <div className={ styles.row }>
        <button
          className={ styles.button }
          aria-label="Decrement value"
          onClick={ () => dispatch( decrement() ) }
        >
          -
        </button>
        <span className={ styles.value }>{ visit }</span>
        <button
          className={ styles.button }
          aria-label="Increment value"
          onClick={ () => dispatch( increment() ) }
        >
          +
        </button>
      </div>
      <div className={ styles.row }>
        <input
          className={ styles.textbox }
          aria-label="Set increment amount"
          value={ incrementAmount }
          onChange={ ( e ) => setIncrementAmount( e.target.value ) }
        />
        <button
          className={ styles.button }
          onClick={ () => dispatch( incrementByAmount( incrementValue ) ) }
        >
          Add Amount
        </button>
        <button
          className={ styles.asyncButton }
          onClick={ () => dispatch( incrementAsync( incrementValue ) ) }
        >
          Add Async
        </button>
        <button
          className={ styles.button }
          onClick={ () => dispatch( incrementIfOdd( incrementValue ) ) }
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
