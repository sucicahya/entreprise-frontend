import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import backgroundImage from 'src/assets/brand/gambar.png';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState([]);
  const [pass, setPass] = useState([]);
  const [hasilLogin, setHasilLogin] = useState([]);
  console.log("uname", username)
  console.log("pas", pass)
  // console.log("hasillogin", hasilLogin)


  const loginsim = async () => {
    console.log("iddx")
    try {
      // setVisibleLg(!visibleLg)
      const requestBody = {
        // ID_PRODUK,
        USERNAME: username,
        PASS: pass
      };
      console.log("Request body:", JSON.stringify(requestBody, null, 2));

      const response = await axios.post('http://localhost:5000/login-sim', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setHasilLogin(response.data);
      // setAccount2(response.data);
      console.log("hasillogin:", response.data);
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('../enterprise', { state: { loginData: response.data } });
      }
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
      setHasilLogin(null);
    }
  };


  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row">
      <CContainer fluid>
        <CRow className="w-100 g-0">  {/* Menghapus gutter untuk menghilangkan padding antar kolom */}
          {/* Bagian Kiri dengan Gambar Background */}
          <CCol
            xs={12} md={7}  // 7 dari 12 kolom pada ukuran medium ke atas
            className="d-none d-md-block"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',  // Menutupi seluruh area
              backgroundPosition: 'center',  // Posisikan gambar di tengah
              backgroundRepeat: 'no-repeat',  // Jangan ulang gambar
              height: '100vh',  // Mengatur tinggi kolom sesuai tinggi layar
              minHeight: '400px'  // Mengatur tinggi minimal untuk ukuran layar kecil
            }}
          >
            {/* Konten tambahan di sebelah kiri bisa ditempatkan di sini jika perlu */}
          </CCol>

          {/* Bagian Kanan */}
          <CCol
            xs={12} md={5}  // 5 dari 12 kolom pada ukuran medium ke atas
            className="d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: '#8c7bff',  // Mengatur warna latar belakang
              height: '100vh'  // Mengatur tinggi kolom sesuai tinggi layar
            }}
          >
            <CContainer>
              <CRow className="justify-content-center">
                <CCol xs={12} md={8}> {/* Mengatur ukuran kolom untuk memastikan elemen konten tidak terlalu lebar */}
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        <CForm>
                          <h4>Login</h4>
                          <p className="text-body-secondary">Sign In to your account</p>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <CFormInput
                              placeholder="Username"
                              autoComplete="username"
                              value={username}
                              onChange={e => setUsername(e.target.value)}
                            />
                          </CInputGroup>
                          <CInputGroup className="mb-4">
                            <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <CFormInput
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              value={pass}
                              onChange={e => setPass(e.target.value)}
                            />
                          </CInputGroup>
                          <CRow>
                            <CCol xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                              <CButton
                                color="primary"
                                className="px-4"
                                onClick={() => { loginsim() }}
                                style={{ marginRight: '-50px' }}
                              >
                                Login
                              </CButton>
                            </CCol>

                          </CRow>
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
            <img
              src="src/assets/brand/logo_posindo.png"
              alt="Logo"
              className="sidebar-brand-full"
              height={60}
              style={{ position: 'absolute', top: '50px', right: '50px' }}  // Menempatkan logo di sudut kanan bawah
            />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
