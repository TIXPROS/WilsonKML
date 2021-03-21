import { CircularProgress, Modal } from '@material-ui/core';
import React, { Component } from 'react';
import { Bar } from '@reactchartjs/react-chart.js'


import { convert } from "./Parser";
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filed: false,
            data: [],
            days: [],
            finale: [],
            keys: [],
            loading: false,
            modal: false,
            current: {}
        }
    }

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            var data = convert(text)
            // console.log(data);
            if (data) {
                this.setState({ data: data, filed: true })
            } else {
                this.setState({ filed: false })
            }

        };
        reader.readAsText(e.target.files[0])
    }
    async range() {
        await new Promise(r => setTimeout(r, 3000));
        var days = []
        var final = []
        this.state.data.forEach(element => {
            // console.log(element.date.split('T')[0]);
            var existed = days.indexOf(element.date.split('T')[0])

            if (existed === -1) {
                var dayTMP = element.date.split('T')[0]
                days.push(dayTMP)
            }
        });
        this.setState({
            days: days
        }, () => {
            days.forEach((element) => {
                var filteredHour = this.state.data.filter((el) => el.date.split('T')[0] === element)
                var tmp = {}
                tmp['date'] = element;
                tmp["values"] = filteredHour

                final.push(tmp);
            });
            // console.log(final[0].values[0].values);

            this.setState({ finale: final, keys: Object.keys(final[0].values[0].values), loading: false }, () => { })
        })
        console.log(final[0]);
    }


    convertDate(date) {
        var tmp = new Date(date)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var final = tmp.toLocaleDateString('fr-FR', options)
        return (final.charAt(0).toUpperCase() + final.slice(1));
        // console.log(tmp);
    }


    setChart(index, variable) {
        // console.log(this.state.finale[0].values.filter((el) => {
        //     return el.date
        // }));
        const labels = this.state.finale[this.state.current.index].values.map((el) => (el.date.split('T')[1].slice(0, 2) + "Z"))
        const data = this.state.finale[this.state.current.index].values.map((el) => (el.values[this.state.current.variable]))

        const state = {
            labels: labels,
            datasets: [
                {
                    label: this.state.current.variable,
                    backgroundColor: '#f50057',
                    // borderColor: 'rgba(0,0,0,1)',
                    // borderWidth: 2,
                    data: data
                }
            ]
        }
        return (
            <Modal
                open={() => { this.setState({ modal: true }) }}
                onClose={() => { this.setState({ modal: false }) }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* {body} */}
                <div style={{ backgroundColor: '#fff', width: 800, borderColor: "#fff" }} >

                    <button type="button" onClick={() => { this.setState({ modal: false }) }} style={{ backgroundColor: "red", alignSelf: "center", fontSize: 13, fontWeight: "bold" }} >Fermer</button>
                    <Bar
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: this.state.current.date,
                                fontSize: 20
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </Modal>
        )

    }

    render = () => {

        return (
            <div>
                <h2>Convertisseur Kml to JS</h2>

                <input type="file" onChange={(e) => this.showFile(e)} accept='.xml,.kml' />
                {/* <DataTable
                    title="Arnold Movies"
                    columns={columns}
                    data={this.state.data}
                /> */}
                <button title='Valider' onClick={() => {
                    if (this.state.filed) {
                        this.setState({ loading: true }, () => { this.range() })
                    } else {
                        alert('Veuillez choisir un fichier à convertir')
                    }
                }} >Valider</button>

                <div>
                    {
                        this.state.loading && <CircularProgress color="secondary" />
                    }
                </div>

                <div>
                    {
                        this.state.filed && this.state.modal && this.state.finale.length > 0 && this.setChart()
                    }
                    {
                        <div >

                            <table>
                                <thead  >
                                    <tr>
                                        {
                                            this.state.finale.length > 0 && this.state.filed && <th ></th>
                                        }
                                        {
                                            this.state.finale.map((_el, index) => (
                                                _el.values.map((el, id) => (
                                                    <th key={id} >{_el.date.slice(8, 10)}</th>
                                                ))
                                            ))
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            this.state.finale.length > 0 && this.state.filed && <th style={{ top: 40 }} ></th>
                                        }
                                        {
                                            this.state.finale.map((_el, index) => (
                                                _el.values.map((el, id) => (
                                                    <th style={{ top: 40 }} key={id} >{el.date.split('T')[1].slice(0, 2) + "Z"}</th>
                                                ))
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.keys.map((elem, ind) => (
                                            <tr key={ind} >
                                                <td style={{ fontWeight: 'bold', display: 'block' }} >
                                                    {elem}
                                                    {/* <br /><button type="button" onClick={() => { this.setState({ modal: true, current: { variable: elem, index: index, date: this.convertDate(_el.date) } }) }} style={{ backgroundColor: "#3f51b5", padding: 2, marginLeft: 5, alignSelf: "center", fontSize: 10, fontWeight: "bold", zIndex: 0 }} >Voir le graphe</button> */}
                                                </td>
                                                {
                                                    this.state.finale.map((_el, index) => (
                                                        _el.values.map((el, i) => (
                                                            <td key={i} >{el.values[elem] === "-" ? "N/A" : el.values[elem]}</td>
                                                        ))
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Main;