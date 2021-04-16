
function findVariableName(input) {
    var name = ""

    name = values.find((el) => {
        return el.code === input
    });
    try {
        return name.desc;
    } catch (error) {
        return false;
    }
}
function findVariableUnit(input) {
    var name = ""

    name = values.find((el) => {
        return el.code === input
    });
    try {
        return name.units;
    } catch (error) {
        return false;
    }
}

function aboveWeight(variable, value) {
    if (value === "N/A") {
        return
    }

    var name = ""

    name = values.find((el) => {
        return (el.code === variable && el.filter.above === true)
    });
    try {
        if (name.units) {

            if (isTresholdReached(value, name.filter.treshold, name.filter.above)) {
                return "bold"
            }
            return;
        }
    } catch (error) {
        return;
    }
}

function aboveColor(variable, value) {

    if (value === "N/A") {
        return "#000"
    }

    var name = ""

    name = values.find((el) => {
        return (el.code === variable && el.filter.above === true)
    });
    try {
        if (name.units) {

            if (isTresholdReached(value, name.filter.treshold, name.filter.above)) {
                return getGradientColor(value, name.filter.minGrad, name.filter.maxGrad, true, name.filter.colorGrad)
            }
            return "#000";
        }
    } catch (error) {
        return "#000";
    }

}

function isTresholdReached(value, treshold, above) {
    if (above) {
        return (value >= treshold);
    } else {
        return (value <= treshold);
    }
}

function getGradientColor(value, min, max, lighter, color) {

    var gradFactor = 255 * (1 - (value - min) / (max - min));

    // console.log(value + "---" + min + "---" + max + "---" + lighter + "---" + color);
    if (lighter) {
        gradFactor = 255 * (value - min) / (max - min);
    }
    var gradMatrix = [0, 0, 0];
    switch (color) {
        case 'grey':
            gradMatrix = [1, 1, 1];
            break;
        case 'red':
            gradMatrix = [1, 0, 0];
            break;
        case 'green':
            gradMatrix = [0, 1, 0];
            break;
        case 'blue':
            gradMatrix = [0, 0, 1];
            break;
        case 'yellow':
            gradMatrix = [1, 1, 0];
            break;
        case 'cyan':
            gradMatrix = [0, 1, 1];
            break;
        case 'magenta':
            gradMatrix = [1, 0, 1];
            break;
        default:
            gradMatrix = [0, 0, 0];
    }
    var red = Math.round(gradFactor * gradMatrix[0]);
    var green = Math.round(gradFactor * gradMatrix[1]);
    var blue = Math.round(gradFactor * gradMatrix[2]);
    // console.log("rgb(" + red + "," + green + "," + blue + ")");
    return "rgb(" + red + "," + green + "," + blue + ")";
}







