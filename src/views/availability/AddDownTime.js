import React, { useEffect, useState } from 'react'
import axios from 'axios';
import auth from '../../helpers/auth';
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CModal,
    CModalBody,
    CModalContent,
    CModalDialog,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CForm,
    CFormInput,
    CFormTextarea,
    CFormLabel,
    CInputGroup,
    CInputGroupText,
    CFormSelect,
    CFormCheck,
    CFormFeedback,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
} from '@coreui/react'
import styled from 'styled-components';

function AddDownTime() {
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleLg, setVisibleLg] = useState(false)
    const [validated, setValidated] = useState(false)
    const [expAccount, setExpAccount] = useState([])
    const [NewExpAccount, setNewExpAcc] = useState([])
    const [NEW_NAMA_PIC, setNew_Nama_PIC] = useState([]);
    const [pilihProduk, setPilihProduk] = useState([])
    const [produkTime, setProdukTime] = useState([])
    const [specTime, setSpecTime] = useState([])
    const [durasiUpTime, setDurasiUpTime] = useState([])
    const [durasiDownTime, setDurasiDownTime] = useState([])
    const [downTime, setDownTime] = useState([])
    const [solvedTime, setSolvedTime] = useState([])
    const [kejadianTime, setKejadianTime] = useState([])
    const [penyebabTime, setPenyebabTime] = useState([])
    const [solusiTime, setSolusiTime] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-produk')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihProduk(response.data);
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
        if (downTime && solvedTime) {
            const startTime = new Date(downTime);
            const endTime = new Date(solvedTime);

            // Calculate the difference in milliseconds
            const duration = endTime - startTime;

            if (duration >= 0) {
                // Convert milliseconds to hours and minutes
                const hours = Math.floor(duration / (1000 * 60 * 60));
                const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

                // Format the duration as a readable string
                setDurasiDownTime(`${hours} hours ${minutes} minutes`);
            } else {
                setDurasiDownTime('');
            }
        }
    }, [downTime, solvedTime]);

    const handleTimeChange = (e, type) => {
        if (type === 'downTime') {
            setDownTime(e.target.value);
        } else if (type === 'solvedTime') {
            setSolvedTime(e.target.value);
        }
    };

    const handleAdd = () => {
        // console.log('Add new item');
        try {
            setVisibleLg(!visibleLg)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    useEffect(() => {
        const newFormattedDates = expAccount.map(dateStr => {
            // Cek apakah dateStr kosong atau null
            if (!dateStr) {
                const date = new Date(dateStr); // Konversi string ISO ke objek Date
                const day = String(date.getDate()).padStart(2, '0'); // Ambil hari, tambahkan leading zero
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Ambil bulan, tambahkan leading zero
                const year = date.getFullYear(); // Ambil tahun

                return `${day}/${month}/${year}`;
            }

            const date = new Date(dateStr); // Konversi string ISO ke objek Date
            return date.toISOString().split('T')[0]; // Format ke YYYY-MM-DD
        });

        // Update state dengan tanggal yang telah diformat atau null
        setNewExpAcc(newFormattedDates);
    }, [expAccount]);

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/detail/main-table')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setProduk(response.data);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    const OutlineDropdownToggle = styled(CDropdownToggle)`
    border: 1px solid #d1d1d1; /* Ganti dengan warna outline yang diinginkan */
    color: #818181; /* Ganti dengan warna teks yang diinginkan */
    background-color: transparent; /* Menghapus background */
    
    &:hover {
        background-color: #007bff; /* Warna background saat hover */
        color: #fff; /* Warna teks saat hover */
    }
`;

    const formatDateToDatabase = (dateString) => {
        const date = new Date(dateString);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    };

    const formattedDownTime = formatDateToDatabase(downTime);
    const formattedSolvedTime = formatDateToDatabase(solvedTime);

    const handleNewProduk = async () => {
        // setIsDisabled(true);
        console.log(NEW_NAMA_PIC, "NEW_NAMA_PIC")
        try {
            setVisibleLg(!visibleLg)
            // setVisibleLg(true)
            const requestBody = {
                PRODUK_ID: produkTime,
                UP_TIME: durasiUpTime,
                DOWN_TIME: durasiDownTime,
                WAKTU_DOWN: formattedDownTime,
                WAKTU_SELESAI: formattedSolvedTime,
                KEJADIAN: kejadianTime,
                PENYEBAB: penyebabTime,
                SOLUSI: solusiTime
            }
            console.log("reqbody", requestBody)

            const response = await axios.post('http://localhost:5000/add/new-availability', requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (err) {
            // setError('Error fetching details');
            // setAccount(null);
        }
        window.location.reload();
    };

    return (
        <>

            <div className="mb-3">
                <CButton color="primary" size="sm" onClick={() => { handleAdd() }}>Add New Item</CButton>
            </div>
            <CModal
                scrollable
                size="lg"
                visible={visibleLg}
                onClose={() => setVisibleLg(false)}
                aria-labelledby="OptionalSizesExample2"
            >
                <CModalHeader>
                    <CModalTitle id="ScrollingLongContentExampleLabel2">Add Incident</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Pilih Produk
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CDropdown className="w-100">
                                    <OutlineDropdownToggle>
                                        -- Pilih --
                                        {/* {penempatanDetail ? pilihPenempatan.find(item => item.ID_PENEMPATAN === penempatanDetail)?.NAMA_PENEMPATAN : '-- Pilih --'} */}
                                    </OutlineDropdownToggle>

                                    <CDropdownMenu>
                                        {pilihProduk.map(item => (
                                            <CDropdownItem
                                                key={item.ID_PRODUK}
                                                onClick={e => setProdukTime(item.ID_PRODUK)}
                                            >
                                                {item.NAMA_PRODUK}
                                            </CDropdownItem>
                                        ))}
                                    </CDropdownMenu>
                                </CDropdown>
                            </div>
                        </CCol>
                        {!specTime && <div className="invalid-feedback d-block">Please select a product</div>}
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Durasi Up Time
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormInput
                                    type="text"
                                    value={durasiUpTime}
                                    onChange={e => setDurasiUpTime(e.target.value)}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                // label="Up Time"
                                // required
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Durasi Down Time
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormInput
                                    type="text"
                                    value={durasiDownTime}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                    // label="Down Time Duration"
                                    readOnly
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Waktu Down
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormInput
                                    type="datetime-local"
                                    value={downTime}
                                    // onChange={e => setDownTime(e.target.value)}
                                    onChange={e => handleTimeChange(e, 'downTime')}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                // label="Waktu Down"
                                // required
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Waktu Solved
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormInput
                                    type="datetime-local"
                                    value={solvedTime}
                                    // onChange={e => setSolvedTime(e.target.value)}
                                    onChange={e => handleTimeChange(e, 'solvedTime')}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                // label="Waktu Solved"
                                // required
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Kejadian
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormTextarea
                                    value={kejadianTime}
                                    onChange={e => setKejadianTime(e.target.value)}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                    // label="Kejadian"
                                    required
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Penyebab
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormTextarea
                                    value={penyebabTime}
                                    onChange={e => setPenyebabTime(e.target.value)}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                    // label="Penyebab"
                                    required
                                />
                            </div>
                        </CCol>
                        <CCol md={3}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="validationCustom01" className="form-label me-4" style={{ whiteSpace: 'nowrap' }}>
                                    Solusi
                                </label>
                            </div>
                        </CCol>
                        <CCol md={9}>
                            <div className="d-flex align-items-center">
                                <CFormTextarea
                                    value={solusiTime}
                                    onChange={e => setSolusiTime(e.target.value)}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                    // label="Solusi"
                                    required
                                />
                            </div>
                        </CCol>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="primary"
                        onClick={() => {
                            handleNewProduk();
                        }}
                    // disabled={isDisabled}
                    >
                        Save changes and Go to next page
                    </CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}

export default auth(AddDownTime)
