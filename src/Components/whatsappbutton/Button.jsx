import React, { useState, useEffect } from 'react';
import '../Header/Header.css';
import { Button, Modal } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import FormLayout from '../Form';

export default function ButtonComponent({btnName, btnClassName = '', showHeaderStyle = false }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const isModalShown = sessionStorage.getItem('isModalShown');
        if (!isModalShown) {
            setShow(true);
            sessionStorage.setItem('isModalShown', 'true');
        }
    }, []);

    const formData = [
        {
            type: "text",
            placeholder: "Name",
            required: true,
            name: "name"
        },
        {
            type: "email",
            placeholder: "Email",
            required: true,
            name: "email"
        },
        {
            type: "tel",
            placeholder: "Phone",
            required: true,
            name: "phoneNumber"
        },
        {
            type: "text",
            placeholder: "Company Name",
            required: false,
            name: "CompanyName"
        }
    ];

    const selectField = {
        type: 'select',
        placeholder: 'Service Type',
        options: [
            { label: 'Select Service Type', value: '', disabled: true },
            { label: 'Accountants & Book keeping', value: 'Accountants & Book keeping' },
            { label: 'Virtual Assistants', value: 'Virtual Assistants' },
            { label: 'Customer Service', value: 'Customer Service' },
            { label: 'Technical Support', value: 'Technical Support' },
            { label: 'Call Centre outsourcing', value: 'Call Centre outsourcing' },
            { label: 'HR &  Recruitment', value: 'HR &  Recruitment' },
            { label: 'Admin & Data Entry', value: 'Admin & Data Entry' },
            { label: 'Sales Support', value: 'Sales Support' },
            { label: 'Social Media Management', value: 'Social Media Management' }
        ],
        required: true
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // New function to handle successful form submission
    const handleFormSubmitSuccess = () => {
        handleClose(); // Close the modal
    };

    return (
        <>
            <Button
                onClick={handleShow}
                className={`${showHeaderStyle ? 'for-header-button' : ''} ${btnClassName}`}
            >
                {btnName}
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <div className='d-flex justify-content-end p-0' style={{ backgroundColor: "white" }}>
                    <Button variant="link" onClick={handleClose} className="pb-0 text-left">
                        <FaTimes size={25} color="#FF631A" />
                    </Button>
                </div>
                <FormLayout
                    heading="Contact Us"
                    para="Book A FREE 30-Minutes Consultation"
                    formData={formData}
                    selectField={selectField}
                    onSubmitSuccess={handleFormSubmitSuccess}
                />
            </Modal>
        </>
    );
}