'use client';
import { useEffect, useState } from 'react'
import { fetchMaximoMinimoProductos } from '@/services/api';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function page() {

    const [charData, setCharData] = useState<any>({
        labels: [],
        datasets: [
            {
                label: 'Cantidad minima de producto',
                data: [],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }
        ]
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchMaximoMinimoProductos().then((data) => {

            const labels = data.map((item: any) => item.productType);
            const minData = data.map((item: any) => item.valor_minimo);
            const maxData = data.map((item: any) => item.valor_maximo);

            setCharData({
                labels: labels,
                datasets: [
                    {
                        label: 'Valor mínimo',
                        data: minData,
                        borderColor: 'rgb(255, 99, 132)',
                    }
                ]
            });
            console.log(data);
        });
    }, []);



    return (
        <div>
            {
                charData ? (
                    <div> <Line data={charData} /></div>
                ) : (
                    <p>Informacion cargando....</p>
                )
            }
        </div>
    )
}