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
import auth from '../../helpers/auth';

const DetailMain = ({ item, details, detail, formattedTanggalLive, formattedTanggalTutup, formattedTanggalUpdate, formattedTanggalDeploy, handleFetchDetails, handleUpdateDetail, handleSetNamaProduk,
    handleSetDeskripsiProduk,
    handleSetFlagProduk,
    handleSetURLDetail,
    handleSetPortDetail,
    handleSetPenempatanDetail,
    handleSetAksesDetail,
    handleSetWaktuOperasionalDetail,
    handleSetDatabaseDetail,
    handleSetFrameworkDetail,
    handleSetVerFrameworkDetail,
    handleSetDeveloperDetail,
    handleSetBusinessOwnerDetail,
    handleSetPICNipposDetail,
    handleSetTeleponKaryawan,
    handleSetTanggalLiveDetail,
    handleSetTanggalAkhirUpdateDetail,
    handleSetTanggalTutupDetail,
    handleSetTanggalDeployDetail }) => {
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
                    >{item.URL}
                    </a>
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
                            <CModalTitle id="ScrollingLongContentExampleLabel2">Details {item.NAMA_PRODUK}</CModalTitle>
                        </CModalHeader>
                    </React.Fragment>
                ))}
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate onSubmit={handleUpdateDetail}>
                        {detail.map(item => (
                            <React.Fragment>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Nama Produk
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.NAMA_PRODUK}
                                            onChange={e => handleSetNamaProduk(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            // label="Nama Produk"
                                            required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Deskripsi Produk
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.DESKRIPSI_PRODUK}
                                            onChange={e =>  handleSetDeskripsiProduk(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            // label="Deskripsi Produk"
                                            required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Status
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.FLAG_STATUS}
                                            onChange={e =>  handleSetFlagProduk(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Status"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihStatus.map(item => (
                                                <option key={item.ID_STATUS} value={item.ID_STATUS}>
                                                    {item.NAMA_STATUS}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Domain
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.URL}
                                            onChange={e =>  handleSetURLDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="URL"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Port
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.PORT}
                                            onChange={e =>  handleSetPortDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Port"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Penempatan
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.PENEMPATAN}
                                            onChange={e =>  handleSetPenempatanDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Penempatan"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihPenempatan.map(item => (
                                                <option key={item.ID_PENEMPATAN} value={item.ID_PENEMPATAN}>
                                                    {item.NAMA_PENEMPATAN}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Akses
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.AKSES}
                                            onChange={e =>  handleSetAksesDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Akses"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihAkses.map(item => (
                                                <option key={item.ID_AKSES} value={item.ID_AKSES}>
                                                    {item.NAMA_AKSES}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Waktu Operasional
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.WAKTU_OPERASIONAL}
                                            onChange={e =>  handleSetWaktuOperasionalDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Waktu Operasional"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Jenis Database
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.JENIS_DB}
                                            onChange={e =>  handleSetDatabaseDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Database"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihDatabase.map(item => (
                                                <option key={item.ID_DATABASE} value={item.ID_DATABASE}>
                                                    {item.NAMA_DATABASE}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Framework
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.FRAMEWORK}
                                            onChange={e =>  handleSetFrameworkDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Framework"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Versi Framework
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.VER_FRAMEWORK}
                                            onChange={e =>  handleSetVerFrameworkDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Version Framework"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Developer
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.DEVELOPER}
                                            onChange={e =>  handleSetDeveloperDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Developer"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihDeveloper.map(item => (
                                                <option key={item.ID_DEVELOPER} value={item.ID_DEVELOPER}>
                                                    {item.NAMA_DEVELOPER}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Business Owner
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.BUSINESS_OWNER}
                                            onChange={e =>  handleSetBusinessOwnerDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Business Owner"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            PIC
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormSelect
                                            type="text"
                                            defaultValue={item.PIC_NIPPOS}
                                            onChange={e =>  handleSetPICNipposDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="PIC"
                                        // required
                                        >
                                            <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                                            {pilihKaryawan.map(item => (
                                                <option key={item.NIPPOS} value={item.NIPPOS}>
                                                    {item.NAMA}
                                                </option>
                                            ))}
                                        </CFormSelect>
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Telepon PIC
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="text"
                                            defaultValue={item.TELEPON}
                                            onChange={e =>  handleSetTeleponKaryawan(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            // label="Kontak PIC"
                                            readOnly
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Tanggal Live
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="date"
                                            defaultValue={formattedTanggalLive}
                                            onChange={e =>  handleSetTanggalLiveDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Tanggal Live"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Tanggal Deploy
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="date"
                                            defaultValue={formattedTanggalDeploy}
                                            onChange={e =>  handleSetTanggalDeployDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Tanggal Deploy"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Tanggal Update
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="date"
                                            defaultValue={formattedTanggalUpdate}
                                            onChange={e =>  handleSetTanggalAkhirUpdateDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Tanggal Update"
                                        // required
                                        />
                                    </div>
                                </CCol>
                                <CCol md={3}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                            Tanggal Tutup
                                        </label>
                                    </div>
                                </CCol>
                                <CCol md={9}>
                                    <div className="d-flex align-items-center">
                                        <CFormInput
                                            type="date"
                                            defaultValue={formattedTanggalTutup}
                                            onChange={e =>  handleSetTanggalTutupDetail(e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        // label="Tanggal Tutup"
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

export default auth(DetailMain);