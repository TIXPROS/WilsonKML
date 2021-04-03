import { Button, CircularProgress, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { findVariableName, findVariableUnit } from '../constants/variableName' //Importation des fonctions permettant de retrouver les noms et les unités des variables 
import { findGroup } from "../constants/unityConvert"

import { convert } from "./Parser";//Importation de l'extracteur redéfnie
import { filter } from "../constants/filter";//Importation de la fonction permettant de filtrer


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
            supp: null, //Données suppléméntaires de locations,
            filter: "All",
            current: {}
        }
    }

    //Fonction de récupération de fichier
    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            var data = convert(text)
            if (data.data) {
                this.setState({ data: data.data, filed: true, supp: data.supp })
            } else {
                this.setState({ filed: false })
            }

        };
        e.target.files[0] && reader.readAsText(e.target.files[0])
    }


    //Fonction de compilation des données
    async range() {
        await new Promise(r => setTimeout(r, 2000));
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

            this.setState({ finale: final, keys: Object.keys(final[0].values[0].values), loading: false })
        })
    }

    //Rendu visuel
    render() {

        return (
            <div>
                <Typography variant="h3" component="h2">Convertisseur Kml to JS</Typography>
                <div>
                    <Input type="file" onChange={(e) => this.showFile(e)} inputProps={{ accept: '.xml,.kml', style: { height: 30 } }} style={{ marginTop: 20, }} />
                </div>
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
                    style={{ marginTop: 10, marginBottom: 10 }}
                >Valider</Button>

                <div>
                    {
                        this.state.loading && <CircularProgress color="secondary" style={{ marginTop: 15 }} />
                    }
                </div>

                <div>
                    {
                        this.state.finale.length > 0 && this.state.filed &&
                        <div>
                            <div style={{ margin: 20 }} >
                                <div style={{ display: "flex", flexDirection: "row" }} >
                                    <Typography style={{ fontWeight: 'bold', marginRight: 5 }} >Origin : </Typography>
                                    <Typography>EBBR</Typography>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }} >
                                    <Typography style={{ fontWeight: 'bold', marginRight: 5, }} >Issuer : </Typography>
                                    <Typography>{this.state.supp.issuer}</Typography>
                                    <Typography style={{ fontWeight: 'bold', marginRight: 5, marginLeft: 20 }} >ProductID : </Typography>
                                    <Typography>{this.state.supp.productID}</Typography>
                                    <Typography style={{ fontWeight: 'bold', marginRight: 5, marginLeft: 20 }} >IssueTime : </Typography>
                                    <Typography>{this.state.supp.issueTime}</Typography>
                                    {/* <Typography style={{ fontWeight: 'bold', marginRight: 5, marginLeft: 20 }} >Origin : </Typography>
                                    <Typography>EBBR</Typography> */}
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row" }} >

                                <div style={styles.selector} >
                                    <InputLabel id="label">Location</InputLabel>
                                    <Select labelId="label" id="select" value="EBBR">
                                        <MenuItem value="EBBR">EBBR</MenuItem>
                                    </Select>
                                </div>

                                <div style={styles.selector} >
                                    <InputLabel id="label">Parameter group</InputLabel>
                                    <Select labelId="label" id="select" value={this.state.filter} onChange={(val) => { this.setState({ filter: val.target.value }) }} >
                                        {
                                            sectionTitles.map((el, index) => (
                                                <MenuItem key={index} value={el}>{el}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </div>
                            </div>
                        </div >
                    }
                    {
                        this.state.finale.length > 0 && this.state.filed && <div
                        >

                            <table
                                style={{
                                    display: "block",
                                    maxHeight: 600,
                                    overflowY: "scroll",
                                    overflowX: "scroll",
                                    maxWidth: "96%",
                                    marginLeft: "2%"
                                }}
                            >
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
                                        filter(this.state.filter, this.state.keys).map((elem, ind) => (
                                            <tr key={ind} >
                                                <td style={{ left: 0, position: "sticky", backgroundColor: "#1a8cff" }} >
                                                    <div style={{ fontWeight: 'bold', color: "#fff", width: 300 }} >
                                                        {findVariableName(elem) === false ? elem : (findVariableName(elem) + "\n(" + findVariableUnit(elem) + ")")}
                                                    </div>
                                                </td>
                                                {
                                                    this.state.finale.map((_el) => (
                                                        _el.values.map((el, i) => (
                                                            <td onClick={() => { this.setState({ current: { id: i, variable: elem } }) }} style={{ cursor: "pointer", backgroundColor: (i === this.state.current.id || elem === this.state.current.variable) && "#70b7ff" }} key={i} >{el.values[elem] === "-" ? "N/A" : findGroup(elem, el.values[elem])}</td>
                                                        ))
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <Typography style={{ textAlign: 'left', marginLeft: '2%' }} >{"Showing 1 to " + this.state.keys.length + " of " + this.state.keys.length + " pages"}</Typography>
                        </div>
                    }
                </div >
            </div >
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