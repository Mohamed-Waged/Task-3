const request = require ("request")

const country = process.argv[2]
const geocode = require ('./data.js/geocode')
const forecast = require ("./data.js/forecast")

geocode ( country , (error , data) => {
    console.log("DATA  : " , data)
    
    if (data) {
        forecast( data.latitude , data.longitude , (error , data) => {
            console.log("DATA  : " , data)
        })
    } else {
        console.log("Data Entered have An Error")
    }
}) 
