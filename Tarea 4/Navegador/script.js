document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("weatherForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Previene la recarga de la página

        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;

        try {
            // Consulta a la API de Open Meteo
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );

            if (!response.ok) {
                throw new Error("No se pudo obtener el clima. Verifica las coordenadas.");
            }

            const data = await response.json();
            const weather = data.current_weather;

            // Renderizar los resultados en el DOM
            result.innerHTML = `
                <h3>Clima Actual</h3>
                <p>Temperatura: ${weather.temperature}°C</p>
                <p>Velocidad del viento: ${weather.windspeed} km/h</p>
            `;
        } catch (error) {
            result.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
    });
});
