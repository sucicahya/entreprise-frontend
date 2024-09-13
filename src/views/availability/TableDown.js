import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CSmartTable, CBadge, CCollapse } from '@coreui/react-pro';
import DetailAvailability from './DetailAvailability';
import auth from '../../helpers/auth';

function TableDown() {
  const [produk, setProduk] = useState([]);
  const [detail, setDetail] = useState([]);
  const [account, setAccount] = useState([]);
  const [updateFull, setUpdateFull] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleLg, setVisibleLg] = useState(false)
  const [validated, setValidated] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [jenisAccount, setJenisAccount] = useState([])
  const [usernameAccount, setUsernameAccount] = useState([])
  const [passAccount, setPassAccount] = useState([])
  const [expAccount, setExpAccount] = useState([])
  const [idAccount, setIdAccount] = useState([])
  const [NewExpAccount, setNewExpAcc] = useState([])
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

  const handleFetchDetails = async (id) => {
    console.log(id, "idd")
    try {
      setVisibleLg(!visibleLg)
      const response = await axios.post('http://localhost:5000/detail/full-availability', { id });
      setDetail(response.data);
    } catch (err) {
      // setError('Error fetching details');
      setDetail(null);
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