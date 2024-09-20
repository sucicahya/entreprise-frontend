import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import Chart from '../enterprise/Chart'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine, CChartPie } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)
  const [produkMasuk, setProdukMasuk] = useState([]);
  const [penempatanCloud, setPenempatanCloud] = useState([]);
  const [penempatanOnprem, setPenempatanOnprem] = useState([]);
  const [statusAktif, setStatusAktif] = useState([]);
  const [statusNonAktif, setStatusNonAktif] = useState([]);
  const [aksesInternet, setAksesInternet] = useState([]);
  const [aksesIntranet, setAksesIntranet] = useState([]);
  const [total, setTotal] = useState([]);
  const [jenisDatabase, setJenisDatabase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/card/produk-masuk')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setProdukMasuk(response.data);
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
    axios.get('http://localhost:5000/card/penempatan-cloud')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setPenempatanCloud(response.data);
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
    axios.get('http://localhost:5000/card/penempatan-onprem')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setPenempatanOnprem(response.data);
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
    axios.get('http://localhost:5000/card/status-aktif')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setStatusAktif(response.data);
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
    axios.get('http://localhost:5000/card/status-nonaktif')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setStatusNonAktif(response.data);
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
    axios.get('http://localhost:5000/card/total')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setTotal(response.data);
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
    axios.get('http://localhost:5000/card/akses-internet')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setAksesInternet(response.data);
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
    axios.get('http://localhost:5000/card/akses-intranet')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setAksesIntranet(response.data);
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
    axios.get('http://localhost:5000/card/jenis-database')
      .then(response => {
        // console.log('Data received:', response.data); // Cek data yang diterima
        if (Array.isArray(response.data)) {
          setJenisDatabase(response.data);
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

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CRow>
      <CCol> {/*  kolom 1 isinya 4 card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <CRow xs={{ gutter: 4 }}> {/*  kolom 1 baris 1 */}
            <CCol>  {/*  current */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <CRow>
                  <CCol>
                    <CWidgetStatsA
                      style={{ backgroundColor: "#AED581", height: "90px" }}
                      value={
                        <>
                          {produkMasuk.map(item => (
                            <React.Fragment>
                              {item.total}
                            </React.Fragment>
                          ))}
                        </>
                      }
                      title="New System"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CWidgetStatsA
                      style={{ backgroundColor: "#65cbe9", height: "90px" }}
                      value={
                        <>
                          {total.map(item => (
                            <React.Fragment>
                              {item.total}
                            </React.Fragment>
                          ))}
                        </>
                      }
                      title="Total System"
                    />
                  </CCol>
                </CRow>
              </div>
            </CCol>
            <CCol> {/*  total */}
              <CWidgetStatsA
                style={{ backgroundColor: "#ffa69e" }}
                value={
                  <>
                  </>
                }
                title="System Access"
                chart={
                  <div>
                    <CRow>
                      <CCol style={{ paddingLeft: '30px' }}>
                        {aksesInternet.map(item => (
                          <React.Fragment>
                            <div>Internet</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                      <CCol>
                        {aksesIntranet.map(item => (
                          <React.Fragment>
                            <div>Intranet</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                    </CRow>
                    <CChartLine
                      ref={widgetChartRef1}
                      className="mt-3 mx-3"
                      style={{ height: '83px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: '#ffa69e',
                            data: [65, 59, 84, 84, 51, 55, 40],
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            border: {
                              display: false,
                            },
                            grid: {
                              display: false,
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            min: 30,
                            max: 89,
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 1,
                            tension: 0.4,
                          },
                          point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  </div>
                }
              />
            </CCol>
          </CRow>
          <CRow xs={{ gutter: 4 }}> {/*  kolom 1 baris 2 */}
            <CCol xs="6"> {/*  on premise cloud */}
              <CWidgetStatsA
                style={{ backgroundColor: "#f6ac69" }}
                value={
                  <>
                  </>
                }
                title="Placement"
                chart={
                  <div>
                    <CRow>
                      <CCol style={{ paddingLeft: '30px' }}>
                        {penempatanCloud.map(item => (
                          <React.Fragment>
                            <div>Cloud</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                      <CCol>
                        {penempatanOnprem.map(item => (
                          <React.Fragment>
                            <div>On-Premise</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                    </CRow>
                    <CChartLine
                      ref={widgetChartRef2}
                      className="mt-3 mx-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: '#f6ac69',
                            data: [1, 18, 9, 17, 34, 22, 11],
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            border: {
                              display: false,
                            },
                            grid: {
                              display: false,
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            min: -9,
                            max: 39,
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 1,
                          },
                          point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  </div>
                }
              />
            </CCol>
            <CCol xs="6"> {/*  aktif ga aktif */}
              <CWidgetStatsA
                style={{ backgroundColor: "#f9ed85" }}
                value={
                  <>
                  </>
                }
                title="System Status"
                chart={
                  <div>
                    <CRow>
                      <CCol style={{ paddingLeft: '40px' }}>
                        {statusAktif.map(item => (
                          <React.Fragment>
                            <div>Active</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                      <CCol>
                        {statusNonAktif.map(item => (
                          <React.Fragment>
                            <div>Non-Active</div>
                            <div>{item.total}</div>
                          </React.Fragment>
                        ))}
                      </CCol>
                    </CRow>
                    <CChartLine
                      className="mt-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40],
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 2,
                            tension: 0.4,
                          },
                          point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  </div>
                }
              />
            </CCol>
          </CRow>
        </div>

      </CCol>
      <CCol> {/*  kolom 2 isinya chart */}
        <Chart />

      </CCol>

    </CRow>


  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
