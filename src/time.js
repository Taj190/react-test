
export function calculateSunriseSunset(response) {
    if (!response || !response.sys) {
        return null; 
    }

    const sunriseTimestamp = response.sys.sunrise * 1000; 
    const sunsetTimestamp = response.sys.sunset * 1000; 

    const sunriseDate = new Date(sunriseTimestamp);
    const sunsetDate = new Date(sunsetTimestamp);

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
       
        return `${hours}:${minutes} `;
    };

    const formattedSunrise = formatTime(sunriseDate);
    const formattedSunset = formatTime(sunsetDate);

    return { sunrise: formattedSunrise, sunset: formattedSunset };
}
