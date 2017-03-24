import Zodiacs from '../model/zodiac.js'

export default function(date) {
    return Zodiacs.find((zodiac) => {
        if(zodiac.start <= date && zodiac.end >= date) {
            return zodiac
        }
    })
}