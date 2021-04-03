const variablesGroups = [
    {
        variable: "PPPP",
        group: 1
    },
    {
        variable: "E_PPP",
        group: 1
    },
    {
        variable: "TX",
        group: 2
    },
    {
        variable: "TTT",
        group: 2
    },
    {
        variable: "E_TTT",
        group: 2
    },
    {
        variable: "Td",
        group: 2
    },
    {
        variable: "E_Td",
        group: 2
    },
    {
        variable: "TN",
        group: 2
    },
    {
        variable: "TG",
        group: 2
    },
    {
        variable: "TM",
        group: 2
    },
    {
        variable: "T5cm",
        group: 2
    },
    {
        variable: "FF",
        group: 3
    },
    {
        variable: "E_FF",
        group: 3
    },
    {
        variable: "FX1",
        group: 3
    },
    {
        variable: "FX3",
        group: 3
    },
    {
        variable: "FXh",
        group: 3
    },
    {
        variable: "VV",
        group: 4
    }
]
function findGroup(variable, value) {



    var tmp = null
    tmp = variablesGroups.find((el) => el.variable === variable)

    if (tmp) {
        switch (tmp.group) {
            case 1:
                return convert_1(value)

            case 2:
                return convert_2(value)

            case 3:
                return convert_3(value)
            case 4:
                return convert_4(value)

            default:
                return value
        }
    } else {
        return value
    }
}

function convert_1(val) {
    return (val / 100)
}

function convert_2(val) {
    return (val - 273.15)
}

function convert_3(val) {
    return (val * 1.94384)
}
function convert_4(val) {
    return (val / 100)
}

export { findGroup }