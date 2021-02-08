import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./css/index.css"

import {connect} from "react-redux";
import {RegistrationFetch} from "../../../request/Authorization/Registration";

class Registration extends React.Component {
    render() {
        let errorTextImg =  <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        let errorText = {
            name:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Имя, обязательное поле</p>
            </div>,
            nameCountMin:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Надо больше 6 симолов</p>
            </div>,
            namePassCountMax:<div className="formBlock-box_input__error">
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
            confirmOneOf:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Пароли должны совпадать</p>
            </div>,
            confirmPassword:<div className="formBlock-box_input__error">
                {errorTextImg}
                <p>Подтвердите пароль</p>
            </div>,

        }
        return (

            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(6,errorText.nameCountMin)
                        .max(100,errorText.namePassCountMax)
                        .required(errorText.name),
                    password: Yup.string()
                        .min(6,errorText.password )
                        .max(100,errorText.namePassCountMax)
                        .required(errorText.passwordRequired),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], errorText.confirmOneOf)
                        .required(errorText.confirmPassword)
                })}
                onSubmit={ async fields => {
                    console.log(fields)
                       let serverResponse = await this.props.Registration({login:fields.name,password:fields.password })
                       if(serverResponse.success) {
                           this.props.history.push('/login/user')
                       }

                }}
                render={({ errors, status, touched }) => (
                    <>
                        <div className="formBlock">
                            <Form>
                                <p className="formBlock-title">Регистрация</p>
                                <div className="form-group">
                                    <label htmlFor="name">Логин:</label>
                                    <div className="formBlock-box">
                                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                                        <div className="formBlock-box_input">
                                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback"/>
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
                                    <label htmlFor="confirmPassword">Повторите пороль:</label>
                                    <div className="formBlock-box">
                                        <span><i className="fa fa-key" aria-hidden="true"></i></span>
                                        <div className="formBlock-box_input">
                                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                     <button type="submit" className="btn btn-primary mr-2">Зарегистрирыватся</button>
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
        Registration: (body) => dispatch(RegistrationFetch(body)),
    };
};
export default connect(mapStateToProps,mapStateToDispatch )(Registration)



