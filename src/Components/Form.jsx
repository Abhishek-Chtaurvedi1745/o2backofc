import React, { useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css';
import { useNavigate } from 'react-router-dom';

export default function FormLayout({ heading, para, formData, selectField, onSubmitSuccess }) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        CompanyName: "",
        ServiceType: ""
    });
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleCaptcha = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!captchaValue) {
            Swal.fire({
                title: "Error",
                text: "Please complete the reCAPTCHA verification.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formValues.name);
        formDataToSubmit.append('email', formValues.email);
        formDataToSubmit.append('phone', formValues.phoneNumber);
        formDataToSubmit.append('company', formValues.CompanyName);
        formDataToSubmit.append('service', formValues.ServiceType);
        formDataToSubmit.append('g-recaptcha-response', captchaValue);

        fetch('https://www.outsource2backoffice.com/Apis/inquiry.php', {
            method: 'POST',
            body: formDataToSubmit
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: "Submission Successful",
                text: "Your form has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                // Reset form
                setFormValues({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    CompanyName: "",
                    ServiceType: ""
                });
                setCaptchaValue(null);
                
                // Call the success callback if provided
                if (onSubmitSuccess) {
                    onSubmitSuccess();
                }

                // Navigate to the thank you page
                navigate('/thank-you');
            });
        })
        .catch(error => {
            Swal.fire({
                title: "Error",
                text: "There was an error submitting your form. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        });
    };

    return (
        <Form className='main-form-page' onSubmit={handleSubmit}>
            <div className="form-content">
                <h1 className='text-center pt-4 fw-bold hed4' style={{ color: "#FE5A0E" }}>{heading}</h1>
                <p className='text-center para' style={{ color: "#3C3C3C", fontWeight: "500" }}>{para}</p>

                {formData.map((field, index) => (
                    <FormGroup key={index} className='form-field'>
                        <FormControl
                            type={field.type}
                            placeholder={field.placeholder}
                            required={true}
                            className='form-control-main-page'
                            name={field.name}
                            value={formValues[field.name]}
                            onChange={handleChange}
                        />
                    </FormGroup>
                ))}

                {selectField && (
                    <Form.Group controlId="formSelectField" className="my-3 form-field">
                        <Form.Select
                            required={true}
                            className='form-control-main-page'
                            name="ServiceType"
                            value={formValues.ServiceType}
                            onChange={handleChange}
                        >
                            <option value="">Select Service Type*</option>
                            {selectField.options.map((option, index) => (
                                <option key={index} value={option.value} disabled={option.disabled}>
                                    {option.label}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}

               
                <div className='submit-button-container'>
                    <Button type="submit" className='formbutton'>Submit</Button>
                </div>
            </div>
        </Form>
    );
}