const parser = require('xml2js') //Module d'extraction des données du fichiers KML ou XML

const convert = (value) => {
    try {
        var finalData = []

        parser.parseString(value, (err, result) => {

            //Extraction des jours
            let days = result["kml:kml"]['kml:Document'][0]['kml:ExtendedData'][0]['dwd:ProductDefinition'][0]['dwd:ForecastTimeSteps'][0]['dwd:TimeStep'];

            //Extraction des données
            let data = result["kml:kml"]['kml:Document'][0]['kml:Placemark'][0]['kml:ExtendedData'][0]["dwd:Forecast"];

            var tmpData = [];

            //Découpage des données(les entrées étant chacune une unique ligne de caratères, il faut les découper)
            data.forEach((element) => {


                let tmp = element['dwd:value'][0].split(/\s+/);

                let filter = tmp.filter(function (el) {
                    return el !== ""
                });


                tmpData.push([element["$"]['dwd:elementName'], filter])
            });
            //Epuration des dates
            days.forEach((element, index) => {
                let jsonObject = {};
                let tmp = {}
                jsonObject.date = element;
                tmpData.forEach(element => {
                    tmp[element[0]] = element[1][index]
                });
                jsonObject.values = tmp
                finalData.push(jsonObject)
            });

        })
        return finalData
    } catch (error) {
        console.log(error);
        alert('Le fichier choisi est incompatible')
        return false;
    }
}

export { convert };