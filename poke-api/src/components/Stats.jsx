import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const Stats = ({ pokémon }) => {
    const labels = pokémon.stats.map(stat => {
        if (stat.stat.name === 'special-attack') return 'sp-atk';
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
        scales: {
            r: {
              pointLabels: {
                color: 'green',
                font: {
                  size: 25,
                  style: 'italic'
                }
              }
            }
          }
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
