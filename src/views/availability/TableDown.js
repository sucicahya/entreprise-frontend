import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CSmartTable, CBadge, CCollapse } from '@coreui/react-pro';
import {
  CAvatar,
  CButton,
  CCardBody,
} from '@coreui/react'
// import DetailServer from './DetailServer';
// import DetailAccount from './DetailAccount';
import DetailAvailability from './DetailAvailability';
import auth from '../../helpers/auth';

function TableDown() {
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
  const [webServer, setWebServer] = useState([]);



  


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

  

  console.log("idacc", idAccount)
  // console.log("namaproduk", nama_produk)


  const [account2, setAccount2] = React.useState(
    searchResults.account || []
  )

  const [server2, setServer2] = React.useState(
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

  const handleWebServer = (index, value) => {
    console.log("rrxind", index)
    console.log("rrxval", value)
    const updatedServer = [...server2];
    updatedServer[index].WEB_SERVER_ID = value;
    setServer2(updatedServer);
    setWebServer(updatedServer.map(acc => acc.WEB_SERVER_ID));
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
    axios.get('http://localhost:5000/detail/availibility')
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

  console.log("produk", produk)

  const handleFetchDetails = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg(!visibleLg)
      const response = await axios.post('http://localhost:5000/detail/full-availability', { id });
      setDetail(response.data);
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
      // setDatabaseDetail(response.data.map(item => item.JENIS_DB));
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
      setDetail(null);
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

  return (
    <>  



      <CSmartTable
        activePage={2}
        cleaner
        clickableRows
        columns={[
            // { key: 'ID_PRODUK', label: 'ID Produk' },
            { key: 'NAMA_PRODUK', label: 'Nama Aplikasi' },
            // { key: 'IP_SERVER', label: 'Domain' },
            { key: 'UP_TIME', label: 'Up Time' },
            { key: 'show_details', label: 'Down Time' },
            // { key: 'IP', label: 'IP Server' },
            // { key: 'WAKTU_DOWN', label: 'Waktu Down' },
            // { key: 'WAKTU_SOLVED', label: 'Waktu Selesai' },
            // { key: 'KEJADIAN', label: 'Kejadian' },
            // { key: 'PENYEBAB', label: 'Penyebab' },
            // { key: 'SOLUSI', label: 'Solusi' },
        ]}
        // columnFilter
        columnSorter
        footer
        items={produk.map(item => ({
          ID_PRODUK: item.ID_AVAILABILITY,
          NAMA_PRODUK: item.NAMA_PRODUK,
          DOWN_TIME: item.DOWN_TIME,
          // IP_SERVER: item.IP_SERVER,
          // IP: item.IP_SERVER,
          UP_TIME: item.UP_TIME,
          show_details: item,
          // DOWN_TIME: item.DOWN_TIME,
          // WAKTU_DOWN: item.WAKTU_DOWN,
          // WAKTU_SOLVED: item.WAKTU_SELESAI,
          // KEJADIAN: item.KEJADIAN,
          // PENYEBAB: item.PENYEBAB,
          // SOLUSI: item.SOLUSI
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
          show_details: (item) => {
            return (
              <DetailAvailability
                item={item}
                detail={detail}
                handleFetchDetails={handleFetchDetails}
                // handleUpdateDetail={handleUpdateDetail}
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
          }
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

export default auth(TableDown)