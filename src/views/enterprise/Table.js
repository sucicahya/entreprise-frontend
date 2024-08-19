import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classNames from 'classnames'
import { CSmartTable, CBadge, CCollapse } from '@coreui/react-pro';



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
  CFormFeedback
} from '@coreui/react'
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

function Dashboard() {
  const [produk, setProduk] = useState([]);
  // const [id_produk_detail, setIdProdukDetail] = useState([]);
  const [detail, setDetail] = useState([]);
  const [account, setAccount] = useState([]);
  const [updateFull, setUpdateFull] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [visibleLg, setVisibleLg] = useState(false)
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


  const handleAdd = () => {
    // Logika untuk menambahkan item
    console.log('Add new item');
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


  const formattedTanggalLive = formatDate(tanggalLiveDetail);
  const formattedTanggalUpdate = formatDate(tanggalAkhirUpdateDetail);
  const formattedTanggalDeploy = formatDate(tanggalDeployDetail);
  const formattedTanggalTutup = formatDate(tanggalTutupDetail);


  const formattedTanggalExp = formatDate(expAccount);

  // console.log(formattedDates, 'expp')

  useEffect(() => {
    axios.get('http://localhost:5000/pilih-penempatan')
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
    axios.get('http://localhost:5000/pilih-karyawan')
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
    axios.get('http://localhost:5000/pilih-akses')
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
    axios.get('http://localhost:5000/pilih-developer')
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
    axios.get('http://localhost:5000/pilih-status')
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

  useEffect(() => {
    axios.get('http://localhost:5000/pilih-server')
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

  console.log("idacc", idAccount)
  // console.log("namaproduk", nama_produk)


  const [account2, setAccount2] = React.useState(
    searchResults.account || []
  )


  const handleJenisAccount = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedAccount = [...account2];
    updatedAccount[index].JENIS_AKUN = value;
    setAccount2(updatedAccount);
    setJenisAccount(updatedAccount.map(acc => (acc.JENIS_AKUN)));
  };

  const handleUsernameAccount = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedAccount = [...account2];
    updatedAccount[index].USERNAME = value;
    setAccount2(updatedAccount);
    setUsernameAccount(updatedAccount.map(acc => (acc.USERNAME)));
  };

  const handlePassAccount = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedAccount = [...account2];
    updatedAccount[index].PASS = value;
    setAccount2(updatedAccount);
    setPassAccount(updatedAccount.map(acc => (acc.PASS)));
  };

  const handleExpAccount = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedAccount = [...account2];
    updatedAccount[index].EXP_DATE_PASSWORD = value;
    setAccount2(updatedAccount);
    setExpAccount(updatedAccount.map(acc => (acc.EXP_DATE_PASSWORD)));
  };

  console.log("DETAIL", detail)
  console.log("ACCOUNT", account)

  console.log("YUK BISMILLAH", account2)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/main-table')
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

  // useEffect(() => {
  //   axios.get('http://localhost:5000/full-detail')
  //     .then(response => {
  //       // console.log('Data received:', response.data); // Cek data yang diterima
  //       if (Array.isArray(response.data)) {
  //         setDetail(response.data);
  //       } else {
  //         console.error('Data format is not an array:', response.data);
  //       }
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);

  const handleFetchDetails = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg(!visibleLg)
      const response = await axios.post('http://localhost:5000/full-detail', { id });
      setDetail(response.data);
      setIdProduk(response.data.map(item => item.ID_PRODUK))
      setNamaProduk(response.data.map(item => item.NAMA_PRODUK));
      setDeskripsiProduk(response.data.map(item => item.DESKRIPSI_PRODUK));
      setFlagProduk(response.data.map(item => item.FLAG_STATUS));

      setIdAkses(response.data.map(item => item.ID_AKSES));
      setNamaAkses(response.data.map(item => item.NAMA_AKSES));

      setIdDeveloper(response.data.map(item => item.ID_DEVELOPER));
      setNamaDeveloper(response.data.map(item => item.NAMA_DEVELOPER));

      setNamaKaryawan(response.data.map(item => item.NAMA));
      setTeleponKaryawan(response.data.map(item => item.TELEPON));
      setNipposKaryawan(response.data.map(item => item.NIPPOS));
      setUsernameKaryawan(response.data.map(item => item.USERNAME));
      setPassKaryawan(response.data.map(item => item.PASS));

      setIdStatus(response.data.map(item => item.ID_STATUS));
      setNamaStatus(response.data.map(item => item.NAMA_STATUS));

      setIdProdukDetail(response.data.map(item => item.ID_PRODUK_DETAIL));
      setProdukIdDetail(response.data.map(item => item.PRODUK_ID));
      setPenempatanDetail(response.data.map(item => item.PENEMPATAN));
      setPICNipposDetail(response.data.map(item => item.PIC_NIPPOS));
      setAksesDetail(response.data.map(item => item.AKSES));
      setDeveloperDetail(response.data.map(item => item.DEVELOPER));
      setServerDetail(response.data.map(item => item.SERVER));
      setBusinessOwnerDetail(response.data.map(item => item.BUSINESS_OWNER));
      setWaktuOperasionalDetail(response.data.map(item => item.WAKTU_OPERASIONAL));
      setURLDetail(response.data.map(item => item.URL));
      setPortDetail(response.data.map(item => item.PORT));
      setFrameworkDetail(response.data.map(item => item.FRAMEWORK));
      setVerFrameworkDetail(response.data.map(item => item.VER_FRAMEWORK));
      setJenisDatabaseDetail(response.data.map(item => item.JENIS_DATABASE));
      setTanggalLiveDetail(response.data.map(item => item.TANGGAL_LIVE));
      setTanggalAkhirUpdateDetail(response.data.map(item => item.TANGGAL_AKHIR_UPDATE));
      setTanggalTutupDetail(response.data.map(item => item.TANGGAL_TUTUP));
      setTanggalDeployDetail(response.data.map(item => item.TANGGAL_DEPLOY));

      setIPSpec(response.data.map(item => item.IP_SERVER));
      setCPUSpec(response.data.map(item => item.CPU));
      setRAMSpec(response.data.map(item => item.RAM));
      setStorageSpec(response.data.map(item => item.STORAGE));
      setIdSpec(response.data.map(item => item.ID_SPEC_SERVER));
      setWebIdSpec(response.data.map(item => item.WEB_SERVER_ID));

      setIdServer(response.data.map(item => item.ID_WEB_SERVER));
      setWebServer(response.data.map(item => item.NAMA_WEB_SERVER));
      console.log("dataaaa", response.data)
      // setError(null);
    } catch (err) {
      // setError('Error fetching details');
      setDetail(null);
    }
  };

  const handleFetchAccount = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg(!visibleLg)
      const response = await axios.post('http://localhost:5000/full-account', { id });
      setAccount(response.data);
      setAccount2(response.data);
      console.log("Account2 data:", response.data);

      setIdAccount(response.data.map(item => item.ID_ACCOUNT));
      setJenisAccount(response.data.map(item => item.JENIS_AKUN));
      setUsernameAccount(response.data.map(item => item.USERNAME));
      setPassAccount(response.data.map(item => item.PASS));
      setExpAccount(response.data.map(item => item.EXP_DATE_PASSWORD));
      setLengthIdAccount(response.data.map(item => item.ID_ACCOUNT).length);
      console.log("dataaaa", response.data)
      // setError(null);
    } catch (err) {
      // setError('Error fetching details');
      setAccount(null);
    }
  };

  const handleUpdateDetail = async (ID_PRODUK) => {
    console.log(ID_PRODUK, "iddx")
    try {
      setVisibleLg(!visibleLg)
      const requestBody = {
        ID_PRODUK,
        NAMA_PRODUK: namaProduk,
        DESKRIPSI_PRODUK: deskripsiProduk,
        FLAG_STATUS: flagProduk,

        ID_AKSES: idAkses,
        NAMA_AKSES: namaAkses,

        ID_DEVELOPER: idDeveloper,
        NAMA_DEVELOPER: namaDeveloper,

        NAMA: namaKaryawan,
        TELEPON: teleponKaryawan,
        NIPPOS: nipposKaryawan,
        // USERNAME: usernameKaryawan,
        // PASS: passKaryawan,

        ID_STATUS: idStatus,
        NAMA_STATUS: namaStatus,

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

      const response = await axios.post('http://localhost:5000/update-all', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUpdateFull(response.data);
      // setAccount2(response.data);
      console.log("update full:", response.data);
      window.location.reload();

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

  // const handleUpdateDetail2 = async (id) => {
  //   // Fetch the token from sessionStorage
  //   const item = sessionStorage.getItem('token');

  //   // Create the body data object
  //   const bodyData = {
  //     NAMA_PRODUK: nama_produk,
  //     DESKRIPSI_PRODUK: deskripsi_produk,
  //     URL: url,
  //     IP_SERVER: ip,
  //     NAMA_PENEMPATAN: penempatan,
  //     NAMA_AKSES: akses,
  //     CPU: cpu,
  //     RAM: ram,
  //     STORAGE: storage,
  //     NAMA_WEB_SERVER: web_server,
  //     JENIS_DATABASE: jenis_database,
  //     FRAMEWORK: framework,
  //     VER_FRAMEWORK: versi_framework,
  //     WAKTU_OPERASIONAL: waktu_operasional,
  //     NAMA_DEVELOPER: developer,
  //     BUSINESS_OWNER: business_owner,
  //     PIC: pic,
  //     TELEPON: telepon_pic,
  //     PORT: port,
  //     TANGGAL_LIVE: tanggal_live,
  //     TANGGAL_DEPLOY: tanggal_deploy,
  //     TANGGAL_AKHIR_UPDATE: tanggal_update,
  //     TANGGAL_TUTUP: tanggal_tutup,
  //     // BA_DEPLOY: ba_deploy,
  //     // REQ_DEPLOY: req_deploy,
  //     ID_ACCOUNT: idAccount,
  //     JENIS_AKUN: jenisAccount,
  //     USERNAME: usernameAccount,
  //     PASS: passAccount,
  //     EXP_DATE_PASSWORD: expAccount
  //   };

  //   // Log the body data
  //   console.log("Request body:", JSON.stringify(bodyData, null, 2));

  //   try {
  //     const response = await fetch(
  //       '',
  //       {
  //         method: 'POST',
  //         headers: {
  //           Authorization: 'Bearer ' + item,
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(bodyData) // Send the JSON string as the body
  //       }
  //     );

  //     if (response.ok) {
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "<span style='font-size: 20px'>Successfully edited Result</span>",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         width: 500,
  //         height: 500,
  //         heightAuto: false,
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error during update:', error);
  //   }
  // };


  // const handleUpdateDetail = async (id) => {
  //   console.log(id, "idddetail")
  // try {
  //   setVisible(!visible)
  //   const response = await axios.post('http://localhost:5000/full-detail', { id });
  //   setDetail(response.data);
  //   console.log("dataaaa", response.data)
  //   // setError(null);
  // } catch (err) {
  //   // setError('Error fetching details');
  //   setDetail(null);
  // }
  // };

  const handleUpdateAccount = async (id) => {
    console.log(id, "iddaccount")
    // try {
    //   setVisible(!visible)
    //   const response = await axios.post('http://localhost:5000/full-detail', { id });
    //   setDetail(response.data);
    //   console.log("dataaaa", response.data)
    //   // setError(null);
    // } catch (err) {
    //   // setError('Error fetching details');
    //   setDetail(null);
    // }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const columns = [
    { key: 'ID_PRODUK', label: 'ID Produk' },
    { key: 'NAMA_PRODUK', label: 'Nama Produk' },
    { key: 'URL', label: 'URL' },
    { key: 'IP', label: 'IP Server' },
    { key: 'PIC', label: 'PIC' },
    { key: 'STATUS', label: 'Status' },
    { key: 'show_details', label: 'Details' },
    // { key: 'details', label: 'More Details' },
  ];

  const data = produk.map(item => ({
    ID_PRODUK: item.ID_PRODUK,
    NAMA_PRODUK: item.NAMA_PRODUK,
    URL: item.URL,
    IP: item.IP_SERVER,
    PIC: item.NAMA,
    STATUS: item.NAMA_STATUS,
    show_details: item,
    details: item
  }));



  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]

  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, STATUS: 'success' },
  //     user: {
  //       NAMA_PRODUK: 'Yiorgos Avraamu',
  //       new: true,
  //       IP: 'Jan 1, 2023',
  //     },
  //     country: { NAMA_PRODUK: 'USA', flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'success',
  //     },
  //     payment: { NAMA_PRODUK: 'Mastercard', icon: cibCcMastercard },
  //     activity: '10 sec ago',
  //   },
  //   {
  //     avatar: { src: avatar2, STATUS: 'danger' },
  //     user: {
  //       NAMA_PRODUK: 'Avram Tarasios',
  //       new: false,
  //       IP: 'Jan 1, 2023',
  //     },
  //     country: { NAMA_PRODUK: 'Brazil', flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'info',
  //     },
  //     payment: { NAMA_PRODUK: 'Visa', icon: cibCcVisa },
  //     activity: '5 minutes ago',
  //   },
  //   {
  //     avatar: { src: avatar3, STATUS: 'warning' },
  //     user: { NAMA_PRODUK: 'Quintin Ed', new: true, IP: 'Jan 1, 2023' },
  //     country: { NAMA_PRODUK: 'India', flag: cifIn },
  //     usage: {
  //       value: 74,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'warning',
  //     },
  //     payment: { NAMA_PRODUK: 'Stripe', icon: cibCcStripe },
  //     activity: '1 hour ago',
  //   },
  //   {
  //     avatar: { src: avatar4, STATUS: 'secondary' },
  //     user: { NAMA_PRODUK: 'Enéas Kwadwo', new: true, IP: 'Jan 1, 2023' },
  //     country: { NAMA_PRODUK: 'France', flag: cifFr },
  //     usage: {
  //       value: 98,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'danger',
  //     },
  //     payment: { NAMA_PRODUK: 'PayPal', icon: cibCcPaypal },
  //     activity: 'Last month',
  //   },
  //   {
  //     avatar: { src: avatar5, STATUS: 'success' },
  //     user: {
  //       NAMA_PRODUK: 'Agapetus Tadeáš',
  //       new: true,
  //       IP: 'Jan 1, 2023',
  //     },
  //     country: { NAMA_PRODUK: 'Spain', flag: cifEs },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'primary',
  //     },
  //     payment: { NAMA_PRODUK: 'Google Wallet', icon: cibCcApplePay },
  //     activity: 'Last week',
  //   },
  //   {
  //     avatar: { src: avatar6, STATUS: 'danger' },
  //     user: {
  //       NAMA_PRODUK: 'Friderik Dávid',
  //       new: true,
  //       IP: 'Jan 1, 2023',
  //     },
  //     country: { NAMA_PRODUK: 'Poland', flag: cifPl },
  //     usage: {
  //       value: 43,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'success',
  //     },
  //     payment: { NAMA_PRODUK: 'Amex', icon: cibCcAmex },
  //     activity: 'Last week',
  //   },
  // ]


  // const columns = [
  // {
  //   key: 'avatar',
  //   label: '',
  //   filter: false,
  //   sorter: false,
  // },
  //   {
  //     key: 'NAMA_PRODUK',
  //     _style: { width: '20%' },
  //   },
  //   'IP',
  //   {
  //     key: 'PIC',
  //     _style: { width: '20%' }
  //   },
  //   {
  //     key: 'STATUS',
  //     _style: { width: '20%' }
  //   },
  //   {
  //     key: 'show_details',
  //     label: '',
  //     _style: { width: '1%' },
  //     filter: false,
  //     sorter: false,
  //   },
  // ]
  // const usersData = [
  //   {
  //     id: 1,
  //     NAMA_PRODUK: 'Samppa Nori',
  //     avatar: '1.jpg',
  //     IP: '2022/01/01',
  //     PIC: 'Member',
  //     STATUS: 'Active',
  //   },
  //   {
  //     id: 2,
  //     NAMA_PRODUK: 'EXPLORA',
  //     avatar: '2.jpg',
  //     IP: '10.27.0.248',
  //     PIC: '997492363',
  //     STATUS: 'Active',
  //   },
  //   {
  //     id: 3,
  //     NAMA_PRODUK: 'Chetan Mohamed',
  //     avatar: '3.jpg',
  //     IP: '2022/02/07',
  //     PIC: 'Admin',
  //     STATUS: 'Inactive',
  //     _selected: true,
  //   },
  //   {
  //     id: 4,
  //     NAMA_PRODUK: 'Derick Maximinus',
  //     avatar: '4.jpg',
  //     IP: '2022/03/19',
  //     PIC: 'Member',
  //     STATUS: 'Pending',
  //   },
  //   {
  //     id: 5,
  //     NAMA_PRODUK: 'Friderik Dávid',
  //     avatar: '5.jpg',
  //     IP: '2022/01/21',
  //     PIC: 'Staff',
  //     STATUS: 'Active'
  //   },
  //   {
  //     id: 6,
  //     NAMA_PRODUK: 'Yiorgos Avraamu',
  //     avatar: '6.jpg',
  //     IP: '2022/01/01',
  //     PIC: 'Member',
  //     STATUS: 'Active'
  //   },
  //   {
  //     id: 7,
  //     NAMA_PRODUK: 'Avram Tarasios',
  //     avatar: '7.jpg',
  //     IP: '2022/02/07',
  //     PIC: 'Staff',
  //     STATUS: 'Banned',
  //     _selected: true,
  //   },
  //   {
  //     id: 8,
  //     NAMA_PRODUK: 'Quintin Ed',
  //     avatar: '8.jpg',
  //     IP: '2022/02/07',
  //     PIC: 'Admin',
  //     STATUS: 'Inactive'
  //   },
  //   {
  //     id: 9,
  //     NAMA_PRODUK: 'Enéas Kwadwo',
  //     avatar: '9.jpg',
  //     IP: '2022/03/19',
  //     PIC: 'Member',
  //     STATUS: 'Pending'
  //   },
  //   {
  //     id: 10,
  //     NAMA_PRODUK: 'Agapetus Tadeáš',
  //     avatar: '10.jpg',
  //     IP: '2022/01/21',
  //     PIC: 'Staff',
  //     STATUS: 'Active'
  //   },
  //   {
  //     id: 11,
  //     NAMA_PRODUK: 'Carwyn Fachtna',
  //     avatar: '11.jpg',
  //     IP: '2022/01/01',
  //     PIC: 'Member',
  //     STATUS: 'Active'
  //   },
  //   {
  //     id: 12,
  //     NAMA_PRODUK: 'Nehemiah Tatius',
  //     avatar: '12.jpg',
  //     IP: '2022/02/07',
  //     PIC: 'Staff',
  //     STATUS: 'Banned',
  //     _selected: true,
  //   },
  //   {
  //     id: 13,
  //     NAMA_PRODUK: 'Ebbe Gemariah',
  //     avatar: '13.jpg',
  //     IP: '2022/02/07',
  //     PIC: 'Admin',
  //     STATUS: 'Inactive'
  //   },
  //   {
  //     id: 14,
  //     NAMA_PRODUK: 'Eustorgios Amulius',
  //     avatar: '14.jpg',
  //     IP: '2022/03/19',
  //     PIC: 'Member',
  //     STATUS: 'Pending',
  //   },
  //   {
  //     id: 15,
  //     NAMA_PRODUK: 'IHSAN',
  //     avatar: '15.jpg',
  //     IP: '10.27.0.249',
  //     PIC: '901494306',
  //     STATUS: 'Active'
  //   },
  // ]
  const getBadge = (STATUS) => {
    switch (STATUS) {
      case 'Aktif':
        return 'success'
      case 'Non-Aktif':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <>
      <CModal
        scrollable
        size="lg"
        visible={visibleLg}
        onClose={() => setVisibleLg(false)}
        aria-labelledby="OptionalSizesExample2"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">Details Produk</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {detail.map(item => (
              <React.Fragment>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA_PRODUK}
                    onChange={e => setNamaProduk(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Nama Produk"
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.DESKRIPSI_PRODUK}
                    onChange={e => setDeskripsiProduk(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Deskripsi Produk"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.URL}
                    onChange={e => setURLDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="URL"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.IP_SERVER}
                    onChange={e => setIPSpec(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="IP SERVER"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.PORT}
                    onChange={e => setPortDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Port"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.PENEMPATAN}
                    onChange={e => setPenempatanDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Penempatan"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihPenempatan.map(item => (
                      <option key={item.ID_PENEMPATAN} value={item.ID_PENEMPATAN}>
                        {item.NAMA_PENEMPATAN}
                      </option>
                    ))}
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.AKSES}
                    onChange={e => setAksesDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Akses"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihAkses.map(item => (
                      <option key={item.ID_AKSES} value={item.ID_AKSES}>
                        {item.NAMA_AKSES}
                      </option>
                    ))}
                  </CFormSelect>
                  {/* <CFormInput
                    type="text"
                    defaultValue={item.NAMA_AKSES}
                    onChange={e => setAkses(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Akses"
                    required
                  /> */}
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.WAKTU_OPERASIONAL}
                    onChange={e => setWaktuOperasionalDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Waktu Operasional"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.CPU}
                    onChange={e => setCPUSpec(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="CPU"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.RAM}
                    onChange={e => setRAMSpec(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="RAM"
                  // required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.STORAGE}
                    onChange={e => setStorageSpec(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Storage"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.WEB_SERVER_ID}
                    onChange={e => setWebIdSpec(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Web Server"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihServer.map(item => (
                      <option key={item.ID_WEB_SERVER} value={item.ID_WEB_SERVER}>
                        {item.NAMA_WEB_SERVER}
                      </option>
                    ))}
                  </CFormSelect>
                  {/* <CFormInput
                    type="text"
                    defaultValue={item.NAMA_WEB_SERVER}
                    onChange={e => setWebServer(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Web Server"
                    required
                  /> */}
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.JENIS_DATABASE}
                    onChange={e => setJenisDatabaseDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Jenis Database"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.FRAMEWORK}
                    onChange={e => setFrameworkDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Framework"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.VER_FRAMEWORK}
                    onChange={e => setVerFrameworkDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Version Framework"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.DEVELOPER}
                    onChange={e => setDeveloperDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Developer"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihDeveloper.map(item => (
                      <option key={item.ID_DEVELOPER} value={item.ID_DEVELOPER}>
                        {item.NAMA_DEVELOPER}
                      </option>
                    ))}
                  </CFormSelect>
                  {/* <CFormInput
                    type="text"
                    defaultValue={item.NAMA_DEVELOPER}
                    onChange={e => setDeveloper(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Developer"
                    required
                  /> */}
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.BUSINESS_OWNER}
                    onChange={e => setBusinessOwnerDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Business Owner"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.PIC_NIPPOS}
                    onChange={e => setPICNipposDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="PIC"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihKaryawan.map(item => (
                      <option key={item.NIPPOS} value={item.NIPPOS}>
                        {item.NAMA}
                      </option>
                    ))}
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TELEPON}
                    onChange={e => setTeleponKaryawan(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Kontak PIC"
                    readOnly
                  // required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormSelect
                    type="text"
                    defaultValue={item.FLAG_STATUS}
                    onChange={e => setFlagProduk(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Status"
                  // required
                  >
                    <option value="">-- Pilih --</option> {/* Opsi default -- Pilih -- */}
                    {pilihStatus.map(item => (
                      <option key={item.ID_STATUS} value={item.ID_STATUS}>
                        {item.NAMA_STATUS}
                      </option>
                    ))}
                  </CFormSelect>
                  {/* <CFormInput
                    type="text"
                    defaultValue={item.NAMA_STATUS}
                    onChange={e => setStatus(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Status"
                    required
                  /> */}
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    defaultValue={formattedTanggalLive}
                    onChange={e => setTanggalLiveDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Live"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    defaultValue={formattedTanggalDeploy}
                    onChange={e => setTanggalDeployDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Deploy"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    defaultValue={formattedTanggalUpdate}
                    onChange={e => setTanggalAkhirUpdateDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Update"
                  // required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    defaultValue={formattedTanggalTutup}
                    onChange={e => setTanggalTutupDetail(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Tutup"
                  // required
                  />
                </CCol>
                {/* <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.BA_DEPLOY}
                    onChange={e => setBADeploy(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="BA Deploy"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.REQ_DEPLOY}
                    onChange={e => setReqDeploy(e.target.value)}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Req Deploy"
                    required
                  />
                </CCol> */}
              </React.Fragment>
            ))}

            {/* <CCol md={1}>
              <span>Nomor</span>
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
          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </p> */}
        </CModalBody>
        <CModalFooter>
          {/* <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton> */}
          {detail.map(item => {
            return (
              <React.Fragment key={item.ID_PRODUK}>
                <CButton
                  color="primary"
                  onClick={() => {
                    handleUpdateDetail(item.ID_PRODUK);
                  }}
                >
                  Save changes
                </CButton>
              </React.Fragment>
            );
          })}
        </CModalFooter>
      </CModal>
      <CSmartTable
        activePage={2}
        cleaner
        clickableRows
        columns={[
          { key: 'ID_PRODUK', label: 'ID Produk' },
          { key: 'NAMA_PRODUK', label: 'Nama Produk' },
          { key: 'URL', label: 'URL' },
          { key: 'IP', label: 'IP Server' },
          { key: 'PIC', label: 'PIC' },
          { key: 'STATUS', label: 'Status' },
          { key: 'show_details', label: 'Details' },
          // { key: 'details', label: 'More Details' },
        ]}
        // columnFilter
        columnSorter
        footer
        items={produk.map(item => ({
          ID_PRODUK: item.ID_PRODUK,
          NAMA_PRODUK: item.NAMA_PRODUK,
          URL: item.URL,
          IP: item.IP_SERVER,
          PIC: item.NAMA,
          STATUS: item.NAMA_STATUS,
          show_details: item,
          details: item
        }))}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        onFilteredItemsChange={(items) => {
          console.log(items)
        }}
        onSelectedItemsChange={(items) => {
          console.log(items)
        }}
        scopedColumns={{
          avatar: (item) => (
            <td>
              <CAvatar src={`/images/avatars/${item.avatar}`} />
            </td>
          ),
          STATUS: (item) => (
            <td>
              <CBadge color={getBadge(item.STATUS)}>{item.STATUS}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">

                {/* <CButton color="primary" onClick={() => setVisible(!visible)}>Details</CButton> */}
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    handleFetchDetails(item.ID_PRODUK)
                    handleFetchAccount(item.ID_PRODUK)
                  }}
                >
                  {details.includes(item.ID_PRODUK) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.ID_PRODUK)}>
                <CCardBody className="p-3">
                  <h4>{item.username}</h4>
                  <p className="text-muted">User since: {item.IP}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          },
        }}
        // selectable
        sorterValue={{ column: 'STATUS', state: 'asc' }}
        tableFilter
        tableProps={{
          className: 'add-this-class',
          responsive: true,
          striped: true,
          hover: true,
        }}
        tableBodyProps={{
          className: 'align-middle'
        }}
      />

    </>
  )
}

export default Dashboard
