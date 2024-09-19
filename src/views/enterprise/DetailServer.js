import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
import auth from '../../helpers/auth';

const DetailServer = ({ item, details, handleFetchServer, server2, handleWebServer, handleDatabaseServer, handleJenisServer, handleIPServer, handleCPUServer, handleRAMServer, handleStorageServer, handleUpdateServer }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pilihServer, setPilihServer] = useState([])
  const [pilihWebServer, setPilihWebServer] = useState([])
  const [pilihDatabase, setPilihDatabase] = useState([])

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
    axios.get('http://localhost:5000/detail/pilih-web-server')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setPilihWebServer(response.data);
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
    axios.get('http://localhost:5000/detail/pilih-database')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setPilihDatabase(response.data);
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

  const OutlineDropdownToggle = styled(CDropdownToggle)`
    border: 1px solid #d1d1d1; /* Ganti dengan warna outline yang diinginkan */
    color: #818181; /* Ganti dengan warna teks yang diinginkan */
    background-color: transparent; /* Menghapus background */
    
    &:hover {
        background-color: #007bff; /* Warna background saat hover */
        color: #fff; /* Warna teks saat hover */
    }
`;

  return (
    <>
      <td className="py-2">
        <CButton
          color="primary"
          variant="outline"
          shape="square"
          size="sm"
          onClick={() => {
            handleFetchServer(item.ID_PRODUK);
            setVisible(!visible);
          }}
        >
          {details.includes(item.ID_PRODUK) ? 'Hide' : 'Show'}
        </CButton>
      </td>

      <CModal
        scrollable
        size="lg"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="OptionalSizesExample2"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">Details Server</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-3 needs-validation" noValidate onSubmit={handleUpdateServer}>
            <CCol md={2}>
              <span>IP Server</span>
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
              <span>Jenis Server</span>
            </CCol>
            <CCol md={2}>
              <span>Macam Server</span>
            </CCol>
            <CRow className="mb-3">
              {server2.map((item, index) => (
                <div style={{ display: 'flex', marginBottom: '10px' }} key={index}>
                  <CCol style={{ marginRight: '5px' }} md={2}>
                    <CFormInput
                      type="text"
                      defaultValue={item.IP_SERVER}
                      onChange={(e) => handleIPServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px' }} md={2}>
                    <CFormInput
                      type="text"
                      defaultValue={item.CPU}
                      onChange={(e) => handleCPUServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px' }} md={2}>
                    <CFormInput
                      type="text"
                      defaultValue={item.RAM}
                      onChange={(e) => handleRAMServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px' }} md={2}>
                    <CFormInput
                      type="text"
                      defaultValue={item.STORAGE}
                      onChange={(e) => handleStorageServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px' }} md={2}>
                    <CFormSelect
                      defaultValue={item.JENIS_SERVER_ID}
                      onChange={(e) => handleJenisServer(index, e.target.value)}
                    >
                      <option value="">-- Pilih --</option>
                      {pilihServer.map(server => (
                        <option key={server.ID_SERVER} value={server.ID_SERVER}>
                          {server.NAMA_SERVER}
                        </option>
                      ))}
                    </CFormSelect>
                  </CCol>

                  <CCol md={2}>
                    <CFormSelect
                      defaultValue={item.MACAM_SERVER}
                      onChange={(e) =>
                        item.JENIS_SERVER_ID === 1
                          ? handleWebServer(index, e.target.value)
                          : handleDatabaseServer(index, e.target.value)
                      }
                    >
                      <option value="">-- Pilih --</option>
                      {item.JENIS_SERVER_ID === 1
                        ? pilihWebServer.map(server => (
                          <option key={server.ID_WEB_SERVER} value={server.ID_WEB_SERVER}>
                            {server.NAMA_WEB_SERVER}
                          </option>
                        ))
                        : pilihDatabase.map(server => (
                          <option key={server.ID_DATABASE} value={server.ID_DATABASE}>
                            {server.NAMA_DATABASE}
                          </option>
                        ))}
                    </CFormSelect>

                  </CCol>


                </div>
              ))}
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={handleUpdateServer}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default auth(DetailServer);