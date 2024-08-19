import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
    const random = () => Math.round(Math.random() * 100)
    const [jenisDatabase, setJenisDatabase] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log("jenisdb", jenisDatabase)




    useEffect(() => {
        axios.get('http://localhost:5000/jenis-database')
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

    return (
        <CRow>
            {/* <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="React wrapper component for Chart.js 3.0, the most popular charting library."
        />
      </CCol> */}
            {/* <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Bar Chart</CCardHeader>
                    <CCardBody>
                        <CChartBar
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        label: 'GitHub Commits',
                                        backgroundColor: '#f87979',
                                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </CCardBody>
                </CCard>
            </CCol> */}
            {/* <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Line Chart</CCardHeader>
                    <CCardBody>
                        <CChartLine
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                        borderColor: 'rgba(220, 220, 220, 1)',
                                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                        pointBorderColor: '#fff',
                                        data: [random(), random(), random(), random(), random(), random(), random()],
                                    },
                                    {
                                        label: 'My Second dataset',
                                        backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                        borderColor: 'rgba(151, 187, 205, 1)',
                                        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                        pointBorderColor: '#fff',
                                        data: [random(), random(), random(), random(), random(), random(), random()],
                                    },
                                ],
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol> */}
            {/* <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Doughnut Chart</CCardHeader>
                    <CCardBody>
                        <CChartDoughnut
                            data={{
                                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                                datasets: [
                                    {
                                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                        data: [40, 20, 80, 10],
                                    },
                                ],
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol> */}
            <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Pie Chart</CCardHeader>
                    <CCardBody>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <CChartPie
                                data={chartData}
                            />
                        )}
                    </CCardBody>
                </CCard>
            </CCol>
            {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Polar Area Chart</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
            {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Radar Chart</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: [
                  'Eating',
                  'Drinking',
                  'Sleeping',
                  'Designing',
                  'Coding',
                  'Cycling',
                  'Running',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
        </CRow>
    )
}

export default Charts
