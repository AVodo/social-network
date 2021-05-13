import React from "react";
import {Field, reduxForm} from "redux-form";


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"login"} placeholder={"Login"} component={"input"}/>
        </div>

        <div>
            <Field name={"Password"} placeholder={"Password"} component={"input"}/>
        </div>

        <div>
            <Field name={"Remember Me"} type={"checkbox"} component={"input"}/> Remember Me
        </div>

        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;