/* eslint-disable no-unused-vars */
import { Backdrop, Button, CircularProgress, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { findVariableName, findVariableUnit, aboveColor, aboveWeight } from '../constants/variableName' //Importation des fonctions permettant de retrouver les noms et les unités des variables 
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
const Location = [
    { id: "06451", Name: "EBBR", FicKML: "MOSMIX_LATEST_06451.kml", color: "#1a8cff" },
    { id: "06450", Name: "EBAW", FicKML: "MOSMIX_LATEST_06450.kml", color: "#D473D4" },
    { id: "06449", Name: "EBCI", FicKML: "MOSMIX_LATEST_06449.kml", color: "#08CC0A" },
    { id: "06478", Name: "EBLG", FicKML: "MOSMIX_LATEST_06478.kml", color: "#00BFFF" },
    { id: "06407", Name: "EBOS", FicKML: "MOSMIX_LATEST_06407.kml", color: "#785e2f" }

]
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filed: false, //Controleur de l'existence d'un fichier chargé
            data: [], //les lignes de données
            days: [], //les jours
            finale: [], //données compilées
            keys: [], //les variables (PPPP et autres)
            loading: true, //Controleur du chargement de la page
            supp: null, //Données suppléméntaires de locations,
            filter: "All",
            current: {},
            files: null,
            currentLocation: "EBBR",
            currentColor: "#000"
        }
    }

    componentDidMount() {
        // fetch(process.env.PUBLIC_URL + "/mosmix_data/MOSMIX_LATEST_06407.kml")
        //     .then(async response => console.log(await response.text()))
        //     .catch((err) => {
        //         alert('Fichier inexistant ou incorrect')
        //         console.log(err);
        //     })
        this.showFile("EBBR")
    }


    //Fonction de récupération de fichier en texte
    async showFile(name) {

        var firstLocationName = Location.find((el) => (el.Name === name))

        // console.log(firstLocationName);

        fetch(process.env.PUBLIC_URL + "/mosmix_data/" + firstLocationName.FicKML)
            .then(async response => {
                var text = await response.text()
                // console.log(text);
                var data = convert(text)
                if (data.data) {
                    this.setState({ data: data.data, filed: true, supp: data.supp })
                } else {
                    this.setState({ filed: false })
                }
                this.range()
            })
            .catch((err) => {
                alert('Fichier inexistant ou incorrect')
                console.log(err);
            })
    }

    //chargement des fichiers du dossier
    // loadFolder = async (e) => {



    //     var folder = e.target.files
    //     var filterKML = [...folder].filter((el) => (el.type === "application/vnd.google-earth.kml+xml"))
    //     var firstLocationName = Location.find((el) => (el.FicKML === filterKML[0].name))

    //     this.setState({ files: filterKML, currentLocation: firstLocationName.Name }, () => {
    //         this.showFile(filterKML[0])
    //     })

    // }


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

    findColor() {
        var data = Location.find((el) => (el.Name === this.state.currentLocation))
        return data.color
    }

    //Rendu visuel
    render() {
        const color = this.findColor()

        return (
            <div>
                <Typography variant="h3" component="h2">Convertisseur Kml to JS</Typography>
                {/* <div>
                    <Input type="file" onChange={(e) => this.loadFolder(e)} inputProps={{ webkitdirectory: "", directory: "", style: { height: 30 } }} style={{ marginTop: 20, }} />
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
                >Valider</Button> */}

                <div>
                    {/* {
                        this.state.loading && <CircularProgress color="secondary" style={{ marginTop: 15 }} />
                    } */}
                    {
                        this.state.loading &&
                        <Backdrop /*className={classes.backdrop}*/ open={this.state.loading} style={{ zIndex: 1500 }} >
                            <CircularProgress color="secondary" />
                        </Backdrop>
                    }
                </div>

                <div>
                    {
                        this.state.finale.length > 0 && this.state.filed &&
                        <div>
                            <div style={{ margin: 20 }} >
                                <div style={{ display: "flex", flexDirection: "row" }} >
                                    <Typography style={{ fontWeight: 'bold', marginRight: 5 }} >Origin : </Typography>
                                    <Typography>{this.state.currentLocation}</Typography>
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
                                    <Select labelId="label" id="select" value={this.state.currentLocation}
                                        onChange={(val) => {
                                            this.setState({ currentLocation: val.target.value }, () => {

                                                var name = Location.find((el) => (el.Name === val.target.value))
                                                // var file = this.state.files.find((el) => (el.name === name.FicKML))

                                                this.showFile(name.Name)

                                                if (this.state.filed) {
                                                    this.setState({ loading: true }, () => { this.range() })
                                                } else {
                                                    alert('Veuillez choisir un fichier à convertir')
                                                }
                                            })
                                        }}
                                    >
                                        {
                                            Location.map((el, index) => (
                                                <MenuItem key={index} value={el.Name}>{el.Name}</MenuItem>
                                            ))
                                        }
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
                            <div style={{ backgroundColor: color, width: 330, height: 55, position: "absolute", zIndex: 1111, left: "2%" }} ></div>

                            <table
                                style={{
                                    display: "block",
                                    maxHeight: 600,
                                    overflowY: "scroll",
                                    overflowX: "scroll",
                                    maxWidth: "96%",
                                    marginLeft: "2%",
                                    position: 'relative'
                                }}
                            >
                                <thead  >
                                    <tr>
                                        {
                                            this.state.finale.length > 0 && this.state.filed &&
                                            <th style={{ top: 0, backgroundColor: color }} ></th>
                                        }
                                        {
                                            this.state.finale.map((_el) => (
                                                _el.values.map((el, id) => (
                                                    <th style={{ top: 0, backgroundColor: color }} key={id} >
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
                                                <td style={{ left: 0, position: "sticky", backgroundColor: color }} >
                                                    <div style={{ fontWeight: 'bold', color: "#fff", width: 300 }} >
                                                        {findVariableName(elem) === false ? elem : (findVariableName(elem) + "\n(" + findVariableUnit(elem) + ")")}
                                                    </div>
                                                </td>
                                                {
                                                    this.state.finale.map((_el) => (
                                                        _el.values.map((el, i) => (
                                                            <td onClick={() => { this.setState({ current: { id: i, variable: elem } }) }}

                                                                style={{ fontWeight: aboveWeight(elem, el.values[elem] === "-" ? "N/A" : findGroup(elem, el.values[elem])), color: aboveColor(elem, el.values[elem] === "-" ? "N/A" : findGroup(elem, el.values[elem])), cursor: "pointer", backgroundColor: (i === this.state.current.id || elem === this.state.current.variable) && "#70b7ff" }}

                                                                key={i} >{el.values[elem] === "-" ? "N/A" : findGroup(elem, el.values[elem])}</td>
                                                        ))
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <Typography style={{ textAlign: 'left', marginLeft: '2%' }} >{"Showing 1 to " + filter(this.state.filter, this.state.keys).length + " of " + this.state.keys.length + " pages"}</Typography>
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