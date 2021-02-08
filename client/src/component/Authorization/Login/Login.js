import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./css/index.css"

import {connect} from "react-redux";
import {LoginFetch} from "../../../request/Authorization/Login";

class Login extends React.Component {
    render() {
        let errorTextImg =  <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        let errorText = {
            loginRequired:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Требуется электронная почта</p>
            </div>,
            login:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>login недействителен</p>
            </div>,
            loginCountMin:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Надо больше 6 симолов</p>
            </div>,
            loginPassCountMax:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Надо меньше 100 симолов</p>
            </div>,
            passwordRequired:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Необходим пароль</p>
            </div>,
            password:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Пароль должен содержать не менее 6 символов</p>
            </div>,


        }
        return (
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({

                    login: Yup.string()
                        .min(6,errorText.loginCountMin)
                        .max(100,errorText.loginPassCountMax)
                        .required(errorText.loginRequired),
                    password: Yup.string()
                        .min(6,errorText.password )
                        .max(100,errorText.loginPassCountMax)
                        .required(errorText.passwordRequired),
                })}
                onSubmit={ async fields => {
                    let serverResponse = await this.props.LoginFetch(fields)

                    if(serverResponse.success) {
                        this.props.history.push('/')
                    }

                }}
                render={({ errors, status, touched }) => (
                    <>
                        <div className="formBlock">
                            <Form>
                                <p className="formBlock-title">Вход</p>
                                <div className="form-group">
                                    <label htmlFor="login">Логин:</label>
                                    <div className="formBlock-box">
                                        <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        <div className="formBlock-box_input">
                                            <Field name="login" type="text" className={'form-control' + (errors.login && touched.login ? ' is-invalid' : '')} />
                                            <ErrorMessage name="login" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пороль:</label>
                                    <div className="formBlock-box">
                                        <span><i className="fa fa-key" aria-hidden="true"></i></span>
                                        <div className="formBlock-box_input">
                                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Войти</button>
                                </div>
                            </Form>
                        </div>
                    </>

                )}
            />
        )
    }
}

const mapStateToProps = (state) => {

    return {


    };
};

const mapStateToDispatch  = dispatch => {
    return {
        LoginFetch: (body) => dispatch(LoginFetch(body)),
    };
};
export default connect(mapStateToProps,mapStateToDispatch )(Login)



