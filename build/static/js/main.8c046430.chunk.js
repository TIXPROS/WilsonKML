(this.webpackJsonpwilson_kml=this.webpackJsonpwilson_kml||[]).push([[0],{107:function(e,r,t){},124:function(e,r){},126:function(e,r){},142:function(e,r,t){},143:function(e,r,t){"use strict";t.r(r);var o=t(0),a=t.n(o),i=t(9),n=t.n(i),d=(t(107),t(46)),s=t(47),c=t(54),l=t(53),u=t(18),h=t.n(u),m=t(97),f=t(39),G=t(172),b=t(176),g=t(177),v=t(181),p=t(178),x=t(182),w=t(179),j=t(180);function O(e){var r;r=k.find((function(r){return r.code===e}));try{return r.desc}catch(t){return!1}}function P(e){var r;r=k.find((function(r){return r.code===e}));try{return r.units}catch(t){return!1}}function T(e,r){if("N/A"===r)return"#000";var t;t=k.find((function(r){return r.code===e&&!0===r.filter.above}));try{if(t.units){if(r<15)return"red";if(r<40)return"#ff7400";if(r<60)return"#ffc100";if(r<80)return"#7fff00";if(r<=100)return"green"}}catch(o){return"#000"}}var k=[{code:"PPPP",desc:"Surface pressure, reduced",units:"hPa",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"E_PPP",desc:"Absolute error surface pressure",units:"hPa",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"TX",desc:"Max. temperature - within the last 12 hours",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"TTT",desc:"Temperature 2m above surface",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"E_TTT",desc:"Absolute error temperature 2m above surface",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Td",desc:"Dewpoint 2m above surface",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"E_Td",desc:"Absolute error dew point 2m above surface",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"TN",desc:"Min. temperature - within the last 12 hours",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"TG",desc:"Min. surface temperature at 5cm within the last 12 hours",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"TM",desc:"Mean temperature during the last 24 hours",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"T5cm",desc:"Temperature 5cm above surface",units:"\xb0C",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"DD",desc:"Wind direction",units:"0 bis 360 Grad",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"E_DD",desc:"Absolute error wind direction",units:"00 bis 360",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FF",desc:"Wind speed",units:"kt",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"E_FF",desc:"Absolute error wind speed 10m above surface",units:"kt",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FX1",desc:"Max. wind gust within the last hour",units:"kt",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FX3",desc:"Max. wind gust within the last 3 hours",units:"kt",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FX625",desc:"Prob. : Occur. of gusts >= 25kn within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FX640",desc:"Prob. : Occur. of gusts >= 40kn within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FX655",desc:"Prob. : Occur. of gusts >= 55kn within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FXh",desc:"Max. wind gust within the last 12 hours",units:"kt",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FXh25",desc:"Prob. of wind gusts >= 25kn within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FXh40",desc:"Prob. of wind gusts >= 40kn within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"FXh55",desc:"Prob. of wind gusts >= 55kn within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"N",desc:"Total cloud cover",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Neff",desc:"Effective cloud cover",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Nh",desc:"High cloud cover (>7 km)",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Nm",desc:"Midlevel cloud cover (2-7 km)",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Nl",desc:"Low cloud cover (lower than 2 km)",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"N05",desc:"Cloud cover below 500 ft.",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"VV",desc:"Visibility",units:"hm",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"VV10",desc:"Prob. : Visibility below 1000m",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwM",desc:"Prob. for fog within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwM6",desc:"Prob. for fog within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwMh",desc:"Prob. for fog within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwMd",desc:"Prob. : Occur. of fog within the last 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"ww",desc:"Significant Weather",units:"-",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"ww3",desc:"Significant Weather of the last 3 hours",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"W1W2",desc:"Past weather during the last 6 hours",units:"-",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwP",desc:"Prob. : Occur. of precip. within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwP6",desc:"Prob. : Occur. of precip. within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwPh",desc:"Prob. : Occur. of precip. within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwPd",desc:"Prob. : Occur. of any precip. within the last 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwZ",desc:"Prob. : Occur. of drizzle within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwZ6",desc:"Prob. : Occur. of drizzle within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwZh",desc:"Prob. : Occur. of drizzle within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwD",desc:"Prob. : Occur. of stratiform precip. within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwD6",desc:"Prob. : Occur. of stratiform precip. within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwDh",desc:"Prob. : Occur. of stratiform precip. within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwC",desc:"Prob. : Occur. of convective precip. within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwC6",desc:"Prob. : Occur. of convective precip. within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwCh",desc:"Prob. : Occur. of convective precip. within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwT",desc:"Prob. : Occur. of thunderstorms within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwT6",desc:"Prob. : Occur. of thunderstorms within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwTh",desc:"Prob. : Occur. of thunderstorms within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwTd",desc:"Prob. : Occur. of thunderstorms within the last 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwS",desc:"Prob. : Occur. of solid precip. within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwS6",desc:"Prob. : Occur. of solid precip. within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwSh",desc:"Prob. : Occur. of solid precip. within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwL",desc:"Prob. : Occur. of liquid precip. within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwL6",desc:"Prob. : Occur. of liquid precip. within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwLh",desc:"Prob. : Occur. of liquid precip. within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwF",desc:"Prob. : Occur. of freezing rain within the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwF6",desc:"Prob. : Occur. of freezing rain within the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"wwFh",desc:"Prob. : Occur. of freezing rain within the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"DRR1",desc:"Duration of precip. within the last hour",units:"s",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR6c",desc:"Total precip. during the last 6 hours consistent with significant weather",units:"kg / m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRhc",desc:"Total precip. during the last 12 hours consistent with significant weather",units:"kg / m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRdc",desc:"Total precip. during the last 24 hours consistent with significant weather",units:"kg / m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR1c",desc:"Total precip. during the last hour consistent with significant weather",units:"kg/m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRS1c",desc:"Snow-Rain-Equivalent during the last hour",units:"kg/m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRL1c",desc:"Total liquid precip. during the last hour consistent with significant weather",units:"kg / m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR3c",desc:"Total precip. during the last 3 hours consistent with significant weather",units:"kg/m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRS3c",desc:"Snow-Rain-Equivalent during the last 3 hours",units:"kg/m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R101",desc:"Prob. of precip. > 0.1 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R102",desc:"Prob. of precip. > 0.2 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R103",desc:"Prob. of precip. > 0.3 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R105",desc:"Prob. of precip. > 0.5 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R107",desc:"Prob. of precip. > 0.7 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R110",desc:"Prob. of precip. > 1.0 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R120",desc:"Prob. of precip. > 2.0 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R130",desc:"Prob. of precip. > 3.0 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R150",desc:"Prob. of precip. > 5.0 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR1o1",desc:"Prob. of precip. > 10 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR1w1",desc:"Prob. of precip. > 15 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RR1u1",desc:"Prob. of precip. > 25 mm during the last hour",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R600",desc:"Prob. of precip. > 0.0mm during the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R602",desc:"Prob. of precip. > 0.2mm during the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R610",desc:"Prob. of precip. > 1.0 mm during the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"R650",desc:"Prob. of precip. > 5.0mm during the last 6 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Rh00",desc:"Prob. of precip. > 0.0mm during the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Rh02",desc:"Prob. of precip. > 0.2mm during the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Rh10",desc:"Prob. of precip. > 1.0mm during the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Rh50",desc:"Prob. of precip. > 5.0mm during the last 12 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"SunD",desc:"Yesterdays total sunshine duration",units:"s",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RSunD",desc:"Relative sunshine duration within the last 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"PSd00",desc:"Prob. : relative sunshine duration > 0 % within 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"PSd30",desc:"Prob. : relative sunshine duration > 30 % within 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"PSd60",desc:"Prob. : relative sunshine duration > 60 % within 24 hours",units:"% (0..100)",filter:{above:!0,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"RRad1",desc:"Global irradiance within the last hour",units:"% (0..80)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"Rad1h",desc:"Global Irradiance",units:"kJ/m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"SunD1",desc:"Sunshine duration during the last Hour",units:"s",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"SunD3",desc:"Sunshine duration during the last three hours",units:"s/s",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"PEvap",desc:"Potential evapotranspiration within the last 24 hours",units:"kg / m2",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"WPc11",desc:"Optional significant weather (highest priority) during the last hour",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"WPc31",desc:"Optional significant weather (highest priority) during the last 3 hours",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"WPc61",desc:"Optional significant weather (highest priority) during the last 6 hours",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"WPch1",desc:"Optional significant weather (highest priority) during the last 12 hours",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}},{code:"WPcd1",desc:"Optional significant weather (highest priority) during the last 24 hours",units:"- (0..95)",filter:{above:!1,treshold:50,minGrad:10,maxGrad:100,colorGrad:"green"}}],y=[{variable:"PPPP",group:1},{variable:"E_PPP",group:1},{variable:"TX",group:2},{variable:"TTT",group:2},{variable:"E_TTT",group:2},{variable:"Td",group:2},{variable:"E_Td",group:2},{variable:"TN",group:2},{variable:"TG",group:2},{variable:"TM",group:2},{variable:"T5cm",group:2},{variable:"FF",group:3},{variable:"E_FF",group:3},{variable:"FX1",group:3},{variable:"FX3",group:3},{variable:"FXh",group:3},{variable:"VV",group:4}];function R(e,r){var t;if(!(t=y.find((function(r){return r.variable===e}))))return r;switch(t.group){case 1:return function(e){var r=e/100;return(Math.trunc(10*r)/10).toFixed(1)}(r);case 2:return function(e){var r=e-273.15;return(Math.trunc(10*r)/10).toFixed(1)}(r);case 3:return function(e){var r=1.94384*e;return(Math.trunc(10*r)/10).toFixed(1)}(r);case 4:return function(e){var r=e/100;return(Math.trunc(10*r)/10).toFixed(1)}(r);default:return r}}var F=t(109),S=function(e){try{var r=[],t=null,o=null,a=null,i=null;return F.parseString(e,(function(e,n){var d=n["kml:kml"]["kml:Document"][0]["kml:ExtendedData"][0]["dwd:ProductDefinition"][0]["dwd:ForecastTimeSteps"][0]["dwd:TimeStep"],s=n["kml:kml"]["kml:Document"][0]["kml:Placemark"][0]["kml:ExtendedData"][0]["dwd:Forecast"],c=n["kml:kml"]["kml:Document"][0]["kml:ExtendedData"][0]["dwd:ProductDefinition"][0];t=c["dwd:Issuer"][0],o=c["dwd:ProductID"][0],a=c["dwd:GeneratingProcess"][0],i=c["dwd:IssueTime"][0];var l=[];s.forEach((function(e){var r=e["dwd:value"][0].split(/\s+/).filter((function(e){return""!==e}));l.push([e.$["dwd:elementName"],r])})),d.forEach((function(e,t){var o={},a={};o.date=e,l.forEach((function(e){a[e[0]]=e[1][t]})),o.values=a,r.push(o)}))})),{data:r,supp:{issuer:t,productID:o,generatingProcess:a,issueTime:i}}}catch(n){return console.log(n),alert("Le fichier choisi est incompatible"),!1}},D=[{id:"Wind",data:["DD","FF","E_DD"]},{id:"Visibility",data:["VV","VV10"]},{id:"Temperature",data:["TX","TTT","E_TTT","TN","TG","TM","T5cm"]}];function M(e,r){console.log(e);var t=D.find((function(r){return r.id===e}));return"All"===e?r:(console.log(t),t?t.data:[])}var C=t(4),E=["All","Wind","Wind speed threshold","Wind gusts 1h","Wind gusts 3h","Temperature","Visibility"],L=[{id:"06451",Name:"EBBR",FicKML:"MOSMIX_LATEST_06451.kml",color:"#1a8cff"},{id:"06450",Name:"EBAW",FicKML:"MOSMIX_LATEST_06450.kml",color:"#D473D4"},{id:"06449",Name:"EBCI",FicKML:"MOSMIX_LATEST_06449.kml",color:"#08CC0A"},{id:"06478",Name:"EBLG",FicKML:"MOSMIX_LATEST_06478.kml",color:"#00BFFF"},{id:"06407",Name:"EBOS",FicKML:"MOSMIX_LATEST_06407.kml",color:"#785e2f"}],N=function(e){Object(c.a)(t,e);var r=Object(l.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=r.call(this,e)).loadFolder=function(){var e=Object(f.a)(h.a.mark((function e(r){var t,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.target.files,a=Object(m.a)(t).filter((function(e){return"application/vnd.google-earth.kml+xml"===e.type})),i=L.find((function(e){return e.FicKML===a[0].name})),o.setState({files:a,currentLocation:i.Name},(function(){o.showFile(a[0])}));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o.state={filed:!1,data:[],days:[],finale:[],keys:[],loading:!1,supp:null,filter:"All",current:{},files:null,currentLocation:"EBBR",currentColor:"#000"},o}return Object(s.a)(t,[{key:"showFile",value:function(){var e=Object(f.a)(h.a.mark((function e(r){var t,o=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FileReader).onload=function(){var e=Object(f.a)(h.a.mark((function e(r){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.target.result,(a=S(t)).data?o.setState({data:a.data,filed:!0,supp:a.supp}):o.setState({filed:!1});case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),t.readAsText(r);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"range",value:function(){var e=Object(f.a)(h.a.mark((function e(){var r,t,o=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,2e3)}));case 2:r=[],t=[],this.state.data.forEach((function(e){if(-1===r.indexOf(e.date.split("T")[0])){var t=e.date.split("T")[0];r.push(t)}})),this.setState({days:r},(function(){r.forEach((function(e){var r=o.state.data.filter((function(r){return r.date.split("T")[0]===e})),a={};a.date=e,a.values=r,t.push(a)})),o.setState({finale:t,keys:Object.keys(t[0].values[0].values),loading:!1})}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findColor",value:function(){var e=this;return L.find((function(r){return r.Name===e.state.currentLocation})).color}},{key:"render",value:function(){var e=this,r=this.findColor();return Object(C.jsxs)("div",{children:[Object(C.jsx)(G.a,{variant:"h3",component:"h2",children:"Convertisseur Kml to JS"}),Object(C.jsx)("div",{children:Object(C.jsx)(b.a,{type:"file",onChange:function(r){return e.loadFolder(r)},inputProps:{webkitdirectory:"",directory:"",style:{height:30}},style:{marginTop:20}})}),Object(C.jsx)("br",{}),Object(C.jsx)(g.a,{title:"Valider",onClick:function(){e.state.filed?e.setState({loading:!0},(function(){e.range()})):alert("Veuillez choisir un fichier \xe0 convertir")},color:"primary",variant:"contained",style:{marginTop:10,marginBottom:10},children:"Valider"}),Object(C.jsx)("div",{children:this.state.loading&&Object(C.jsx)(v.a,{open:this.state.loading,style:{zIndex:1500},children:Object(C.jsx)(p.a,{color:"secondary"})})}),Object(C.jsxs)("div",{children:[this.state.finale.length>0&&this.state.filed&&Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{style:{margin:20},children:[Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(C.jsx)(G.a,{style:{fontWeight:"bold",marginRight:5},children:"Origin : "}),Object(C.jsx)(G.a,{children:this.state.currentLocation})]}),Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(C.jsx)(G.a,{style:{fontWeight:"bold",marginRight:5},children:"Issuer : "}),Object(C.jsx)(G.a,{children:this.state.supp.issuer}),Object(C.jsx)(G.a,{style:{fontWeight:"bold",marginRight:5,marginLeft:20},children:"ProductID : "}),Object(C.jsx)(G.a,{children:this.state.supp.productID}),Object(C.jsx)(G.a,{style:{fontWeight:"bold",marginRight:5,marginLeft:20},children:"IssueTime : "}),Object(C.jsx)(G.a,{children:this.state.supp.issueTime})]})]}),Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(C.jsxs)("div",{style:W.selector,children:[Object(C.jsx)(x.a,{id:"label",children:"Location"}),Object(C.jsx)(w.a,{labelId:"label",id:"select",value:this.state.currentLocation,onChange:function(r){e.setState({currentLocation:r.target.value},(function(){var t=L.find((function(e){return e.Name===r.target.value})),o=e.state.files.find((function(e){return e.name===t.FicKML}));e.showFile(o),e.state.filed?e.setState({loading:!0},(function(){e.range()})):alert("Veuillez choisir un fichier \xe0 convertir")}))},children:L.map((function(e,r){return Object(C.jsx)(j.a,{value:e.Name,children:e.Name},r)}))})]}),Object(C.jsxs)("div",{style:W.selector,children:[Object(C.jsx)(x.a,{id:"label",children:"Parameter group"}),Object(C.jsx)(w.a,{labelId:"label",id:"select",value:this.state.filter,onChange:function(r){e.setState({filter:r.target.value})},children:E.map((function(e,r){return Object(C.jsx)(j.a,{value:e,children:e},r)}))})]})]})]}),this.state.finale.length>0&&this.state.filed&&Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{style:{backgroundColor:r,width:330,height:55,position:"absolute",zIndex:1111,left:"2%"}}),Object(C.jsxs)("table",{style:{display:"block",maxHeight:600,overflowY:"scroll",overflowX:"scroll",maxWidth:"96%",marginLeft:"2%",position:"relative"},children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[this.state.finale.length>0&&this.state.filed&&Object(C.jsx)("th",{style:{top:0,backgroundColor:r}}),this.state.finale.map((function(e){return e.values.map((function(t,o){return Object(C.jsxs)("th",{style:{top:0,backgroundColor:r},children:[e.date.slice(8,10),Object(C.jsx)("br",{}),t.date.split("T")[1].slice(0,2)+"Z"]},o)}))}))]})}),Object(C.jsx)("tbody",{children:M(this.state.filter,this.state.keys).map((function(t,o){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{style:{left:0,position:"sticky",backgroundColor:r},children:Object(C.jsx)("div",{style:{fontWeight:"bold",color:"#fff",width:300},children:!1===O(t)?t:O(t)+"\n("+P(t)+")"})}),e.state.finale.map((function(r){return r.values.map((function(r,o){return Object(C.jsx)("td",{onClick:function(){e.setState({current:{id:o,variable:t}})},style:{color:T(t,"-"===r.values[t]?"N/A":R(t,r.values[t])),cursor:"pointer",backgroundColor:(o===e.state.current.id||t===e.state.current.variable)&&"#70b7ff"},children:"-"===r.values[t]?"N/A":R(t,r.values[t])},o)}))}))]},o)}))})]}),Object(C.jsx)(G.a,{style:{textAlign:"left",marginLeft:"2%"},children:"Showing 1 to "+M(this.state.filter,this.state.keys).length+" of "+this.state.keys.length+" pages"})]})]})]})}}]),t}(o.Component),W={selector:{displey:"flex",flexDirection:"row",margin:15}},_=N,A=(t(142),function(e){Object(c.a)(t,e);var r=Object(l.a)(t);function t(){return Object(d.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(_,{})})}}]),t}(o.Component)),I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,184)).then((function(r){var t=r.getCLS,o=r.getFID,a=r.getFCP,i=r.getLCP,n=r.getTTFB;t(e),o(e),a(e),i(e),n(e)}))};n.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root")),I()}},[[143,1,2]]]);
//# sourceMappingURL=main.8c046430.chunk.js.map