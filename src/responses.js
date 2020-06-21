export const autoCompleteRes =
    [
        {
            "Version": 1,
            "Key": "215854",
            "Type": "City",
            "Rank": 31,
            "LocalizedName": "Tel Aviv",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "TA",
                "LocalizedName": "Tel Aviv"
            }
        },
        {
            "Version": 1,
            "Key": "3431644",
            "Type": "City",
            "Rank": 45,
            "LocalizedName": "Telanaipura",
            "Country": {
                "ID": "ID",
                "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
                "ID": "JA",
                "LocalizedName": "Jambi"
            }
        },
        {
            "Version": 1,
            "Key": "300558",
            "Type": "City",
            "Rank": 45,
            "LocalizedName": "Telok Blangah New Town",
            "Country": {
                "ID": "SG",
                "LocalizedName": "Singapore"
            },
            "AdministrativeArea": {
                "ID": "05",
                "LocalizedName": "South West"
            }
        },
        {
            "Version": 1,
            "Key": "325876",
            "Type": "City",
            "Rank": 51,
            "LocalizedName": "Telford",
            "Country": {
                "ID": "GB",
                "LocalizedName": "United Kingdom"
            },
            "AdministrativeArea": {
                "ID": "TFW",
                "LocalizedName": "Telford and Wrekin"
            }
        },
        {
            "Version": 1,
            "Key": "169072",
            "Type": "City",
            "Rank": 51,
            "LocalizedName": "Telavi",
            "Country": {
                "ID": "GE",
                "LocalizedName": "Georgia"
            },
            "AdministrativeArea": {
                "ID": "KA",
                "LocalizedName": "Kakheti"
            }
        },
        {
            "Version": 1,
            "Key": "230611",
            "Type": "City",
            "Rank": 51,
            "LocalizedName": "Telsiai",
            "Country": {
                "ID": "LT",
                "LocalizedName": "Lithuania"
            },
            "AdministrativeArea": {
                "ID": "TE",
                "LocalizedName": "Telšiai"
            }
        },
        {
            "Version": 1,
            "Key": "2723742",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Telégrafo",
            "Country": {
                "ID": "BR",
                "LocalizedName": "Brazil"
            },
            "AdministrativeArea": {
                "ID": "PA",
                "LocalizedName": "Pará"
            }
        },
        {
            "Version": 1,
            "Key": "186933",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Tela",
            "Country": {
                "ID": "HN",
                "LocalizedName": "Honduras"
            },
            "AdministrativeArea": {
                "ID": "AT",
                "LocalizedName": "Atlántida"
            }
        },
        {
            "Version": 1,
            "Key": "3453754",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Telaga Asih",
            "Country": {
                "ID": "ID",
                "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
                "ID": "JB",
                "LocalizedName": "West Java"
            }
        },
        {
            "Version": 1,
            "Key": "3453755",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Telagamurni",
            "Country": {
                "ID": "ID",
                "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
                "ID": "JB",
                "LocalizedName": "West Java"
            }
        }
    ];

export const currentWeatherResponse =
    [
        {
            "LocalObservationDateTime": "2020-06-16T17:00:00+03:00",
            "EpochTime": 1592316000,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 27.5,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 82,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }
    ]

export const fiveDayForecastResponse =
    {
        "Headline": {
            "EffectiveDate": "2020-06-19T08:00:00+03:00",
            "EffectiveEpochDate": 1592542800,
            "Severity": 4,
            "Text": "Expect showers Friday morning",
            "Category": "rain",
            "EndDate": "2020-06-19T14:00:00+03:00",
            "EndEpochDate": 1592564400,
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2020-06-18T07:00:00+03:00",
                "EpochDate": 1592452800,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
            },
            {
                "Date": "2020-06-19T07:00:00+03:00",
                "EpochDate": 1592539200,
                "Temperature": {
                    "Minimum": {
                        "Value": 22.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 27.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Night": {
                    "Icon": 42,
                    "IconPhrase": "Mostly cloudy w/ t-storms",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2020-06-20T07:00:00+03:00",
                "EpochDate": 1592625600,
                "Temperature": {
                    "Minimum": {
                        "Value": 23,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 36,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2020-06-21T07:00:00+03:00",
                "EpochDate": 1592712000,
                "Temperature": {
                    "Minimum": {
                        "Value": 22.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 29.1,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2020-06-22T07:00:00+03:00",
                "EpochDate": 1592798400,
                "Temperature": {
                    "Minimum": {
                        "Value": 21.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 32.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 1,
                    "IconPhrase": "Sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
            }
        ]
    }