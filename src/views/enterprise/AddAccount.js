import React, { useEffect, useState } from 'react'
import axios from 'axios';
import auth from '../../helpers/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



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

function AddAccount() {
    const [produk, setProduk] = useState([]);
    const [updateFull, setUpdateFull] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleLg, setVisibleLg] = useState(false)
    const [visibleLg2, setVisibleLg2] = useState(false)
    const [visibleLg3, setVisibleLg3] = useState(false)
    const [visibleSmPenempatan, setVisibleSmPenempatan] = useState(false)
    const [visibleSmAkses, setVisibleSmAkses] = useState(false)
    const [visibleSmWebServer, setVisibleSmWebServer] = useState(false)
    const [visibleSmDeveloper, setVisibleSmDeveloper] = useState(false)
    const [visibleSmPIC, setVisibleSmPIC] = useState(false)
    const [visibleSmStatus, setVisibleSmStatus] = useState(false)
    const [validated, setValidated] = useState(false)
    const [status, setStatus] = React.useState('')
    const [searchResults, setSearchResults] = useState([])
    const [jenisAccount, setJenisAccount] = useState([])
    const [usernameAccount, setUsernameAccount] = useState([])
    const [passAccount, setPassAccount] = useState([])
    const [expAccount, setExpAccount] = useState([])
    const [specAccount, setSpecAccount] = useState([])
    const [idAccount, setIdAccount] = useState([])
    const [lengthIdAccount, setLengthIdAccount] = useState([])
    const [NewExpAccount, setNewExpAcc] = useState([])
    const [namaProduk, setNamaProduk] = useState([]);
    const [deskripsiProduk, setDeskripsiProduk] = useState([]);
    const [idProdukDetail, setIdProdukDetail] = useState([]);
    const [produkIdDetail, setProdukIdDetail] = useState([]);
    const [penempatanDetail, setPenempatanDetail] = useState([]);
    const [picNipposDetail, setPICNipposDetail] = useState([]);
    const [aksesDetail, setAksesDetail] = useState([]);
    const [developerDetail, setDeveloperDetail] = useState([]);
    const [serverDetail, setServerDetail] = useState([]);
    const [businessOwnerDetail, setBusinessOwnerDetail] = useState([]);
    const [waktuOperasionalDetail, setWaktuOperasionalDetail] = useState([]);
    const [urlDetail, setURLDetail] = useState([]);
    const [portDetail, setPortDetail] = useState([]);
    const [frameworkDetail, setFrameworkDetail] = useState([]);
    const [verFrameworkDetail, setVerFrameworkDetail] = useState([]);
    const [jenisDatabaseDetail, setJenisDatabaseDetail] = useState([]);
    const [tanggalLiveDetail, setTanggalLiveDetail] = useState([]);
    const [tanggalAkhirUpdateDetail, setTanggalAkhirUpdateDetail] = useState([]);
    const [tanggalTutupDetail, setTanggalTutupDetail] = useState([]);
    const [tanggalDeployDetail, setTanggalDeployDetail] = useState([]);
    const [ipSpec, setIPSpec] = useState([]);
    const [cpuSpec, setCPUSpec] = useState([]);
    const [ramSpec, setRAMSpec] = useState([]);
    const [storageSpec, setStorageSpec] = useState([]);
    const [idSpec, setIdSpec] = useState([]);
    const [webIdSpec, setWebIdSpec] = useState([]);
    const [idServer, setIdServer] = useState([]);
    const [webServer, setWebServer] = useState([]);
    const [pilihIPProduk, setPilihIPProduk] = useState([])
    const [NEW_NAMA_WEB_SERVER, setNew_Nama_Web_Server] = useState([]);
    const [NEW_NAMA_PIC, setNew_Nama_PIC] = useState([]);
    const [NEW_NIPPOS_PIC, setNew_Nippos_PIC] = useState([]);
    const [NEW_USERNAME_PIC, setNew_Username_PIC] = useState([]);
    const [NEW_PASS_PIC, setNew_Pass_PIC] = useState([]);
    const [NEW_TELEPON_PIC, setNew_Telepon_PIC] = useState([]);
    const [accounts, setAccounts] = useState([])
    const [servers, setServers] = useState([])
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    useEffect(() => {
        // Initialize with three default milestones
        if (accounts.length === 0) {
            setAccounts([
                // { description: '', progress: '' },
                // { description: '', progress: '' },
                // { description: '', progress: '' }
                { jenis_akun: '', uname: '', pass_akun: '', exp_akun: '', spec_server: '' }
            ]);
        }
    }, [accounts]);

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

    const [account2, setAccount2] = React.useState(
        searchResults.account || []
    )


    const handleJenisAccount = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedAccount = [...accounts];
        updatedAccount[index].JENIS_AKUN = value;
        setAccounts(updatedAccount);
        setJenisAccount(updatedAccount.map(acc => (acc.JENIS_AKUN)));
    };

    const handleUsernameAccount = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedAccount = [...accounts];
        updatedAccount[index].USERNAME = value;
        setAccounts(updatedAccount);
        setUsernameAccount(updatedAccount.map(acc => (acc.USERNAME)));
    };

    const handlePassAccount = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedAccount = [...accounts];
        updatedAccount[index].PASS = value;
        setAccounts(updatedAccount);
        setPassAccount(updatedAccount.map(acc => (acc.PASS)));
    };

    const handleExpAccount = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedAccount = [...accounts];
        updatedAccount[index].EXP_DATE_PASSWORD = value;
        setAccounts(updatedAccount);
        setExpAccount(updatedAccount.map(acc => (acc.EXP_DATE_PASSWORD)));
    };

    const handleClick = (index, id) => {
        console.log("idclick", id)
        const updatedAccount = [...accounts];
        updatedAccount[index].SPEC_SERVER_ID = id;
        console.log("Clicked Servers Array:", updatedAccount);
        setAccounts(updatedAccount);
        setSpecAccount(updatedAccount.map(acc => (acc.SPEC_SERVER_ID)));
        // setClickedServers(servers => {
        //     const updatedServer = [...servers];
        //     updatedServer[index].web_server = id;

        //     console.log("Clicked Servers Array:", updatedServers);
        //     return updatedServer;
        // });
    };

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

    useEffect(() => {
        axios.get('http://localhost:5000/detail/pilih-server')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihServer(response.data);
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
        axios.get('http://localhost:5000/detail/pilih-ip-produk')
            .then(response => {
                // console.log('Data received:', response.data); // Cek data yang diterima
                if (Array.isArray(response.data)) {
                    setPilihIPProduk(response.data);
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

    const handleNewAccount = async () => {
        console.log(NEW_NAMA_PIC, "NEW_NAMA_PIC")
        try {
            setVisibleLg(!visibleLg)
            setVisibleLg2(!visibleLg2)
            setVisibleLg3(!visibleLg3)
            const requestBody = {
                // ID_PRODUK,
                NAMA_PRODUK: namaProduk,
                DESKRIPSI_PRODUK: deskripsiProduk,
                FLAG_STATUS: status,

                // ID_AKSES: idAkses,
                // NAMA_AKSES: namaAkses,

                // ID_DEVELOPER: idDeveloper,
                // NAMA_DEVELOPER: namaDeveloper,

                // NAMA: namaKaryawan,
                // TELEPON: teleponKaryawan,
                // NIPPOS: nipposKaryawan,
                // USERNAME: usernameKaryawan,
                // PASS: passKaryawan,

                // ID_STATUS: idStatus,
                // NAMA_STATUS: namaStatus,

                ID_PRODUK_DETAIL: idProdukDetail,
                PRODUK_ID: produkIdDetail,
                PENEMPATAN: penempatanDetail,
                PIC_NIPPOS: picNipposDetail,
                AKSES: aksesDetail,
                DEVELOPER: developerDetail,
                SERVER: serverDetail,
                BUSINESS_OWNER: businessOwnerDetail,
                WAKTU_OPERASIONAL: waktuOperasionalDetail,
                URL: urlDetail,
                PORT: portDetail,
                FRAMEWORK: frameworkDetail,
                VER_FRAMEWORK: verFrameworkDetail,
                JENIS_DATABASE: jenisDatabaseDetail,
                TANGGAL_LIVE: tanggalLiveDetail,
                TANGGAL_AKHIR_UPDATE: tanggalAkhirUpdateDetail,
                TANGGAL_TUTUP: tanggalTutupDetail,
                TANGGAL_DEPLOY: tanggalDeployDetail,

                IP_SERVER: ipSpec,
                CPU: cpuSpec,
                RAM: ramSpec,
                STORAGE: storageSpec,
                // ID_SPEC_SERVER: idSpec,
                // WEB_SERVER_ID: webIdSpec,

                // ID_WEB_SERVER: idServer,
                // NAMA_WEB_SERVER: webServer,

                // BA_DEPLOY: ba_deploy,
                // REQ_DEPLOY: req_deploy,
                // ID_ACCOUNT: idAccount,
                JENIS_AKUN: jenisAccount,
                USERNAME: usernameAccount,
                PASS: passAccount,
                EXP_DATE_PASSWORD: expAccount,
                ID_SPEC_SERVER: specAccount,
                LENGTH_ACCOUNT: lengthIdAccount
            }
            console.log("reqbody", requestBody)

            const response = await axios.post('http://localhost:5000/add/new-account', requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // setAccount(response.data);
            // setAccount2(response.data);
            console.log("Account2 data:", response.data);

            // setIdAccount(response.data.map(item => item.ID_ACCOUNT));
            // setJenisAccount(response.data.map(item => item.JENIS_AKUN));
            // setUsernameAccount(response.data.map(item => item.USERNAME));
            // setPassAccount(response.data.map(item => item.PASS));
            // setExpAccount(response.data.map(item => item.EXP_DATE_PASSWORD));
            // setLengthIdAccount(response.data.map(item => item.ID_ACCOUNT).length);
            // console.log("dataaaa", response.data)
            // setError(null);
        } catch (err) {
            // setError('Error fetching details');
            // setAccount(null);
        }
    };

    const addGridAccount = () => {
        setAccounts([...accounts, { jenis_akun: '', uname: '', pass_akun: '', exp_akun: '', spec_server: '' }])
    }

    const handleClose = async () => {
        setVisibleLg3(false);
        window.location.reload();
    }

    return (
        <>
            <div className="mb-3">
                <CButton color="primary" size="sm" onClick={() => { handleNewAccount() }}>Add New Account</CButton>
            </div>
            <CModal
                scrollable
                size="lg"
                visible={visibleLg3}
                onClose={() => handleClose()}
                aria-labelledby="OptionalSizesExample2"
            >
                <CModalHeader>
                    <CModalTitle id="ScrollingLongContentExampleLabel2">Add Account</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol style={{ flexBasis: '20%' }}>
                            <span>Server - Produk</span> <span style={{ color: 'red' }}>*</span>
                        </CCol>
                        <CCol style={{ flexBasis: '20%' }}>
                            <span>Jenis Akun</span> <span style={{ color: 'red' }}>*</span>
                        </CCol>
                        <CCol style={{ flexBasis: '20%' }}>
                            <span>Username</span>
                        </CCol>
                        <CCol style={{ flexBasis: '20%' }}>
                            <span>Password</span>
                        </CCol>
                        <CCol style={{ flexBasis: '20%' }}>
                            <span>Exp Date Pass</span>
                        </CCol>
                        <CRow className="mb-3">
                            {accounts.map((acc, index) => (
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                                        <CDropdown className="w-100">
                                            <OutlineDropdownToggle>
                                                -- Pilih --
                                                {/* {penempatanDetail ? pilihPenempatan.find(item => item.ID_PENEMPATAN === penempatanDetail)?.NAMA_PENEMPATAN : '-- Pilih --'} */}
                                            </OutlineDropdownToggle>

                                            <CDropdownMenu>
                                                {pilihIPProduk.map(item => (
                                                    <CDropdownItem
                                                        key={item.ID_SPEC_SERVER}
                                                        onClick={e => handleClick(index, item.ID_SPEC_SERVER)}
                                                    >
                                                        {item.IP_SERVER}-{item.NAMA_PRODUK}
                                                    </CDropdownItem>
                                                ))}
                                            </CDropdownMenu>
                                        </CDropdown>
                                    </CCol>
                                    <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                                        <CFormInput
                                            type="text"
                                            value={acc.jenisAccount}
                                            onChange={(e) => handleJenisAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                            required
                                        />
                                    </CCol>
                                    <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                                        <CFormInput
                                            type="text"
                                            value={acc.usernameAccount}
                                            onChange={(e) => handleUsernameAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        />
                                    </CCol>
                                    <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
      <CInputGroup>
        <CFormInput
          type={isPasswordVisible ? 'text' : 'password'}
          value={acc.passAccount}
          onChange={(e) => handlePassAccount(index, e.target.value)}
          feedbackValid="Looks good!"
          id="validationCustom01"
        />
        {/* Tombol untuk mengubah visibilitas password */}
        <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </CInputGroupText>
      </CInputGroup>
    </CCol>
                                    <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                                        {/* {NewExpAccount[index] && ( */}
                                        <CFormInput
                                            type="date"
                                            value={acc.expAccount}
                                            onChange={(e) => handleExpAccount(index, e.target.value)}
                                            feedbackValid="Looks good!"
                                            id="validationCustom01"
                                        />
                                        {/* )} */}
                                    </CCol>
                                </div>
                            ))}
                            <div>

                                <CButton
                                    color="primary"
                                    onClick={addGridAccount}
                                >
                                    Add Row
                                </CButton>
                            </div>
                            {/* ))}  */}
                        </CRow>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="primary"
                        onClick={() => {
                            handleNewAccount();
                        }}
                    >
                        Save changes
                    </CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}

export default auth(AddAccount)