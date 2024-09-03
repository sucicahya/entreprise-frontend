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
    CModalFooter,
    CButton,
} from '@coreui/react';

const DetailAccount = ({ NewExpAccount, item, details, handleFetchAccount, account2, handleJenisAccount, handleUsernameAccount, handlePassAccount, handleExpAccount, handleUpdateAccount }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);

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
                    <CModalTitle id="ScrollingLongContentExampleLabel2">Details Account</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate onSubmit={handleUpdateAccount}>
                        {/* <CCol md={1}>
              <span>Jenis Akun</span>
            </CCol> */}
                        <CCol md={3}>
                            <span>Jenis Akun</span>
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
                                        />
                                    </CCol>
                                    <CCol md={3} style={{ marginRight: '10px' }}>
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.USERNAME}
                                            onChange={(e) => handleUsernameAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        />
                                    </CCol>
                                    <CCol md={3} style={{ marginRight: '10px' }}>
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.PASS}
                                            onChange={(e) => handlePassAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        />
                                    </CCol>
                                    <CCol md={3}>
                                        {NewExpAccount[index] && (
                                            <CFormInput
                                                type="date"
                                                defaultValue={NewExpAccount[index]}
                                                onChange={(e) => handleExpAccount(index, e.target.value)}
                                                feedbackValid="Looks good!"
                                                id="validationCustom01"
                                            />
                                        )}
                                    </CCol>
                                </div>
                            ))}
                        </CRow>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    {/* <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton> */}
                    {/* {detail.map(item => {
            return (
              <React.Fragment> */}
                    <CButton
                        color="primary"
                        onClick={() => {
                            handleUpdateAccount();
                        }}
                    >
                        Save changes
                    </CButton>
                    {/* </React.Fragment>
            );
          })} */}
                </CModalFooter>
            </CModal>
        </>
    );
};

export default DetailAccount;
