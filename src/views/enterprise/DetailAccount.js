import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CForm,
    CCol,
    CRow,
    CFormSelect,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CModalFooter,
    CButton,
} from '@coreui/react';
import auth from '../../helpers/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const DetailAccount = ({ NewExpAccount, role, item, details, handleFetchAccount, account2, handleJenisAccount, handleUsernameAccount, handlePassAccount, handleExpAccount, handleUpdateAccount }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <>
            <td className="py-2">
                <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                        handleFetchAccount(item.ID_PRODUK);
                        setVisible(!visible);
                    }}
                >
                    {details.includes(item.ID_PRODUK) ? 'Hide' : 'Show'}
                </CButton>
            </td>

            <CModal
                scrollable
                size="lg"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="OptionalSizesExample2"
            >
                <CModalHeader>
                    <CModalTitle id="ScrollingLongContentExampleLabel2">Details Account {item.NAMA_PRODUK}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate onSubmit={handleUpdateAccount}>
                        {/* <CCol md={1}>
              <span>Jenis Akun</span>
            </CCol> */}
                        <CCol md={3}>
                            <span>Type of Account</span>
                        </CCol>
                        <CCol md={3}>
                            <span>Username</span>
                        </CCol>
                        <CCol md={3}>
                            <span>Password</span>
                        </CCol>
                        <CCol md={3}>
                            <span>Exp Date Pass</span>
                        </CCol>
                        {/* <CCol md={1}>
            </CCol> */}
                        <CRow className="mb-3">
                            {account2.map((item, index) => (
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <CCol md={3} style={{ marginRight: '10px' }}>
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.JENIS_AKUN}
                                            onChange={(e) => handleJenisAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            readOnly={role === 2}
                                        />
                                    </CCol>
                                    <CCol md={3} style={{ marginRight: '10px' }}>
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.USERNAME}
                                            onChange={(e) => handleUsernameAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            readOnly={role === 2}
                                        />
                                    </CCol>
                                    <CCol md={3} style={{ marginRight: '10px' }}>
                                        <CInputGroup>
                                            <CFormInput
                                                type={isPasswordVisible ? 'text' : 'password'}
                                                defaultValue={item.PASS}
                                                onChange={(e) => handlePassAccount(index, e.target.value)}
                                                feedbackValid="Looks good!"
                                                id="validationCustom01"
                                                readOnly={role === 2}
                                            />
                                            {role !== 2 && (
                                                <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                </CInputGroupText>
                                            )}
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={3}>
                                        {NewExpAccount[index] && (
                                            <CFormInput
                                                type="date"
                                                defaultValue={NewExpAccount[index]}
                                                onChange={(e) => handleExpAccount(index, e.target.value)}
                                                feedbackValid="Looks good!"
                                                id="validationCustom01"
                                                readOnly={role === 2}
                                            />
                                        )}
                                    </CCol>
                                </div>
                            ))}
                        </CRow>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    {role !== 2 && (
                        <CButton
                            color="primary"
                            onClick={() => {
                                handleUpdateAccount();
                            }}
                        >
                            Save changes
                        </CButton>
                    )}
                </CModalFooter>
            </CModal>
        </>
    );
};

export default auth(DetailAccount);