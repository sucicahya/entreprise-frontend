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
    CFormTextarea,
} from '@coreui/react';
import auth from '../../helpers/auth';

const DetailAvailability = ({ item, detail, handleFetchDetails, handleUpdateDetail }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pilihPenempatan, setPilihPenempatan] = useState([])
    const [pilihKaryawan, setPilihKaryawan] = useState([])
    const [pilihAkses, setPilihAkses] = useState([])
    const [pilihDatabase, setPilihDatabase] = useState([])
    const [pilihDeveloper, setPilihDeveloper] = useState([])
    const [pilihStatus, setPilihStatus] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-penempatan')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihPenempatan(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-karyawan')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihKaryawan(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-akses')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihAkses(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-database')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihDatabase(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-developer')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihDeveloper(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-status')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihStatus(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <td className="py-2">
                <CButton
                    // color="primary"
                    // variant="outline"
                    // shape="square"
                    size="md"
                    style={{ border: 'none' }}
                    onClick={() => {
                        handleFetchDetails(item.ID_PRODUK);
                        setVisible(!visible);
                    }}
                >
                    <a style={{ color: 'blue', textDecoration: 'underline' }} // Gaya untuk link
                    >{item.DOWN_TIME}
                    </a>
                    {/* {detail.map(item => (
                        <React.Fragment>
                            {item.URL}
                        </React.Fragment>
                    ))} */}
                </CButton>
            </td>


            <CModal
                scrollable
                size="lg"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="OptionalSizesExample2"

            >
                {detail.map(item => (
                    <React.Fragment>
                        <CModalHeader>
                            <CModalTitle id="ScrollingLongContentExampleLabel2">Details Produk {item.NAMA_PRODUK}</CModalTitle>
                        </CModalHeader>
                    </React.Fragment>
                ))}
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate onSubmit={handleUpdateDetail}>
                        {detail.map(item => (
                            <React.Fragment>
                                <CCol md={2}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Waktu Down
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={10}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="datetime-local"
                                            defaultValue={item.WAKTU_DOWN}
                                            onChange={e => setNamaProduk(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            className="form-control"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={2}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Waktu Selesai
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={10}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="datetime-local"
                                            defaultValue={item.WAKTU_SELESAI}
                                            onChange={e => setDeskripsiProduk(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={2}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Kejadian
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={10}>
                                    <div className="d-flex align-items-center">
                                        <CFormTextarea
                                            type="text"
                                            defaultValue={item.KEJADIAN}
                                            onChange={e => setURLDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={2}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Penyebab
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={10}>
                                    <div className="d-flex align-items-center">
                                        <CFormTextarea
                                            type="text"
                                            defaultValue={item.PENYEBAB}
                                            onChange={e => setPortDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={2}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Solusi
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={10}>
                                    <div className="d-flex align-items-center">
                                        <CFormTextarea
                                            type="text"
                                            defaultValue={item.SOLUSI}
                                            onChange={e => setWaktuOperasionalDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // required
                                        />
                                    </div>
                                </CCol>
                            </React.Fragment>
                        ))}
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    {/* {detail.map(item => {
                        return (
                            <React.Fragment key={item.ID_PRODUK}> */}
                    <CButton
                        color="primary"
                        onClick={() => {
                            handleUpdateDetail(item.ID_PRODUK);
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

export default auth(DetailAvailability);