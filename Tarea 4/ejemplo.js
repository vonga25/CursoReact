const getWeather = async (latitude, longitude) => {
    try {
        // URL de la API con latitud y longitud
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        
        if (!response.ok) {
            throw new Error("No se pudo obtener el clima. Verifica los datos de ubicación.");
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Extraer la información deseada
        const weather = data.current_weather;
        console.log(
            `Temperatura: ${weather.temperature}°C, Viento: ${weather.windspeed} km/h`
        );
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Llama a la función con coordenadas (ejemplo: Tokio)
getWeather(35.6895, 139.6917);
