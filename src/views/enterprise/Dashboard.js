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
  const [id_produk_detail, setIdProdukDetail] = useState([]);
  const [detail, setDetail] = useState([]);
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [visibleLg, setVisibleLg] = useState(false)
  const [dataa, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [validated, setValidated] = useState(false)

  console.log("DETAIL", detail)

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
      console.log("dataaaa", response.data)
      // setError(null);
    } catch (err) {
      // setError('Error fetching details');
      setAccount(null);
    }
  };

  const handleUpdateDetail = async (id, accounts) => {
    console.log(id, "idddetail")
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
      case 'Active':
        return 'success'
      case 'Inactive':
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
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Deskripsi Produk"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.URL}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="URL"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.IP_SERVER}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="IP SERVER"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA_PENEMPATAN}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Penempatan"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA_AKSES}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Akses"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.CPU}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="CPU"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.RAM}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="RAM"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    defaultValue={item.STORAGE}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Storage"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA_WEB_SERVER}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Web Server"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.JENIS_DATABASE}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Jenis Database"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.FRAMEWORK}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Framework"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.VER_FRAMEWORK}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Version Framework"
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.WAKTU_OPERASIONAL}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Waktu Operasional"
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA_DEVELOPER}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Developer"
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.BUSINESS_OWNER}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Business Owner"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.NAMA}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="PIC"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TELEPON}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Kontak PIC"
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    defaultValue={item.PORT}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Port"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TANGGAL_LIVE}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Live"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TANGGAL_DEPLOY}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Deploy"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TANGGAL_AKHIR_UPDATE}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Update"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.TANGGAL_TUTUP}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Tanggal Tutup"
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    defaultValue={item.BA_DEPLOY}
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
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    label="Req Deploy"
                    required
                  />
                </CCol>
              </React.Fragment>
            ))}

            <CCol md={1}>
              <span>Nomor</span>
            </CCol>
            <CCol md={2}>
              <span>Jenis Akun</span>
            </CCol>
            <CCol md={3}>
              <span>Username</span>
            </CCol>
            <CCol md={3}>
              <span>Password</span>
            </CCol>
            <CCol md={2}>
              <span>Exp Date Pass</span>
            </CCol>
            <CCol md={1}>
            </CCol>
            {account.map(item => (
              <React.Fragment>
                <CCol md={1}>
                  <CFormInput
                    type="text"
                    defaultValue={item.JENIS_AKUN}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Jenis Akun"
                    readOnly
                  />
                </CCol>
                <CCol md={2}>
                  <CFormInput
                    type="text"
                    defaultValue={item.JENIS_AKUN}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Jenis Akun"
                    required
                  />
                </CCol>
                <CCol md={3}>
                  <CFormInput
                    type="text"
                    defaultValue={item.USERNAME}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Username"
                    required
                  />
                </CCol>
                <CCol md={3}>
                  <CFormInput
                    type="text"
                    defaultValue={item.PASS}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Password"
                    required
                  />
                </CCol>
                <CCol md={2}>
                  <CFormInput
                    type="text"
                    defaultValue={item.EXP_DATE_PASSWORD}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Exp Date Pass"
                    required
                  />
                </CCol>
                <CCol md={1}>
                  <CFormInput
                    type="text"
                    defaultValue={item.EXP_DATE_PASSWORD}
                    feedbackValid="Looks good!"
                    id="validationCustom01"
                    // label="Exp Date Pass"
                    required
                  />

                  {/* <CButton>
                    <CIcon icon={cilSend} />
                  </CButton> */}
                </CCol>
                {/* <CCol md={4}>
              <CFormInput
                type="text"
                defaultValue="Otto"
                feedbackValid="Looks good!"
                id="validationCustom02"
                label="First name"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
              <CInputGroup className="has-validation">
                <CInputGroupText>@</CInputGroupText>
                <CFormInput
                  type="text"
                  aria-describedby="inputGroupPrependFeedback"
                  feedbackValid="Please choose a username."
                  id="validationCustomUsername"
                  required
                />
              </CInputGroup>
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom03Feedback"
                feedbackInvalid="Please provide a valid city."
                id="validationCustom03"
                label="City"
                required
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect
                aria-describedby="validationCustom04Feedback"
                feedbackInvalid="Please select a valid state."
                id="validationCustom04"
                label="State"
                required
              >
                <option disabled>Choose...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Zip"
                required
              />
            </CCol> */}
                {/* <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol> */}
              </React.Fragment>
            ))}
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
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          {detail.map(item => {
            const accountIds = account.map(item2 => item2.ID_ACCOUNT); // Mengumpulkan semua ID_ACCOUNT dalam array
            return (
              <React.Fragment key={item.ID_PRODUK}>
                <CButton
                  color="primary"
                  onClick={() => {
                    handleUpdateDetail(item.ID_PRODUK, accountIds);
                    account.forEach(item2 => handleUpdateAccount(item2.ID_ACCOUNT));
                  }}
                >
                  Save changes
                </CButton>
              </React.Fragment>
            );
          })}
        </CModalFooter>
      </CModal>
      {/* <div>
        <h1>Produk</h1>
        <ul>
          {produk.length > 0 ? (
            produk.map(item => (
              <li key={item.ID_PRODUK}>{item.NAMA_PRODUK}: {item.DESKRIPSI_PRODUK}</li>
            ))
          ) : (
            <li>No data available</li>
          )}
        </ul>
      </div> */}
      < WidgetsDropdown className="mb-4" />
      <WidgetsBrand className="mb-4" withCharts />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <Table />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {/* {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))} */}
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {/* {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {/* {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))} */}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-body-secondary small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} STATUS={item.avatar.STATUS} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | IP:{' '}
                          {item.user.IP}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))} */}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>








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
        columnFilter
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
