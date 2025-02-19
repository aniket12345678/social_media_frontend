import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import AuthLayout from '../../components/AuthLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { FormComponent } from '../../common/method'

const Signup = () => {
    const validate = Yup.object().shape({
        first_name: Yup.string().required('Enter first name'),
        last_name: Yup.string().required('Enter last name'),
        email: Yup.string().required('Enter email'),
        password: Yup.string().required('Enter password'),
        confirm_password: Yup.string().required('Enter confirm password'),
    });

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: validate,
        onSubmit: (values) => {
            console.log('values:- ', values);

        }
    });

    return (
        <div className="card-body p-5">
            <h2 className="text-uppercase text-center mb-5">Sign up</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormComponent
                            type="text"
                            name='first_name'
                            values={values}
                            placeholder='First name'
                            handleChange={handleChange}
                            errors={errors}
                        />
                    </Col>
                    <Col md={6}>
                        <FormComponent
                            type="text"
                            name='last_name'
                            values={values}
                            placeholder='Last name'
                            handleChange={handleChange}
                            errors={errors}
                        />
                    </Col>
                </Row>
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
                <Row>
                    <Col md={12}>
                        <FormComponent
                            type="password"
                            name='confirm_password'
                            values={values}
                            placeholder='Confirm password'
                            handleChange={handleChange}
                            errors={errors}
                        />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button variant='success' type='submit'>Register</Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Already have an account?
                    <Link to={'/'}>Signin</Link>
                </p>
            </Form>
        </div>
    )
}

export default AuthLayout(Signup)
