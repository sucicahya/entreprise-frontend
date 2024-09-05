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
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
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
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => { loginsim() }}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                {/* <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody> */}
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
