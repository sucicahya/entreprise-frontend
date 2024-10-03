import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CSmartTable, CBadge, CCollapse } from '@coreui/react-pro';
// import DownloadIcon from '@mui/icons-material/Download'
import {
  CAvatar,
  CButton,
  CCardBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowThickToBottom } from '@coreui/icons';
import DetailServer from './DetailServer';
import DetailAccount from './DetailAccount';
import DetailMain from './DetailMain';
import auth from '../../helpers/auth';
import { CSVLink } from 'react-csv'
import { useLocation } from 'react-router-dom';

function Table() {
  const [produk, setProduk] = useState([]);
  // const [id_produk_detail, setIdProdukDetail] = useState([]);
  const [detail, setDetail] = useState([]);
  const [account, setAccount] = useState([]);
  const [server, setServer] = useState([]);
  const [updateFull, setUpdateFull] = useState([]);
  const [updateAccount, setUpdateAccount] = useState([]);
  const [updateServer, setUpdateServer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleLg2, setVisibleLg2] = useState(false)
  const [visibleLg3, setVisibleLg3] = useState(false)
  const [validated, setValidated] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [jenisAccount, setJenisAccount] = useState([])
  const [usernameAccount, setUsernameAccount] = useState([])
  const [passAccount, setPassAccount] = useState([])
  const [expAccount, setExpAccount] = useState([])
  const [idAccount, setIdAccount] = useState([])
  const [lengthIdAccount, setLengthIdAccount] = useState([])
  const [lengthIdServer, setLengthIdServer] = useState([])
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
  const [databaseDetail, setDatabaseDetail] = useState([]);
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
  const [jenisServer, setJenisServer] = useState([]);
  const [webServer, setWebServer] = useState([]);
  const [databaseServer, setDatabaseServer] = useState([]);
  const [macamServer, setMacamServer] = useState([]);
  const [role, setRole] = useState([]);

  const location = useLocation();
  const loginData = location.state?.loginData; // Mengakses data yang dikirim melalui state

  // Gunakan useEffect untuk melakukan console log saat halaman di-render
  useEffect(() => {
      if (loginData) {
          const role = loginData.results[0]?.role; // Mengakses 'role' dari data
          console.log('Role yang diterima di halaman enterprise:', role);
          setRole(role);
      }
  }, [loginData]);

  const date = new Date()
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1
    }-${date.getDate()}`
  const filename = `enterprise-${dateString}.csv`
  const filename2 = 'produk.json';

  const downloadJSON = (data, filename2) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = filename2; // Nama file, pastikan menggunakan ekstensi .json
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const [account2, setAccount2] = React.useState(
    searchResults.account || []
  )

  const [server2, setServer2] = React.useState(
    searchResults.spec_server || []
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

  const handleJenisServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].JENIS_SERVER_ID = value;
    setServer2(updatedServer);
    setJenisServer(updatedServer.map(acc => acc.JENIS_SERVER_ID));
  };

  const handleIPServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].IP_SERVER = value;
    setServer2(updatedServer);
    setIPSpec(updatedServer.map(acc => (acc.IP_SERVER)));
  };

  const handleCPUServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].CPU = value;
    setServer2(updatedServer);
    setCPUSpec(updatedServer.map(acc => (acc.CPU)));
  };

  const handleRAMServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].RAM = value;
    setServer2(updatedServer);
    setRAMSpec(updatedServer.map(acc => (acc.RAM)));
  };

  const handleStorageServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].STORAGE = value;
    setServer2(updatedServer);
    setStorageSpec(updatedServer.map(acc => (acc.STORAGE)));
  };

  const handleWebServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].ID_WEB_SERVER = value;
    setServer2(updatedServer);
    setWebServer(updatedServer.map(acc => (acc.ID_WEB_SERVER)));
    // setMacamServer(updatedServer.map(acc => (acc.ID_WEB_SERVER)));
    // setMacamServer(prevState => {
    //   const updatedMacamServer = [...prevState];  // Salin array lama
    //   updatedMacamServer[index] = value;          // Update hanya elemen pada index
    //   return updatedMacamServer;                  // Kembalikan array baru
    // });
    setMacamServer(updatedServer.map(acc => acc.ID_WEB_SERVER || acc.ID_DATABASE));
  };

  const handleDatabaseServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].ID_DATABASE = value;
    setServer2(updatedServer);
    setDatabaseServer(updatedServer.map(acc => (acc.ID_DATABASE)));
    // setMacamServer(updatedServer.map(acc => (acc.ID_DATABASE)));
    // setMacamServer(prevState => {
    //   const updatedMacamServer = [...prevState];  // Salin array lama
    //   updatedMacamServer[index] = value;          // Update hanya elemen pada index
    //   return updatedMacamServer;                  // Kembalikan array baru
    // });
    setMacamServer(updatedServer.map(acc => acc.ID_WEB_SERVER || acc.ID_DATABASE));

  };

  console.log("MACAM SERVER", macamServer)
  console.log("JENIS SERVER", jenisServer)

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

  const handleFetchDetails = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg(!visibleLg)
      const response = await axios.post('http://localhost:5000/detail/full-detail', { id });
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
      // setDatabaseDetail(response.data.map(item => item.JENIS_DB));
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

  const handleFetchServer = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg2(!visibleLg2)
      const response = await axios.post('http://localhost:5000/detail/full-server', { id });
      setServer(response.data);
      setServer2(response.data);
      console.log("Server2 data:", response.data);

      setIdSpec(response.data.map(item => item.ID_SPEC_SERVER));
      setWebServer(response.data.map(item => item.WEB_SERVER_ID));
      setIPSpec(response.data.map(item => item.IP_SERVER));
      setCPUSpec(response.data.map(item => item.CPU));
      setRAMSpec(response.data.map(item => item.RAM));
      setStorageSpec(response.data.map(item => item.STORAGE));
      setLengthIdServer(response.data.map(item => item.ID_SPEC_SERVER).length);
      console.log("dataaaa", response.data)
      // setError(null);
    } catch (err) {
      // setError('Error fetching details');
      setServer(null);
    }
  };

  const handleFetchAccount = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg3(!visibleLg3)
      const response = await axios.post('http://localhost:5000/detail/full-account', { id });
      setAccount(response.data);
      setAccount2(response.data);
      console.log("Account2 data:", response.data);

      setIdAccount(response.data.map(item => item.ID_ACCOUNT));
      setJenisAccount(response.data.map(item => item.JENIS_AKUN));
      setUsernameAccount(response.data.map(item => item.USERNAME));
      setPassAccount(response.data.map(item => item.PASS));
      setExpAccount(response.data.map(item => item.EXP_DATE_PASSWORD));
      setLengthIdAccount(response.data.map(item => item.ID_ACCOUNT).length);
      setLengthIdServer(response.data.map(item => item.ID_SPEC_SERVER).length);
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
        // JENIS_DATABASE: databaseDetail,
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

  const handleUpdateServer = async () => {
    // console.log(ID_PRODUK, "iddx")
    try {
      setVisibleLg(!visibleLg)
      const requestBody = {
        // ID_PRODUK,
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
        JENIS_DATABASE: databaseDetail,
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
        MACAM_SERVER: macamServer,

        ID_WEB_SERVER: idServer,
        NAMA_SERVER: jenisServer,

        // BA_DEPLOY: ba_deploy,
        // REQ_DEPLOY: req_deploy,
        ID_ACCOUNT: idAccount,
        JENIS_AKUN: jenisAccount,
        USERNAME: usernameAccount,
        PASS: passAccount,
        EXP_DATE_PASSWORD: expAccount,
        LENGTH_ACCOUNT: lengthIdAccount,

        LENGTH_SERVER: lengthIdServer
      };
      console.log("Request body:", JSON.stringify(requestBody, null, 2));

      const response = await axios.post('http://localhost:5000/detail/update-server', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUpdateServer(response.data);
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
      setUpdateServer(null);
    }
  };

  const handleSetNamaProduk = (value) => {
    setNamaProduk(value);
  };

  const handleSetDeskripsiProduk = (value) => {
    setDeskripsiProduk(value);
  };

  const handleSetFlagProduk = (value) => {
    setFlagProduk(value);
  };

  const handleSetURLDetail = (value) => {
    setURLDetail(value);
  };

  const handleSetPortDetail = (value) => {
    setPortDetail(value);
  };

  const handleSetPenempatanDetail = (value) => {
    setPenempatanDetail(value);
  };

  const handleSetAksesDetail = (value) => {
    setAksesDetail(value);
  };

  const handleSetWaktuOperasionalDetail = (value) => {
    setWaktuOperasionalDetail(value);
  };

  const handleSetDatabaseDetail = (value) => {
    setDatabaseDetail(value);
  };

  const handleSetFrameworkDetail = (value) => {
    setFrameworkDetail(value);
  };

  const handleSetVerFrameworkDetail = (value) => {
    setVerFrameworkDetail(value);
  };

  const handleSetDeveloperDetail = (value) => {
    setDeveloperDetail(value);
  };

  const handleSetBusinessOwnerDetail = (value) => {
    setBusinessOwnerDetail(value);
  };

  const handleSetPICNipposDetail = (value) => {
    setPICNipposDetail(value);
  };

  const handleSetTeleponKaryawan = (value) => {
    setTeleponKaryawan(value);
  };

  const handleSetTanggalLiveDetail = (value) => {
    setTanggalLiveDetail(value);
  };

  const handleSetTanggalAkhirUpdateDetail = (value) => {
    setTanggalAkhirUpdateDetail(value);
  };

  const handleSetTanggalTutupDetail = (value) => {
    setTanggalTutupDetail(value);
  };

  const handleSetTanggalDeployDetail = (value) => {
    setTanggalDeployDetail(value);
  };

  const handleUpdateAccount = async () => {
    // console.log(ID_PRODUK, "iddx")
    try {
      setVisibleLg(!visibleLg)
      const requestBody = {
        // ID_PRODUK,
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
        JENIS_DATABASE: databaseDetail,
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

      const response = await axios.post('http://localhost:5000/detail/update-account', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUpdateAccount(response.data);
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
      setUpdateAccount(null);
    }
  };

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

  return (
    <>

      {/* <CButton size="sm" color="danger" className="ml-1"> */}
      <CSVLink
        data={produk}
        filename={filename}
        style={{
          marginLeft: 'auto',
          float: 'right',
          marginTop: '-3%',
          marginRight: '5%',
          color: '#022954'
        }}
      >
        {/* <DownloadIcon style={{ marginBottom: '-5px', color: '#022954' }} /> */}
        <CIcon icon={cilArrowThickToBottom} size="lg" />
        <span style={{ color: '#022954', marginLeft: '8px' }}>Download CSV</span>
      </CSVLink>

      <div
        style={{
          marginLeft: 'auto',
          float: 'right',
          marginTop: '-3%',
          marginRight: '20%',
        }}
      >
        <CIcon icon={cilArrowThickToBottom} size="lg" />
        <span
          style={{ color: '#022954', marginLeft: '8px', cursor: 'pointer' }}
          onClick={() => downloadJSON(produk, filename2)} // Trigger download JSON dengan filename .json
        >
          <u>Download JSON</u>
        </span>
      </div>
      {/* </CButton> */}
      <CSmartTable
        activePage={2}
        cleaner
        clickableRows
        columns={[
          // { key: 'ID_PRODUK', label: 'ID Aplikasi' },
          { key: 'NAMA_PRODUK', label: 'Application Name' },
          { key: 'show_details', label: 'Domain' },
          // { key: 'IP', label: 'IP Server' },
          // { key: 'PIC', label: 'PIC' },
          { key: 'STATUS', label: 'Status' },
          // { key: 'show_details', label: 'Details' },
          { key: 'show_details2', label: 'Server Details' },
          { key: 'show_details3', label: 'Account Details' },
          // { key: 'details', label: 'More Details' },
        ]}
        // columnFilter
        columnSorter
        footer
        items={produk.map(item => ({
          ID_PRODUK: item.ID_PRODUK,
          NAMA_PRODUK: item.NAMA_PRODUK,
          URL: item.URL,
          // IP: item.IP_SERVER,
          // PIC: item.NAMA,
          STATUS: item.NAMA_STATUS,
          show_details: item,
          show_details2: item,
          show_details3: item,
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
              <DetailMain
                item={item}
                detail={detail}
                formattedTanggalLive={formattedTanggalLive}
                formattedTanggalUpdate={formattedTanggalUpdate}
                formattedTanggalDeploy={formattedTanggalDeploy}
                formattedTanggalTutup={formattedTanggalTutup}
                // pilihStatus={pilihStatus}
                // pilihPenempatan={pilihPenempatan}
                // pilihAkses={pilihAkses}
                // pilihDatabase={pilihDatabase}
                // pilihDeveloper={pilihDeveloper}
                // pilihKaryawan={pilihKaryawan}
                handleSetNamaProduk={handleSetNamaProduk}
                handleSetDeskripsiProduk={handleSetDeskripsiProduk}
                handleSetFlagProduk={handleSetFlagProduk}
                handleSetURLDetail={handleSetURLDetail}
                handleSetPortDetail={handleSetPortDetail}
                handleSetPenempatanDetail={handleSetPenempatanDetail}
                handleSetAksesDetail={handleSetAksesDetail}
                handleSetWaktuOperasionalDetail={handleSetWaktuOperasionalDetail}
                handleSetDatabaseDetail={handleSetDatabaseDetail}
                handleSetFrameworkDetail={handleSetFrameworkDetail}
                handleSetVerFrameworkDetail={handleSetVerFrameworkDetail}
                handleSetDeveloperDetail={handleSetDeveloperDetail}
                handleSetBusinessOwnerDetail={handleSetBusinessOwnerDetail}
                handleSetPICNipposDetail={handleSetPICNipposDetail}
                handleSetTeleponKaryawan={handleSetTeleponKaryawan}
                handleSetTanggalLiveDetail={handleSetTanggalLiveDetail}
                handleSetTanggalAkhirUpdateDetail={handleSetTanggalAkhirUpdateDetail}
                handleSetTanggalTutupDetail={handleSetTanggalTutupDetail}
                handleSetTanggalDeployDetail={handleSetTanggalDeployDetail}

                handleFetchDetails={handleFetchDetails}
                // handleWebServer={handleWebServer}
                // handleIPServer={handleIPServer}
                // handleCPUServer={handleCPUServer}
                // handleRAMServer={handleRAMServer}
                // handleStorageServer={handleStorageServer}
                handleUpdateDetail={handleUpdateDetail}
              />
              // <td className="py-2">

              //   {/* <CButton color="primary" onClick={() => setVisible(!visible)}>Details</CButton> */}
              //   <CButton
              //     color="primary"
              //     variant="outline"
              //     shape="square"
              //     size="sm"
              //     onClick={() => {
              //       handleFetchDetails(item.ID_PRODUK)
              //       // handleFetchAccount(item.ID_PRODUK)
              //     }}
              //   >
              //     {details.includes(item.ID_PRODUK) ? 'Hide' : 'Show'}
              //   </CButton>
              // </td>
            )
          },
          show_details2: (item) => {
            return (
              <DetailServer
                item={item}
                details={details}
                server2={server2}
                // pilihServer={pilihServer}
                handleFetchServer={handleFetchServer}
                handleJenisServer={handleJenisServer}
                handleWebServer={handleWebServer}
                handleDatabaseServer={handleDatabaseServer}
                handleIPServer={handleIPServer}
                handleCPUServer={handleCPUServer}
                handleRAMServer={handleRAMServer}
                handleStorageServer={handleStorageServer}
                handleUpdateServer={handleUpdateServer}
              />
            )
          },
          show_details3: (item) => {
            return (
              <DetailAccount
                item={item}
                details={details}
                account2={account2}
                role={role}
                // pilihServer={pilihServer}
                handleFetchAccount={handleFetchAccount}
                handleJenisAccount={handleJenisAccount}
                handleUsernameAccount={handleUsernameAccount}
                handlePassAccount={handlePassAccount}
                handleExpAccount={handleExpAccount}
                NewExpAccount={NewExpAccount}
                handleUpdateAccount={handleUpdateAccount}
              />
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

export default auth(Table)