import axios from "axios";
import { useEffect, useState } from "react";




export default function WeatherInfo () {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string| null>(null);


    useEffect(() => {
        let canceled = false;
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/weather`);
                if (!canceled) setWeather(response.data);
            } catch (err) {
                const message = (err instanceof Error) ? err.message : "Error"
                if (!canceled) setError(message);
            } finally {
                if (!canceled) setLoading(false);
            }
        };
        fetchData();
        return () => {
            canceled = true;
        };
    }, []);

    if (loading) return <div>Ładowanie...</div>;
    if (error) return <div>Błąd: {error}</div>;
    if (!weather) return <div>Brak danych pogodowych</div>;


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
            <div className="text-center py-12">
                Current weather information based on your location.
            </div>
        </div>
    )
}