const values = [
    { code: "PPPP", desc: "Surface pressure, reduced", units: "hPa", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "E_PPP", desc: "Absolute error surface pressure", units: "hPa", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "TX", desc: "Max. temperature - within the last 12 hours", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "TTT", desc: "Temperature 2m above surface", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "E_TTT", desc: "Absolute error temperature 2m above surface", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Td", desc: "Dewpoint 2m above surface", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "E_Td", desc: "Absolute error dew point 2m above surface", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "TN", desc: "Min. temperature - within the last 12 hours", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "TG", desc: "Min. surface temperature at 5cm within the last 12 hours", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "TM", desc: "Mean temperature during the last 24 hours", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "T5cm", desc: "Temperature 5cm above surface", units: "°C", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "DD", desc: "Wind direction", units: "0 bis 360 Grad", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "E_DD", desc: "Absolute error wind direction", units: "00 bis 360", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FF", desc: "Wind speed", units: "kt", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "E_FF", desc: "Absolute error wind speed 10m above surface", units: "kt", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FX1", desc: "Max. wind gust within the last hour", units: "kt", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FX3", desc: "Max. wind gust within the last 3 hours", units: "kt", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FX625", desc: "Prob. : Occur. of gusts >= 25kn within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FX640", desc: "Prob. : Occur. of gusts >= 40kn within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FX655", desc: "Prob. : Occur. of gusts >= 55kn within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FXh", desc: "Max. wind gust within the last 12 hours", units: "kt", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FXh25", desc: "Prob. of wind gusts >= 25kn within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FXh40", desc: "Prob. of wind gusts >= 40kn within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "FXh55", desc: "Prob. of wind gusts >= 55kn within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "N", desc: "Total cloud cover", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Neff", desc: "Effective cloud cover", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Nh", desc: "High cloud cover (>7 km)", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Nm", desc: "Midlevel cloud cover (2-7 km)", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Nl", desc: "Low cloud cover (lower than 2 km)", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "N05", desc: "Cloud cover below 500 ft.", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "VV", desc: "Visibility", units: "hm", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "VV10", desc: "Prob. : Visibility below 1000m", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwM", desc: "Prob. for fog within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwM6", desc: "Prob. for fog within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwMh", desc: "Prob. for fog within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwMd", desc: "Prob. : Occur. of fog within the last 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "ww", desc: "Significant Weather", units: "-", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "ww3", desc: "Significant Weather of the last 3 hours", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "W1W2", desc: "Past weather during the last 6 hours", units: "-", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwP", desc: "Prob. : Occur. of precip. within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwP6", desc: "Prob. : Occur. of precip. within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwPh", desc: "Prob. : Occur. of precip. within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwPd", desc: "Prob. : Occur. of any precip. within the last 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwZ", desc: "Prob. : Occur. of drizzle within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwZ6", desc: "Prob. : Occur. of drizzle within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwZh", desc: "Prob. : Occur. of drizzle within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwD", desc: "Prob. : Occur. of stratiform precip. within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwD6", desc: "Prob. : Occur. of stratiform precip. within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwDh", desc: "Prob. : Occur. of stratiform precip. within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwC", desc: "Prob. : Occur. of convective precip. within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwC6", desc: "Prob. : Occur. of convective precip. within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwCh", desc: "Prob. : Occur. of convective precip. within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwT", desc: "Prob. : Occur. of thunderstorms within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwT6", desc: "Prob. : Occur. of thunderstorms within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwTh", desc: "Prob. : Occur. of thunderstorms within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwTd", desc: "Prob. : Occur. of thunderstorms within the last 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwS", desc: "Prob. : Occur. of solid precip. within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwS6", desc: "Prob. : Occur. of solid precip. within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwSh", desc: "Prob. : Occur. of solid precip. within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwL", desc: "Prob. : Occur. of liquid precip. within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwL6", desc: "Prob. : Occur. of liquid precip. within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwLh", desc: "Prob. : Occur. of liquid precip. within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwF", desc: "Prob. : Occur. of freezing rain within the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwF6", desc: "Prob. : Occur. of freezing rain within the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "wwFh", desc: "Prob. : Occur. of freezing rain within the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "DRR1", desc: "Duration of precip. within the last hour", units: "s", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR6c", desc: "Total precip. during the last 6 hours consistent with significant weather", units: "kg / m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRhc", desc: "Total precip. during the last 12 hours consistent with significant weather", units: "kg / m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRdc", desc: "Total precip. during the last 24 hours consistent with significant weather", units: "kg / m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR1c", desc: "Total precip. during the last hour consistent with significant weather", units: "kg/m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRS1c", desc: "Snow-Rain-Equivalent during the last hour", units: "kg/m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRL1c", desc: "Total liquid precip. during the last hour consistent with significant weather", units: "kg / m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR3c", desc: "Total precip. during the last 3 hours consistent with significant weather", units: "kg/m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRS3c", desc: "Snow-Rain-Equivalent during the last 3 hours", units: "kg/m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R101", desc: "Prob. of precip. > 0.1 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R102", desc: "Prob. of precip. > 0.2 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R103", desc: "Prob. of precip. > 0.3 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R105", desc: "Prob. of precip. > 0.5 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R107", desc: "Prob. of precip. > 0.7 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R110", desc: "Prob. of precip. > 1.0 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R120", desc: "Prob. of precip. > 2.0 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R130", desc: "Prob. of precip. > 3.0 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R150", desc: "Prob. of precip. > 5.0 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR1o1", desc: "Prob. of precip. > 10 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR1w1", desc: "Prob. of precip. > 15 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RR1u1", desc: "Prob. of precip. > 25 mm during the last hour", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R600", desc: "Prob. of precip. > 0.0mm during the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R602", desc: "Prob. of precip. > 0.2mm during the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R610", desc: "Prob. of precip. > 1.0 mm during the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "R650", desc: "Prob. of precip. > 5.0mm during the last 6 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Rh00", desc: "Prob. of precip. > 0.0mm during the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Rh02", desc: "Prob. of precip. > 0.2mm during the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Rh10", desc: "Prob. of precip. > 1.0mm during the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Rh50", desc: "Prob. of precip. > 5.0mm during the last 12 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "SunD", desc: "Yesterdays total sunshine duration", units: "s", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RSunD", desc: "Relative sunshine duration within the last 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "PSd00", desc: "Prob. : relative sunshine duration > 0 % within 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "PSd30", desc: "Prob. : relative sunshine duration > 30 % within 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "PSd60", desc: "Prob. : relative sunshine duration > 60 % within 24 hours", units: "% (0..100)", filter: { above: true, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "RRad1", desc: "Global irradiance within the last hour", units: "% (0..80)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "Rad1h", desc: "Global Irradiance", units: "kJ/m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "SunD1", desc: "Sunshine duration during the last Hour", units: "s", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "SunD3", desc: "Sunshine duration during the last three hours", units: "s/s", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "PEvap", desc: "Potential evapotranspiration within the last 24 hours", units: "kg / m2", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "WPc11", desc: "Optional significant weather (highest priority) during the last hour", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "WPc31", desc: "Optional significant weather (highest priority) during the last 3 hours", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "WPc61", desc: "Optional significant weather (highest priority) during the last 6 hours", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "WPch1", desc: "Optional significant weather (highest priority) during the last 12 hours", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
    { code: "WPcd1", desc: "Optional significant weather (highest priority) during the last 24 hours", units: "- (0..95)", filter: { above: false, treshold: 50, minGrad: 10, maxGrad: 100, colorGrad: 'green' } },
]
export { findVariableName, values as variables, findVariableUnit, aboveColor, aboveWeight }