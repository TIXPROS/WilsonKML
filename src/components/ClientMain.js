import { Button, CircularProgress, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { findVariableName, findVariableUnit } from '../constants/variableName' //Importation des fonctions permettant de retrouver les noms et les unités des variables 


import { convert } from "./Parser";//Importation de l'extracteur redéfnie


const sectionTitles = [
    "All",
    "Wind",
    "Wind speed threshold",
    "Wind gusts 1h",
    "Wind gusts 3h",
    "Temperature",
    "Visibility",
];
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filed: false, //Controleur de l'existence d'un fichier chargé
            data: [], //les lignes de données
            days: [], //les jours
            finale: [], //données compilées
            keys: [], //les variables (PPPP et autres)
            loading: false, //Controleur du chargement de la page
        }
    }

    //Fonction de récupération de fichier
    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            var data = convert(text)
            if (data) {
                this.setState({ data: data, filed: true })
            } else {
                this.setState({ filed: false })
            }

        };
        e.target.files[0] && reader.readAsText(e.target.files[0])
    }


    //Fonction de compilation des données
    async range() {
        await new Promise(r => setTimeout(r, 3000));
        var days = []
        var final = []
        this.state.data.forEach(element => {
            var existed = days.indexOf(element.date.split('T')[0])

            if (existed === -1) {
                var dayTMP = element.date.split('T')[0]
                days.push(dayTMP)
            }
        });
        this.setState({
            days: days
        }, () => {
            //Extraction du Jour/Mois/Années des dates
            days.forEach((element) => {
                var filteredHour = this.state.data.filter((el) => el.date.split('T')[0] === element)
                var tmp = {}
                tmp['date'] = element;
                tmp["values"] = filteredHour

                final.push(tmp);
            });

            this.setState({ finale: final, keys: Object.keys(final[0].values[0].values), loading: false }, () => { })
        })
    }

    //Rendu visuel
    render() {

        return (
            <div>
                <Typography variant="h3" component="h2">Convertisseur Kml to JS</Typography>
                <Input type="file" onChange={(e) => this.showFile(e)} inputProps={{ accept: '.xml,.kml' }} style={{ marginTop: 20 }} />
                <br />
                <Button
                    title='Valider'
                    onClick={() => {
                        if (this.state.filed) {
                            this.setState({ loading: true }, () => { this.range() })
                        } else {
                            alert('Veuillez choisir un fichier à convertir')
                        }
                    }}
                    color="primary"
                    variant="contained"
                    style={{ marginTop: 10 }}
                >Valider</Button>

                <div>
                    {
                        this.state.loading && <CircularProgress color="secondary" style={{ marginTop: 15 }} />
                    }
                </div>

                <div>
                    {
                        this.state.finale.length > 0 && this.state.filed &&
                        <div style={{ display: "flex", flexDirection: "row" }} >

                            <div style={styles.selector} >
                                <InputLabel id="label">Location</InputLabel>
                                <Select labelId="label" id="select" value="EBBR">
                                    <MenuItem value="EBBR">EBBR</MenuItem>
                                </Select>
                            </div>

                            <div style={styles.selector} >
                                <InputLabel id="label">Parameter group</InputLabel>
                                <Select labelId="label" id="select" value="All">
                                    {
                                        sectionTitles.map((el, index) => (
                                            <MenuItem key={index} value={el}>{el}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </div>
                        </div>
                    }
                    {
                        <div >

                            <table>
                                <thead  >
                                    <tr>
                                        {
                                            this.state.finale.length > 0 && this.state.filed && <th style={{ top: 0 }} ></th>
                                        }
                                        {
                                            this.state.finale.map((_el) => (
                                                _el.values.map((el, id) => (
                                                    <th style={{ top: 0 }} key={id} >
                                                        {_el.date.slice(8, 10)}<br />
                                                        {el.date.split('T')[1].slice(0, 2) + "Z"}
                                                    </th>
                                                ))
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.keys.map((elem, ind) => (
                                            <tr key={ind} >
                                                <td style={{ fontWeight: 'bold', color: "#fff", backgroundColor: "#1a8cff", left: 0, position: "sticky" }} >
                                                    {findVariableName(elem) === false ? elem : (findVariableName(elem) + "\n(" + findVariableUnit(elem) + ")")}
                                                </td>
                                                {
                                                    this.state.finale.map((_el) => (
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

const styles = {
    selector: {
        displey: "flex",
        flexDirection: 'row',
        margin: 15
    }
}

export default Main;