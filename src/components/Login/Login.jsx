import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";


const Login = (props) => {

    const onSubmit = (formData) => {
        debugger;
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"email"} placeholder={"email"} component={"input"}/>
        </div>

        <div>
            <Field name={"password"} placeholder={"Password"} component={"input"} type={"password"}/>
        </div>

        <div>
            <Field name={"rememberMe"} type={"checkbox"} component={"input"}/> Remember Me
        </div>

        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default connect(null, {logIn})(Login);