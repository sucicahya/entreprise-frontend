import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classNames from 'classnames'
import { CSmartTable, CBadge, CCollapse } from '@coreui/react-pro';
import AddAccount from './AddAccount'



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
import CIcon from '@coreui/icons-react'
import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
    cilSend
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Table from './Table'

function AddServer() {
    const [selectedServers, setSelectedServers] = useState([]);
    const [produk, setProduk] = useState([]);
    // const [id_produk_detail, setIdProdukDetail] = useState([]);
    const [detail, setDetail] = useState([]);
    const [account, setAccount] = useState([]);
    const [updateFull, setUpdateFull] = useState([]);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([])
    const [visibleLg, setVisibleLg] = useState(false)
    const [visibleLg2, setVisibleLg2] = useState(false)
    const [visibleLg3, setVisibleLg3] = useState(false)
    const [visibleSmPenempatan, setVisibleSmPenempatan] = useState(false)
    const [visibleSmAkses, setVisibleSmAkses] = useState(false)
    const [visibleSmWebServer, setVisibleSmWebServer] = useState(false)
    const [visibleSmDeveloper, setVisibleSmDeveloper] = useState(false)
    const [visibleSmPIC, setVisibleSmPIC] = useState(false)
    const [visibleSmStatus, setVisibleSmStatus] = useState(false)
    const [dataa, setData] = useState([])
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    // const [nama_produk, setNamaProduk] = React.useState('')
    // const [deskripsi_produk, setDeskripsiProduk] = React.useState('')
    const [url, setURL] = React.useState('')
    const [ip, setIP] = React.useState('')
    const [penempatan, setPenempatan] = React.useState('')
    const [akses, setAkses] = React.useState('')
    const [cpu, setCPU] = React.useState('')
    const [ram, setRAM] = React.useState('')
    const [storage, setStorage] = React.useState('')
    // const [web_server, setWebServer] = React.useState('')
    const [jenis_database, setJenisDatabase] = React.useState('')
    const [framework, setFramework] = React.useState('')
    const [versi_framework, setVersiFramework] = React.useState('')
    const [waktu_operasional, setWaktuOperasional] = React.useState('')
    const [developer, setDeveloper] = React.useState('')
    const [business_owner, setBusinessOwner] = React.useState('')
    const [pic, setPIC] = React.useState('')
    const [telepon_pic, setTeleponPIC] = React.useState('')
    const [port, setPort] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [tanggal_live, setTanggalLive] = React.useState('')
    const [tanggal_deploy, setTanggalDeploy] = React.useState('')
    const [tanggal_update, setTanggalUpdate] = React.useState('')
    const [tanggal_tutup, setTanggalTutup] = React.useState('')
    const [ba_deploy, setBADeploy] = React.useState('')
    const [req_deploy, setReqDeploy] = React.useState('')
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
    // const [idProduk, setIdProduk] = useState([])

    const [NewExpAccount, setNewExpAcc] = useState([])





    const [idProduk, setIdProduk] = useState([]);
    const [namaProduk, setNamaProduk] = useState([]);
    const [deskripsiProduk, setDeskripsiProduk] = useState([]);
    const [flagProduk, setFlagProduk] = useState([]);

    const [idAkses, setIdAkses] = useState([]);
    const [namaAkses, setNamaAkses] = useState([]);

    const [idDeveloper, setIdDeveloper] = useState([]);
    const [namaDeveloper, setNamaDeveloper] = useState([]);

    const [namaKaryawan, setNamaKaryawan] = useState([]);
    const [teleponKaryawan, setTeleponKaryawan] = useState([]);
    const [nipposKaryawan, setNipposKaryawan] = useState([]);
    const [usernameKaryawan, setUsernameKaryawan] = useState([]);
    const [passKaryawan, setPassKaryawan] = useState([]);

    const [idStatus, setIdStatus] = useState([]);
    const [namaStatus, setNamaStatus] = useState([]);

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



    const [pilihPenempatan, setPilihPenempatan] = useState([])
    const [pilihKaryawan, setPilihKaryawan] = useState([])
    const [pilihAkses, setPilihAkses] = useState([])
    const [pilihDeveloper, setPilihDeveloper] = useState([])
    const [pilihStatus, setPilihStatus] = useState([])
    const [pilihServer, setPilihServer] = useState([])
    const [pilihProduk, setPilihProduk] = useState([])

    const [NEW_NAMA_PENEMPATAN, setNew_Nama_Penempatan] = useState([]);
    const [NEW_NAMA_AKSES, setNew_Nama_Akses] = useState([]);
    const [NEW_NAMA_WEB_SERVER, setNew_Nama_Web_Server] = useState([]);
    const [NEW_NAMA_DEVELOPER, setNew_Nama_Developer] = useState([]);
    const [NEW_NAMA_PIC, setNew_Nama_PIC] = useState([]);
    const [NEW_NIPPOS_PIC, setNew_Nippos_PIC] = useState([]);
    const [NEW_USERNAME_PIC, setNew_Username_PIC] = useState([]);
    const [NEW_PASS_PIC, setNew_Pass_PIC] = useState([]);
    const [NEW_TELEPON_PIC, setNew_Telepon_PIC] = useState([]);
    const [NEW_NAMA_STATUS, setNew_Nama_Status] = useState([]);

    const [accounts, setAccounts] = useState([])
    const [servers, setServers] = useState([])
    const [products, setProducts] = useState([])
    const [clickedServers, setClickedServers] = useState([]);

    useEffect(() => {
        // Initialize with three default milestones
        if (servers.length === 0) {
            setServers([
                // { description: '', progress: '' },
                // { description: '', progress: '' },
                // { description: '', progress: '' }
                { ip_server: '', web_server: '', cpu: '', ram: '', storage: '', produk_server: '' }
            ]);
        }
    }, [servers]);

    const handleNewAccount = async (index) => {
        console.log(index, "NEW_NAMA_PIC")
        try {
            // setVisibleLg(!visibleLg)
            setVisibleLg3(true)

        } catch (err) {
        }
    };

    const handleAdd = () => {
        console.log('Add new item');
        try {
            setVisibleLg(!visibleLg)
            // const response = await axios.post('http://localhost:5000/full-detail', { id });
            // setDetail(response.data);
            // setIdProduk(response.data.map(item => item.ID_PRODUK))
            // setNamaProduk(response.data.map(item => item.NAMA_PRODUK));
            // setDeskripsiProduk(response.data.map(item => item.DESKRIPSI_PRODUK));
            // setFlagProduk(response.data.map(item => item.FLAG_STATUS));

            // setIdAkses(response.data.map(item => item.ID_AKSES));
            // setNamaAkses(response.data.map(item => item.NAMA_AKSES));

            // setIdDeveloper(response.data.map(item => item.ID_DEVELOPER));
            // setNamaDeveloper(response.data.map(item => item.NAMA_DEVELOPER));

            // setNamaKaryawan(response.data.map(item => item.NAMA));
            // setTeleponKaryawan(response.data.map(item => item.TELEPON));
            // setNipposKaryawan(response.data.map(item => item.NIPPOS));
            // setUsernameKaryawan(response.data.map(item => item.USERNAME));
            // setPassKaryawan(response.data.map(item => item.PASS));

            // setIdStatus(response.data.map(item => item.ID_STATUS));
            // setNamaStatus(response.data.map(item => item.NAMA_STATUS));

            // setIdProdukDetail(response.data.map(item => item.ID_PRODUK_DETAIL));
            // setProdukIdDetail(response.data.map(item => item.PRODUK_ID));
            // setPenempatanDetail(response.data.map(item => item.PENEMPATAN));
            // setPICNipposDetail(response.data.map(item => item.PIC_NIPPOS));
            // setAksesDetail(response.data.map(item => item.AKSES));
            // setDeveloperDetail(response.data.map(item => item.DEVELOPER));
            // setServerDetail(response.data.map(item => item.SERVER));
            // setBusinessOwnerDetail(response.data.map(item => item.BUSINESS_OWNER));
            // setWaktuOperasionalDetail(response.data.map(item => item.WAKTU_OPERASIONAL));
            // setURLDetail(response.data.map(item => item.URL));
            // setPortDetail(response.data.map(item => item.PORT));
            // setFrameworkDetail(response.data.map(item => item.FRAMEWORK));
            // setVerFrameworkDetail(response.data.map(item => item.VER_FRAMEWORK));
            // setJenisDatabaseDetail(response.data.map(item => item.JENIS_DATABASE));
            // setTanggalLiveDetail(response.data.map(item => item.TANGGAL_LIVE));
            // setTanggalAkhirUpdateDetail(response.data.map(item => item.TANGGAL_AKHIR_UPDATE));
            // setTanggalTutupDetail(response.data.map(item => item.TANGGAL_TUTUP));
            // setTanggalDeployDetail(response.data.map(item => item.TANGGAL_DEPLOY));

            // setIPSpec(response.data.map(item => item.IP_SERVER));
            // setCPUSpec(response.data.map(item => item.CPU));
            // setRAMSpec(response.data.map(item => item.RAM));
            // setStorageSpec(response.data.map(item => item.STORAGE));
            // setIdSpec(response.data.map(item => item.ID_SPEC_SERVER));
            // setWebIdSpec(response.data.map(item => item.WEB_SERVER_ID));

            // setIdServer(response.data.map(item => item.ID_WEB_SERVER));
            // setWebServer(response.data.map(item => item.NAMA_WEB_SERVER));
            // console.log("dataaaa", response.data)
            // setError(null);
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    console.log(tanggalLiveDetail, 'tanggallive')

    const formatDate = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
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

    const [account2, setAccount2] = React.useState(
        searchResults.account || []
    )

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
    console.log("Clickedd Servers Array:", servers);

    const handleClick = (index, id) => {
        console.log("idclick", id)
        const updatedServer = [...servers];
        updatedServer[index].web_server = id;
        console.log("Clicked Servers Array:", updatedServer);
        setServers(updatedServer);
        setServerDetail(updatedServer.map(acc => (acc.web_server)));
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

    console.log("aaservip", ipSpec)
    console.log("aaservcpu", cpuSpec)
    console.log("aaservram", ramSpec)
    console.log("aaservstrg", storageSpec)


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

    const handleUpdateDetail = async (ID_PRODUK) => {
        console.log(ID_PRODUK, "iddx")
        try {
            setVisibleLg(!visibleLg)
            const requestBody = {
                ID_PRODUK,
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
                ID_SPEC_SERVER: idSpec,
                WEB_SERVER_ID: webIdSpec,

                ID_WEB_SERVER: idServer,
                NAMA_WEB_SERVER: webServer,

                // BA_DEPLOY: ba_deploy,
                // REQ_DEPLOY: req_deploy,
                ID_ACCOUNT: idAccount,
                JENIS_AKUN: jenisAccount,
                USERNAME: usernameAccount,
                PASS: passAccount,
                EXP_DATE_PASSWORD: expAccount,
                LENGTH_ACCOUNT: lengthIdAccount
            };
            console.log("Request body:", JSON.stringify(requestBody, null, 2));

            const response = await axios.post('http://localhost:5000/detail/update-all', requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setUpdateFull(response.data);
            // setAccount2(response.data);
            console.log("update full:", response.data);
            // window.location.reload();

            // setIdAccount(response.data.map(item => item.ID_ACCOUNT));
            // setJenisAccount(response.data.map(item => item.JENIS_AKUN));
            // setUsernameAccount(response.data.map(item => item.USERNAME));
            // setPassAccount(response.data.map(item => item.PASS));
            // setExpAccount(response.data.map(item => item.EXP_DATE_PASSWORD));
            // console.log("dataaaa", response.data)
            // setError(null);
        } catch (err) {
            // setError('Error fetching details');
            setUpdateFull(null);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleButtonClick = () => {
        // Add your custom logic here
        alert(`Selected `);
    };

    const handleButtonNewPenempatan = () => {
        // alert(`Selected Penempatan`);

        try {
            setVisibleSmPenempatan(!visibleSmPenempatan)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const handleButtonNewAkses = () => {
        // alert(`Selected Akses`);

        try {
            setVisibleSmAkses(!visibleSmAkses)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const handleButtonNewWebServer = () => {
        // alert(`Selected WebServer`);

        try {
            setVisibleSmWebServer(!visibleSmWebServer)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const handleButtonNewDeveloper = () => {
        // alert(`Selected Developer`);

        try {
            setVisibleSmDeveloper(!visibleSmDeveloper)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const handleButtonNewPIC = () => {
        // alert(`Selected PIC`);

        try {
            setVisibleSmPIC(!visibleSmPIC)
        } catch (err) {
            // setError('Error fetching details');
            // setDetail(null);
        }
    };

    const handleButtonNewStatus = () => {
        // alert(`Selected Status`);

        try {
            setVisibleSmStatus(!visibleSmStatus)
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

    const handleNewPenempatan = async (NEW_NAMA_PENEMPATAN) => {
        console.log(NEW_NAMA_PENEMPATAN, "NEW_NAMA_PENEMPATAN")
        try {
            setVisibleSmPenempatan(!visibleSmPenempatan)
            const response = await axios.post('http://localhost:5000/add/new-penempatan', { NEW_NAMA_PENEMPATAN });
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

    const handleNewAkses = async (NEW_NAMA_AKSES) => {
        console.log(NEW_NAMA_AKSES, "NEW_NAMA_AKSES")
        try {
            setVisibleSmAkses(!visibleSmAkses)
            const response = await axios.post('http://localhost:5000/add/new-akses', { NEW_NAMA_AKSES });
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

    const handleNewDeveloper = async (NEW_NAMA_DEVELOPER) => {
        console.log(NEW_NAMA_DEVELOPER, "NEW_NAMA_DEVELOPER")
        try {
            setVisibleSmDeveloper(!visibleSmDeveloper)
            const response = await axios.post('http://localhost:5000/add/new-developer', { NEW_NAMA_DEVELOPER });
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

    const handleNewPIC = async () => {
        console.log(NEW_NAMA_PIC, "NEW_NAMA_PIC")
        try {

            setVisibleSmPIC(!visibleSmPIC)
            const requestBody = {
                NEW_NIPPOS_PIC: NEW_NIPPOS_PIC,
                NEW_NAMA_PIC: NEW_NAMA_PIC,
                NEW_USERNAME_PIC: NEW_USERNAME_PIC,
                NEW_PASS_PIC: NEW_PASS_PIC,
                NEW_TELEPON_PIC: NEW_TELEPON_PIC
            }

            const response = await axios.post('http://localhost:5000/add/new-pic', requestBody, {
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

    const handleNewStatus = async (NEW_NAMA_STATUS) => {
        console.log(NEW_NAMA_STATUS, "NEW_NAMA_STATUS")
        try {
            setVisibleSmStatus(!visibleSmStatus)
            const response = await axios.post('http://localhost:5000/add/new-status', { NEW_NAMA_STATUS });
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
                SERVER: serverDetail,
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
                <CButton color="primary" onClick={() => { handleNewServer() }}>Add New Server</CButton>
            </div>

            {/* <CButton
                color="primary"
                onClick={() => {
                    handleNewProduk();
                }}
            >
                Save changes and Go to next page
            </CButton> */}
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
                                <span>IP Server</span>
                            </CCol>
                            <CCol md={2}>
                                <span>Web Server</span>
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
                            <CCol md={2}>
                                <span>Produk</span>
                            </CCol>
                        </CRow>
                        {servers.map((acc, index) => (
                            <div style={{ display: 'flex', marginBottom: '10px' }}>
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
                                    {/* <CFormSelect
                                type="text"
                                defaultValue={item.WEB_SERVER_ID}
                                onChange={e => setWebIdSpec(e.target.value)}
                                feedbackValid="Looks good!"
                                id="validationCustom01"
                                label="Web Server"
                                required
                            >
                                <option value="">-- Pilih --</option>
                                {pilihServer.map(item => (
                                    <option key={item.ID_WEB_SERVER} value={item.ID_WEB_SERVER}>
                                        {item.NAMA_WEB_SERVER}
                                    </option>
                                ))}
                            </CFormSelect> */}

                                    {/* <span>Web Server</span> */}

                                    <CDropdown className="w-100">
                                        <OutlineDropdownToggle>
                                            -- Pilih --
                                            {/* {penempatanDetail ? pilihPenempatan.find(item => item.ID_PENEMPATAN === penempatanDetail)?.NAMA_PENEMPATAN : '-- Pilih --'} */}
                                        </OutlineDropdownToggle>

                                        <CDropdownMenu>
                                            {pilihServer.map(item => (
                                                <CDropdownItem
                                                    key={item.ID_WEB_SERVER}
                                                    onClick={e => handleClick(index, item.ID_WEB_SERVER)}
                                                >
                                                    {item.NAMA_WEB_SERVER}
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
                                <CCol md={2}>
                                    {/* <CFormSelect
                                type="text"
                                defaultValue={item.WEB_SERVER_ID}
                                onChange={e => setWebIdSpec(e.target.value)}
                                feedbackValid="Looks good!"
                                id="validationCustom01"
                                label="Web Server"
                                required
                            >
                                <option value="">-- Pilih --</option>
                                {pilihServer.map(item => (
                                    <option key={item.ID_WEB_SERVER} value={item.ID_WEB_SERVER}>
                                        {item.NAMA_WEB_SERVER}
                                    </option>
                                ))}
                            </CFormSelect> */}

                                    {/* <span>Web Server</span> */}

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
                        Save changes and Go to next page
                    </CButton>


                </CModalFooter>
            </CModal>

        </>
    )
}

export default AddServer