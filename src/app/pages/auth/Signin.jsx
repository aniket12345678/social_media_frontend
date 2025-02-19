import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import AuthLayout from '../../components/AuthLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { FormComponent } from '../../common/method'

const Signin = () => {
    const validate = Yup.object().shape({
        email: Yup.string().required('Enter email'),
        password: Yup.string().required('Enter password'),
    });

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validate,
        onSubmit: (values) => {
            console.log('values:- ', values);

        }
    });
    return (
        <div className="card-body p-5">
            <h2 className="text-uppercase text-center mb-5">Sign in</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormComponent
                            type="email"
                            name='email'
                            values={values}
                            placeholder='Email'
                            handleChange={handleChange}
                            errors={errors}
                        />
                    </Col>
                    <Col md={6}>
                        <FormComponent
                            type="password"
                            name='password'
                            values={values}
                            placeholder='Password'
                            handleChange={handleChange}
                            errors={errors}
                        />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button variant='success' type='submit'>Register</Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Don't have an account?
                    <Link to={'/'}>Sign Up</Link>
                </p>
            </Form>
        </div>
    )
}

export default AuthLayout(Signin)
