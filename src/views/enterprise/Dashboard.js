import React, { useEffect, useState } from 'react'
import axios from 'axios';
import auth from '../../helpers/auth';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Table from './Table'
import Add from './Add'
import AddServer from './AddServer';
import AddAccount from './AddAccount';

function Dashboard() {
  const [nipposLogin, setNipposLogin] = useState([]);
  const location = useLocation();
  const { loginData } = location.state || {};
  const [produk, setProduk] = useState([]);
  const [detail, setDetail] = useState([]);
  const [account, setAccount] = useState([]);
  const [updateFull, setUpdateFull] = useState([]);
  const [dataLogin, setDataLogin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([])
  const [visibleLg, setVisibleLg] = useState(false)
  const [validated, setValidated] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [jenisAccount, setJenisAccount] = useState([])
  const [usernameAccount, setUsernameAccount] = useState([])
  const [passAccount, setPassAccount] = useState([])
  const [expAccount, setExpAccount] = useState([])
  const [idAccount, setIdAccount] = useState([])
  const [lengthIdAccount, setLengthIdAccount] = useState([])
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

  useEffect(() => {
    if (nipposLogin !== null && nipposLogin.length > 0) {
      const postData = {
        nippos: nipposLogin,
      };
      console.log("postdata", postData);
      console.log("nipposLogin", nipposLogin);

      axios.post('http://localhost:5000/card/pemberitahuan', postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Handle successful response
          console.log('Data received:', response.data);
          if (Array.isArray(response.data)) {
            setDataLogin(response.data);
          } else {
            console.error('Data format is not an array:', response.data);
          }
          setLoading(false);
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [nipposLogin]);

  useEffect(() => {
    if (dataLogin.length > 0) {
      showNotifications(dataLogin);
    }
  }, [dataLogin]);

  const showNotifications = (data) => {
    data.forEach(item => {
      toast.info(
        `Produk: ${item.NAMA_PRODUK}, IP Server: ${item.IP_SERVER}, Jenis Akun: ${item.JENIS_AKUN}, Tanggal Exp: ${new Date(item.EXP_DATE_PASSWORD).toLocaleDateString()}`,
        {
          // position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000, // Adjust duration as needed
        }
      );
    });
  };

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

  const token = localStorage.getItem('authToken');
  // console.log("token", token)

  return (
    <>
      <ToastContainer />
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

        </CModalBody>
        <CModalFooter>
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
      < WidgetsDropdown className="mb-4" />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Add />
        <AddServer />
        <AddAccount />
      </div>
      <Table />
    </>
  )
}

export default auth(Dashboard)