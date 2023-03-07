import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const Stats = ({ pokémon }) => {
    const labels = pokémon.stats.map(stat => {
        if (stat.stat.name === 'special-attack') return 'sp-atk';
        else if (stat.stat.name === 'defense') return 'def';
        else if (stat.stat.name === 'special-defense') return 'sp-def';
        else return stat.stat.name;
    } );
    const dataArr = pokémon.stats.map(stat => stat.base_stat);
    
    const data = {
        labels,
        datasets: [{
            label: 'Base Stats',
            data: dataArr
        }]
    }   

    const options = {
        plugins: {
            legend: {
                display: false
            },
           
        },
        // maintainAspectRatio: true,
        // responsive: true,
        scales: {
            r: {
              pointLabels: {
                color: 'purple',
                font: {
                  size: 25,
                  style: 'italic'
                }
              },
              grid: {
                  color: 'black',
              }
            },
        },
        layout: {
            padding: 30
          },
    }

    return (
        <div id='chart'>
            <Radar
                data={data}
                options={options}
            />
        </div>
    )
};

export default Stats;
