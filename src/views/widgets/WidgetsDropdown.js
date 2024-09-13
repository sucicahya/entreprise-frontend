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

  const chartData = {
    labels: jenisDatabase.map(item => item.db || 'Unknown'), // Mengambil 'db' untuk labels
    datasets: [
      {
        data: jenisDatabase.map(item => item.total || 0), // Mengambil 'total' untuk data
        backgroundColor: jenisDatabase.map(() => getRandomColor()),
        // hoverBackgroundColor: jenisDatabase.map(() => getRandomColor()),
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   document.documentElement.addEventListener('ColorSchemeChange', () => {
  //     if (widgetChartRef1.current) {
  //       setTimeout(() => {
  //         widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
  //         widgetChartRef1.current.update()
  //       })
  //     }

  //     if (widgetChartRef2.current) {
  //       setTimeout(() => {
  //         widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
  //         widgetChartRef2.current.update()
  //       })
  //     }
  //   })
  // }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow>
      <CCol> {/*  kolom 1 isinya 4 card */}
        <CRow className={props.className} xs={{ gutter: 4 }}> {/*  kolom 1 baris 1 */}
          <CCol>  {/*  current */}
            <CWidgetStatsA
              style={{ backgroundColor: "#ffa69e" }}
              value={
                <>
                  {produkMasuk.map(item => (
                    <React.Fragment>
                      {item.total}
                    </React.Fragment>
                  ))}
                  {/* 26K{' '}
          <span className="fs-6 fw-normal">
            (-12.4% <CIcon icon={cilArrowBottom} />)
          </span> */}
                </>
              }
              title="Jumlah produk masuk"
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              //       <CIcon icon={cilOptions} />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
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
              }
            />
          </CCol>
          <CCol> {/*  total */}
            <CWidgetStatsA
              style={{ backgroundColor: "#65cbe9" }}
              value={
                <>
                  {total.map(item => (
                    <React.Fragment>
                      {item.total}
                    </React.Fragment>
                  ))}
                  {/* 26K{' '}
              <span className="fs-6 fw-normal">
                (-12.4% <CIcon icon={cilArrowBottom} />)
              </span> */}
                </>
              }
              title="Total produk"
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              //       <CIcon icon={cilOptions} />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
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
                        pointBackgroundColor: '#65cbe9',
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
              }
            />
          </CCol>
        </CRow>
        <CRow className={props.className} xs={{ gutter: 4 }}> {/*  kolom 1 baris 2 */}
          <CCol> {/*  on premise cloud */}
            <CWidgetStatsA
              style={{ backgroundColor: "#f6ac69" }}
              value={
                <>
                  {/* $6.200{' '}
              <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
              </span> */}
                </>
              }
              title="Penempatan"
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              //       <CIcon icon={cilOptions} />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
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
          <CCol> {/*  aktif ga aktif */}
            <CWidgetStatsA
              style={{ backgroundColor: "#f9" }}
              value={
                <>
                  {/* 2.49%{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span> */}
                </>
              }
              title="Status Produk"
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
              //       <CIcon icon={cilOptions} />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                <div>
                  <CRow>
                    <CCol style={{ paddingLeft: '40px' }}>
                      {statusAktif.map(item => (
                        <React.Fragment>
                          <div>Aktif</div>
                          <div>{item.total}</div>
                        </React.Fragment>
                      ))}
                    </CCol>
                    <CCol>
                      {statusNonAktif.map(item => (
                        <React.Fragment>
                          <div>Non-Aktif</div>
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
