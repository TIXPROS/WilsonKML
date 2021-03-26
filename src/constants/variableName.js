
function findVariableName(input) {
    var name = ""

    name = values.find((el) => {
        return el.id === input
    });
    try {
        return name.name;
    } catch (error) {
        return false;
    }
}
function findVariableUnit(input) {
    var name = ""

    name = values.find((el) => {
        return el.id === input
    });
    try {
        return name.unit;
    } catch (error) {
        return false;
    }
}



const values = [
    {
        id: "PPPP",
        name: "Surface pressure, reduced",
        unit: "Pa"
    },
    {
        id: "E_PPP",
        name: "Absolute error surface pressure",
        unit: "Pa"
    },
    {
        id: "TX",
        name: "Max. temperature - within the last 12 hours",
        unit: "Kelvin"
    },
    {
        id: "TTT",
        name: "Temperature 2m above surface",
        unit: "Kelvin"
    },
    {
        id: "E_TTT",
        name: "Absolute error temperature 2m above surface",
        unit: "Kelvin"
    },
    {
        id: "Td",
        name: "Dewpoint 2m above surface",
        unit: "Kelvin"
    },
    {
        id: "E_Td",
        name: "Absolute error dew point 2m above surface",
        unit: "Kelvin"
    },
    {
        id: "TN",
        name: "Min. temperature - within the last 12 hours",
        unit: "Kelvin"
    },
    {
        id: "TG",
        name: "Min. surface temperature at 5cm within the last 12 hours",
        unit: "Kelvin"
    },
    {
        id: "TM",
        name: "Mean temperature during the last 24 hours",
        unit: "Kelvin"
    },
    {
        id: "T5cm",
        name: "Temperature 5cm above surface",
        unit: "Kelvin"
    },
    {
        id: "DD",
        name: "Wind direction",
        unit: "0 bis 360 Grad"
    },
    {
        id: "E_DD",
        name: "Absolute error wind direction",
        unit: "00 bis 360"
    },
    {
        id: "FF",
        name: "Wind speed",
        unit: "m/s"
    },
    {
        id: "E_FF",
        name: "Absolute error wind speed 10m above surface",
        unit: "m/s"
    },
    {
        id: "FX1",
        name: "Max. wind gust within the last hour",
        unit: "m/s"
    },
    {
        id: "FX3",
        name: "Max. wind gust within the last 3 hours",
        unit: "m/s"
    },
    {
        id: "FX625",
        name: "Prob. : Occur. of gusts >= 25kn within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "FX640",
        name: "Prob. : Occur. of gusts >= 40kn within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "FX655",
        name: "Prob. : Occur. of gusts >= 55kn within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "FXh",
        name: "Max. wind gust within the last 12 hours",
        unit: "m/s"
    },
    {
        id: "FXh25",
        name: "Prob. of wind gusts >= 25kn within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "FXh40",
        name: "Prob. of wind gusts >= 40kn within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "FXh55",
        name: "Prob. of wind gusts >= 55kn within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "N",
        name: "Total cloud cover",
        unit: "% (0..100)"
    },
    {
        id: "Neff",
        name: "Effective cloud cover",
        unit: "% (0..100)"
    },
    {
        id: "Nh",
        name: "High cloud cover (>7 km)",
        unit: "% (0..100)"
    },
    {
        id: "Nm",
        name: "Midlevel cloud cover (2-7 km)",
        unit: "% (0..100)"
    },
    {
        id: "Nl",
        name: "Low cloud cover (lower than 2 km)",
        unit: "% (0..100)"
    },
    {
        id: "N05",
        name: "Cloud cover below 500 ft.",
        unit: "% (0..100)"
    },
    {
        id: "VV",
        name: "Visibility",
        unit: "m"
    },
    {
        id: "VV10",
        name: "Prob. : Visibility below 1000m",
        unit: "% (0..100)"
    },
    {
        id: "wwM",
        name: "Prob. for fog within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwM6",
        name: "Prob. for fog within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwMh",
        name: "Prob. for fog within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwMd",
        name: "Prob. : Occur. of fog within the last 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "ww",
        name: "Significant Weather",
        unit: "-"
    },
    {
        id: "ww3",
        name: "Significant Weather of the last 3 hours",
        unit: "- (0..95)"
    },
    {
        id: "W1W2",
        name: "Past weather during the last 6 hours",
        unit: "-"
    },
    {
        id: "wwP",
        name: "Prob. : Occur. of precip. within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwP6",
        name: "Prob. : Occur. of precip. within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwPh",
        name: "Prob. : Occur. of precip. within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwPd",
        name: "Prob. : Occur. of any precip. within the last 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwZ",
        name: "Prob. : Occur. of drizzle within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwZ6",
        name: "Prob. : Occur. of drizzle within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwZh",
        name: "Prob. : Occur. of drizzle within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwD",
        name: "Prob. : Occur. of stratiform precip. within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwD6",
        name: "Prob. : Occur. of stratiform precip. within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwDh",
        name: "Prob. : Occur. of stratiform precip. within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwC",
        name: "Prob. : Occur. of convective precip. within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwC6",
        name: "Prob. : Occur. of convective precip. within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwCh",
        name: "Prob. : Occur. of convective precip. within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwT",
        name: "Prob. : Occur. of thunderstorms within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwT6",
        name: "Prob. : Occur. of thunderstorms within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwTh",
        name: "Prob. : Occur. of thunderstorms within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwTd",
        name: "Prob. : Occur. of thunderstorms within the last 24 hours ",
        unit: "% (0..100)"
    },
    {
        id: "wwS",
        name: "Prob. : Occur. of solid precip. within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwS6",
        name: "Prob. : Occur. of solid precip. within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwSh",
        name: "Prob. : Occur. of solid precip. within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwL",
        name: "Prob. : Occur. of liquid precip. within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwL6",
        name: "Prob. : Occur. of liquid precip. within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwLh",
        name: "Prob. : Occur. of liquid precip. within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwF",
        name: "Prob. : Occur. of freezing rain within the last hour",
        unit: "% (0..100)"
    },
    {
        id: "wwF6",
        name: "Prob. : Occur. of freezing rain within the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "wwFh",
        name: "Prob. : Occur. of freezing rain within the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "DRR1",
        name: "Duration of precip. within the last hour",
        unit: "s"
    },
    {
        id: "RR6c",
        name: "Total precip. during the last 6 hours consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RRhc",
        name: "Total precip. during the last 12 hours consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RRdc",
        name: "Total precip. during the last 24 hours consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RR1c",
        name: "Total precip. during the last hour consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RRS1c",
        name: "Snow-Rain-Equivalent during the last hour",
        unit: "kg / m2"
    },
    {
        id: "RRL1c",
        name: "Total liquid precip. during the last hour consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RR3c",
        name: "Total precip. during the last 3 hours consistent with significant weather",
        unit: "kg / m2"
    },
    {
        id: "RRS3c",
        name: "Snow-Rain-Equivalent during the last 3 hours",
        unit: "kg/m2"
    },
    {
        id: "R101",
        name: "Prob. of precip. > 0.1 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R102",
        name: "Prob. of precip. > 0.2 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R103",
        name: "Prob. of precip. > 0.3 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R105",
        name: "Prob. of precip. > 0.5 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R107",
        name: "Prob. of precip. > 0.7 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R110",
        name: "Prob. of precip. > 1.0 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R120",
        name: "Prob. of precip. > 2.0 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R130",
        name: "Prob. of precip. > 3.0 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R150",
        name: "Prob. of precip. > 5.0 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "RR1o1",
        name: "Prob. of precip. > 10 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "RR1w1",
        name: "Prob. of precip. > 15 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "RR1u1",
        name: "Prob. of precip. > 25 mm during the last hour",
        unit: "% (0..100)"
    },
    {
        id: "R600",
        name: "Prob. of precip. > 0.0mm during the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "R602",
        name: "Prob. of precip. > 0.2mm during the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "R610",
        name: "Prob. of precip. > 1.0 mm during the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "R650",
        name: "Prob. of precip. > 5.0mm during the last 6 hours",
        unit: "% (0..100)"
    },
    {
        id: "Rh00",
        name: "Prob. of precip. > 0.0mm during the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "Rh02",
        name: "Prob. of precip. > 0.2mm during the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "Rh10",
        name: "Prob. of precip. > 1.0mm during the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "Rh50",
        name: "Prob. of precip. > 5.0mm during the last 12 hours",
        unit: "% (0..100)"
    },
    {
        id: "SunD",
        name: "Yesterdays total sunshine duration",
        unit: "s"
    },
    {
        id: "RSunD",
        name: "Relative sunshine duration within the last 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "PSd00",
        name: "Prob. : relative sunshine duration > 0 % within 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "PSd30",
        name: "Prob. : relative sunshine duration > 30 % within 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "PSd60",
        name: "Prob. : relative sunshine duration > 60 % within 24 hours",
        unit: "% (0..100)"
    },
    {
        id: "RRad1",
        name: "Global irradiance within the last hour",
        unit: "% (0..80)"
    },
    {
        id: "Rad1h",
        name: "Global Irradiance",
        unit: "kJ/m2"
    },
    {
        id: "SunD1",
        name: "Sunshine duration during the last Hour",
        unit: "s"
    },
    {
        id: "SunD3",
        name: "Sunshine duration during the last three hours",
        unit: "s/s"
    },
    {
        id: "PEvap",
        name: "Potential evapotranspiration within the last 24 hours",
        unit: "kg / m2"
    },
    {
        id: "WPc11",
        name: "Optional significant weather (highest priority) during the last hour",
        unit: "- (0..95)"
    },
    {
        id: "WPc31",
        name: "Optional significant weather (highest priority) during the last 3 hours",
        unit: "- (0..95)"
    },
    {
        id: "WPc61",
        name: "Optional significant weather (highest priority) during the last 6 hours",
        unit: "- (0..95)"
    },
    {
        id: "WPch1",
        name: "Optional significant weather (highest priority) during the last 12 hours",
        unit: "- (0..95)"
    },
    {
        id: "WPcd1",
        name: "Optional significant weather (highest priority) during the last 24 hours",
        unit: "- (0..95)"
    },
]

export { findVariableName, values as variables , findVariableUnit}