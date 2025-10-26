import httpx  
from fastapi import FastAPI
from dotenv import load_dotenv 
from fastapi.middleware.cors import CORSMiddleware 
import os 
load_dotenv()



app = FastAPI() 
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"]) # nie do produkcji / wygodne w dev
weather_api_key= os.getenv("WEATHER_API_KEY")
ipify_api_url = "https://api.ipify.org?format=json"

@app.get("/")
async def hello_world():
    return {"message": "Backend is working!"}

@app.get("/weather")
async def get_weather():


    async with httpx.AsyncClient() as client:
        ip_response = await client.get(ipify_api_url)
        ip_response.raise_for_status()
        ip_data = ip_response.json()
        user_ip = ip_data.get("ip")

        weather_url = f"https://api.weatherapi.com/v1/current.json?key={weather_api_key}&q={user_ip}"
        weather_response = await client.get(weather_url)
        weather_response.raise_for_status()
        weather_data = weather_response.json()
        return {"weather": weather_data}