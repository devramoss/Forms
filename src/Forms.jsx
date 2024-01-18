import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import "./assets/forms.css";

const Forms = () => {
    const handleClickLogin = () => {

    };

    const handleClickRegister = () => {

    };

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Este não é um formato válido de email!")
            .required("Este campo é obrigatório!"),
        password: yup
            .string()
            .min(8, "A senha deve ter no mínimo oito caracteres")
            .required("Este campo é obrigatório!"),
    });

    const validationRegister = yup.object().shape({
        name: yup
            .string()
            .required("Este campo é obrigatório!"),
        email: yup
            .string()
            .email("Este não é um formato válido de email!")
            .required("Este campo é obrigatório!"),
        password: yup
            .string()
            .min(8, "A senha deve ter no mínimo oito caracteres")
            .required("Este campo é obrigatório!"),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não se conferem!")
    });

    return(
        <div>
            <div className="container">
                <h1 className="title">
                    Formulário de Login
                </h1>
                <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                    <Form className="login-form">
                        <div className="login-form-group">
                            <Field type="email" name="email" className="form-field" placeholder="Email" autocomplete="off"/>
                            <ErrorMessage component="span" name="email" className="form-error"/>
                        </div>

                        <div className="login-form-group">
                            <Field type="password" name="password" className="form-field" placeholder="Senha" autocomplete="off"/>
                            <ErrorMessage component="span" name="password" className="form-error"/>
                        </div>
                        
                        <button className="button" type="submit">
                            LOGIN
                        </button>
                    </Form>
                </Formik>
            </div>

            <div className="container">
                <h1 className="title">
                    Cadastro
                </h1>
                <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                    <Form className="register-form">
                        <div className="register-form-group">
                            <Field type="text" name="name" className="form-field" placeholder="Nome" autocomplete="off"/>
                            <ErrorMessage component="span" name="name" className="form-error"/>
                        </div>
                        <div className="register-form-group">
                            <Field type="email" name="email" className="form-field" placeholder="Email" autocomplete="off"/>
                            <ErrorMessage component="span" name="email" className="form-error"/>
                        </div>
                        <div className="register-form-group">
                            <Field type="password" name="password" className="form-field" placeholder="Senha" autocomplete="off"/>
                            <ErrorMessage component="span" name="password" className="form-error"/>
                        </div>
                        <div className="register-form-group">
                            <Field type="password" name="passwordConfirmation" className="form-field" placeholder="Confirme sua senha" autocomplete="off"/>
                            <ErrorMessage component="span" name="passwordConfirmation" className="form-error"/>
                        </div>
                        <button className="button" type="submit">
                            CADASTRAR
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Forms;