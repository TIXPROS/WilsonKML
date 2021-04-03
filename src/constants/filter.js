const data = [
    {
        id: "Wind",
        data: [
            "DD",
            "FF",
            "E_DD"
        ]
    },
    {
        id: "Visibility",
        data: [
            "VV",
            "VV10",
        ]
    },
    {
        id: "Temperature",
        data: [
            "TX",
            "TTT",
            "E_TTT",
            "TN",
            "TG",
            "TM",
            "T5cm",
        ]
    }
]

function filter(value, keys) {
    console.log(value);
    var tmp = data.find((el) => el.id === value)
    if (value === "All") {
        return keys
    }
    console.log(tmp);
    if (tmp) {
        return tmp.data
    } else {
        return []
    }
}

export { filter }