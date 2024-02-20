
const apiKey = "b8170735927b9dce0686bc67437c4b81" ;
 export function Url (cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
}


