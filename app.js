
import {geocode} from './utils/geocode.js'
import {forecast} from './utils/forecast.js'
import { argv } from 'process'

if (!argv[2]) {
    console.log('Please, provide a location')
} else {

geocode(argv[2], (error, {longitude, latitude, location} = {}) => {
    if (error) {
        return console.log(error)
    } else {
     forecast(latitude, longitude, (error, forcastData) => {
        if(error) {
            return console.log(error)
        } else {
            console.log(location)
            console.log(forcastData)
        }
      })
    }
})

}

