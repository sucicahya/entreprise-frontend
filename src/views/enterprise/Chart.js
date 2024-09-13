import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {CChartPie} from '@coreui/react-chartjs'
import auth from '../../helpers/auth';

const Charts = () => {
    const [jenisDatabase, setJenisDatabase] = useState([]);
    const [loading, setLoading] = useState(true);

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

    function getPastelColor() {
        const hue = Math.floor(Math.random() * 360); 
        const saturation = 10 + Math.random() * 30; 
        const lightness = 50 + Math.random() * 10; 
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }      

    const chartData = {
        labels: jenisDatabase.map(item => item.db || 'Unknown'), 
        datasets: [
            {
                data: jenisDatabase.map(item => item.total || 0), 
                backgroundColor: jenisDatabase.map(() => getPastelColor()),
                // hoverBackgroundColor: jenisDatabase.map(() => getRandomColor()),
            },
        ],
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>Pie Chart</CCardHeader>
                    <CCardBody>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div style={{ width: '100%', height: '300px' }}>
                                <CChartPie
                                    data={chartData}
                                    style={{ width: '100%', height: '100%' }} // Mengatur lebar dan tinggi chart
                                />
                            </div>
                        )}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default auth(Charts)