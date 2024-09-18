import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CCol,
  CRow,
  CFormSelect,
  CFormInput,
  CModalFooter,
  CButton,
} from '@coreui/react';
import auth from '../../helpers/auth';

const DetailServer = ({ item, details, handleFetchServer, server2, handleWebServer, handleIPServer, handleCPUServer, handleRAMServer, handleStorageServer, handleUpdateServer }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pilihServer, setPilihServer] = useState([])
    
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
            <CCol style={{ flexBasis: '20%' }}>
              <span>IP Server</span>
            </CCol>
            <CCol style={{ flexBasis: '20%' }}>
              <span>CPU</span>
            </CCol>
            <CCol style={{ flexBasis: '20%' }}>
              <span>RAM</span>
            </CCol>
            <CCol style={{ flexBasis: '20%' }}>
              <span>Storage</span>
            </CCol>
            <CCol style={{ flexBasis: '20%' }}>
              <span>Web Server</span>
            </CCol>
            <CRow className="mb-3">
              {server2.map((item, index) => (
                <div style={{ display: 'flex', marginBottom: '10px' }} key={index}>
                  <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                    <CFormInput
                      type="text"
                      defaultValue={item.IP_SERVER}
                      onChange={(e) => handleIPServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                    <CFormInput
                      type="text"
                      defaultValue={item.CPU}
                      onChange={(e) => handleCPUServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                    <CFormInput
                      type="text"
                      defaultValue={item.RAM}
                      onChange={(e) => handleRAMServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                    <CFormInput
                      type="text"
                      defaultValue={item.STORAGE}
                      onChange={(e) => handleStorageServer(index, e.target.value)}
                    />
                  </CCol>
                  <CCol style={{ marginRight: '5px', flexBasis: '20%' }}>
                    <CFormSelect
                      defaultValue={item.JENIS_SERVER_ID}
                      onChange={(e) => handleWebServer(index, e.target.value)}
                    >
                      <option value="">-- Pilih --</option>
                      {pilihServer.map(server => (
                        <option key={server.ID_SERVER} value={server.ID_SERVER}>
                          {server.NAMA_SERVER}
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