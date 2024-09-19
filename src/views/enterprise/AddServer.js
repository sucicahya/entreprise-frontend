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

function AddServer() {
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
    const [idAccount, setIdAccount] = useState([])
    const [lengthIdAccount, setLengthIdAccount] = useState([])
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(true);
    const [isDisabled3, setIsDisabled3] = useState(false);
    const [NewExpAccount, setNewExpAcc] = useState([]);
    const [namaProduk, setNamaProduk] = useState([]);
    const [deskripsiProduk, setDeskripsiProduk] = useState([]);
    const [idProdukDetail, setIdProdukDetail] = useState([]);
    const [produkIdDetail, setProdukIdDetail] = useState([]);
    const [penempatanDetail, setPenempatanDetail] = useState([]);
    const [picNipposDetail, setPICNipposDetail] = useState([]);
    const [aksesDetail, setAksesDetail] = useState([]);
    const [developerDetail, setDeveloperDetail] = useState([]);
    const [serverDetail, setServerDetail] = useState([]);
    const [produkServer, setProdukServer] = useState([]);
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
    const [pilihServer, setPilihServer] = useState([])
    const [pilihProduk, setPilihProduk] = useState([])
    const [NEW_NAMA_WEB_SERVER, setNew_Nama_Web_Server] = useState([]);
    const [NEW_NAMA_PIC, setNew_Nama_PIC] = useState([]);
    const [NEW_NIPPOS_PIC, setNew_Nippos_PIC] = useState([]);
    const [NEW_USERNAME_PIC, setNew_Username_PIC] = useState([]);
    const [NEW_PASS_PIC, setNew_Pass_PIC] = useState([]);
    const [NEW_TELEPON_PIC, setNew_Telepon_PIC] = useState([]);
    const [accounts, setAccounts] = useState([])
    const [servers, setServers] = useState([])

    useEffect(() => {
        // Initialize with three default milestones
        if (servers.length === 0) {
            setServers([
                // { description: '', progress: '' },
                // { description: '', progress: '' },
                // { description: '', progress: '' }
                { ip_server: '', jenis_server: '', cpu: '', ram: '', storage: '', produk_server: '' }
            ]);
        }
    }, [servers]);

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

    const [server2, setServer2] = React.useState(
        searchResults.server || []
    )

    const handleIpServer = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedServer = [...servers];
        updatedServer[index].IP_SERVER = value;
        setServers(updatedServer);
        setIPSpec(updatedServer.map(acc => (acc.IP_SERVER)));
    };

    const handleClick = (index, id) => {
        console.log("idclick", id)
        const updatedServer = [...servers];
        updatedServer[index].jenis_server = id;
        console.log("Clicked Servers Array:", updatedServer);
        setServers(updatedServer);
        setServerDetail(updatedServer.map(acc => (acc.jenis_server)));
        // setClickedServers(servers => {
        //     const updatedServer = [...servers];
        //     updatedServer[index].web_server = id;

        //     console.log("Clicked Servers Array:", updatedServers);
        //     return updatedServer;
        // });
    };

    const handleClick2 = (index, id) => {
        console.log("idclick", id)
        const updatedServer = [...servers];
        updatedServer[index].produk_server = id;
        console.log("Clicked Servers Array:", updatedServer);
        setServers(updatedServer);
        setProdukServer(updatedServer.map(acc => (acc.produk_server)));
        // setClickedServers(servers => {
        //     const updatedServer = [...servers];
        //     updatedServer[index].web_server = id;

        //     console.log("Clicked Servers Array:", updatedServers);
        //     return updatedServer;
        // });
    };

    const handleCPUServer = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedServer = [...servers];
        updatedServer[index].CPU = value;
        setServers(updatedServer);
        setCPUSpec(updatedServer.map(acc => (acc.CPU)));
    };

    const handleRAMServer = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedServer = [...servers];
        updatedServer[index].RAM = value;
        setServers(updatedServer);
        setRAMSpec(updatedServer.map(acc => (acc.RAM)));
    };

    const handleStorageServer = (index, value) => {
        console.log("rrxind", index)
        console.log("rrxval", value)
        const updatedServer = [...servers];
        updatedServer[index].STORAGE = value;
        setServers(updatedServer);
        setStorageSpec(updatedServer.map(acc => (acc.STORAGE)));
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

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleButtonNewWebServer = () => {
        // alert(`Selected WebServer`);

        try {
            setVisibleSmWebServer(!visibleSmWebServer)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const OutlineDropdownToggle = styled(CDropdownToggle)`
    border: 1px solid #d1d1d1; /* Ganti dengan warna outline yang diinginkan */
    color: #818181; /* Ganti dengan warna teks yang diinginkan */
    background-color: transparent; /* Menghapus background */
    
    &:hover {
        background-color: #007bff; /* Warna background saat hover */
        color: #fff; /* Warna teks saat hover */
    }
`;

    const handleNewWebServer = async (NEW_NAMA_WEB_SERVER) => {
        console.log(NEW_NAMA_WEB_SERVER, "NEW_NAMA_WEB_SERVER")
        try {
            setVisibleSmWebServer(!visibleSmWebServer)
            const response = await axios.post('http://localhost:5000/add/new-webserver', { NEW_NAMA_WEB_SERVER });
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

    const handleNewServer = async () => {
        console.log(NEW_NAMA_PIC, "NEW_NAMA_PIC")
        // setIsDisabled(true);
        setIsDisabled2(true);
        // setIsDisabled3(true);
        try {
            setVisibleLg(!visibleLg)
            setVisibleLg2(!visibleLg2)
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
                JENIS_SERVER: serverDetail,
                PRODUK: produkServer,
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
                LENGTH_ACCOUNT: lengthIdAccount
            }
            console.log("reqbody2", requestBody)

            const response = await axios.post('http://localhost:5000/add/new-server', requestBody, {
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

    const addGridServer = () => {
        setServers([...servers, { ip_server: '', web_server: '', cpu: '', ram: '', storage: '', produk_server: '' }])
    }

    return (
        <>
            <div className="mb-3">
                <CButton color="primary" size="sm" onClick={() => { handleNewServer() }}>Add New Server</CButton>
            </div>
            <CModal
                scrollable
                size="lg"
                visible={visibleLg2}
                onClose={() => setVisibleLg2(false)}
                aria-labelledby="OptionalSizesExample2"
            >
                <CModalHeader>
                    <CModalTitle id="ScrollingLongContentExampleLabel2">Add Web Server</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={12}>
                            <CButton
                                color="primary"
                                onClick={handleButtonNewWebServer}
                            >
                                Tambah Web Server
                            </CButton>
                        </CCol>
                        <CRow>
                            <CCol md={2}>
                                <span>Produk</span>
                            </CCol>
                            <CCol md={2}>
                                <span>IP Server</span>
                            </CCol>
                            <CCol md={2}>
                                <span>Jenis Server</span>
                            </CCol>
                            <CCol md={2}>
                                <span>CPU</span>
                            </CCol>
                            <CCol md={2}>
                                <span>RAM</span>
                            </CCol>
                            <CCol md={2}>
                                <span>Storage</span>
                            </CCol>
                        </CRow>
                        {servers.map((acc, index) => (
                            <div style={{ display: 'flex', marginBottom: '10px' }}>
                                <CCol md={2}>
                                    <CDropdown className="w-100">
                                        <OutlineDropdownToggle>
                                            -- Pilih --
                                            {/* {penempatanDetail ? pilihPenempatan.find(item => item.ID_PENEMPATAN === penempatanDetail)?.NAMA_PENEMPATAN : '-- Pilih --'} */}
                                        </OutlineDropdownToggle>

                                        <CDropdownMenu>
                                            {pilihProduk.map(item => (
                                                <CDropdownItem
                                                    key={item.ID_PRODUK}
                                                    onClick={e => handleClick2(index, item.ID_PRODUK)}
                                                >
                                                    {item.NAMA_PRODUK}
                                                </CDropdownItem>
                                            ))}
                                        </CDropdownMenu>
                                    </CDropdown>
                                </CCol>
                                <CCol md={2}>
                                    <CFormInput
                                        type="text"
                                        value={acc.ipSpec}
                                        onChange={e => handleIpServer(index, e.target.value)}
                                        feedbackValid="Looks good!"
                                        id="validationCustom01"
                                    // label="IP SERVER"
                                    // required
                                    />
                                </CCol>

                                <CCol md={2}>
                                    <CDropdown className="w-100">
                                        <OutlineDropdownToggle>
                                            -- Pilih --
                                            {/* {penempatanDetail ? pilihPenempatan.find(item => item.ID_PENEMPATAN === penempatanDetail)?.NAMA_PENEMPATAN : '-- Pilih --'} */}
                                        </OutlineDropdownToggle>

                                        <CDropdownMenu>
                                            {pilihServer.map(item => (
                                                <CDropdownItem
                                                    key={item.ID_SERVER}
                                                    onClick={e => handleClick(index, item.ID_SERVER)}
                                                >
                                                    {item.NAMA_SERVER}
                                                </CDropdownItem>
                                            ))}
                                        </CDropdownMenu>
                                    </CDropdown>
                                </CCol>
                                <CCol md={2}>
                                    <CFormInput
                                        type="text"
                                        value={acc.cpuSpec}
                                        onChange={e => handleCPUServer(index, e.target.value)}
                                        feedbackValid="Looks good!"
                                        id="validationCustom01"
                                    // label="CPU"
                                    // required
                                    />
                                </CCol>
                                <CCol md={2}>
                                    <CFormInput
                                        type="text"
                                        value={acc.ramSpec}
                                        onChange={e => handleRAMServer(index, e.target.value)}
                                        feedbackValid="Looks good!"
                                        id="validationCustom01"
                                    // label="RAM"
                                    // required
                                    />
                                </CCol>
                                <CCol md={2}>
                                    <CFormInput
                                        type="text"
                                        value={acc.storageSpec}
                                        onChange={e => handleStorageServer(index, e.target.value)}
                                        feedbackValid="Looks good!"
                                        id="validationCustom01"
                                    // label="Storage"
                                    // required
                                    />
                                </CCol>
                            </div>
                        ))}

                        <CCol md={2}>
                            <CButton
                                color="primary"
                                onClick={addGridServer}
                                disabled={isDisabled3}
                            >
                                Add Row
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
                <CModal
                    scrollable
                    size="sm"
                    visible={visibleSmWebServer}
                    onClose={() => setVisibleSmWebServer(false)}
                    aria-labelledby="OptionalSizesExample2"
                >
                    <CModalHeader>
                        <CModalTitle id="ScrollingLongContentExampleLabel2">Add New Web Server</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm
                            className="row g-3 needs-validation"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <CCol md={12}>
                                <CFormInput
                                    type="text"
                                    value={NEW_NAMA_WEB_SERVER}
                                    onChange={e => setNew_Nama_Web_Server(e.target.value)}
                                    feedbackValid="Looks good!"
                                    id="validationCustom01"
                                    label="Nama Produk"
                                    required
                                />
                            </CCol>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="primary"
                            onClick={() => {
                                handleNewWebServer(NEW_NAMA_WEB_SERVER);
                            }}
                        >
                            Save changes
                        </CButton>
                    </CModalFooter>
                </CModal>
                <CModalFooter>
                    <CButton
                        color="primary"
                        onClick={() => {
                            handleNewServer();
                        }}
                        disabled={isDisabled}
                    >
                        Save changes
                    </CButton>


                </CModalFooter>
            </CModal>

        </>
    )
}

export default auth(AddServer)