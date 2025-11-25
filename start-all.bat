@echo off
echo Starting ENUF full stack...

REM === START MEDIA SERVER (Port 3001) ===
echo.
echo Starting media-server-db...
cd media-server-db
start cmd /k "npm install && npm start"
cd ..

REM === START FRONTEND (Port 5173) ===
echo.
echo Starting frontend (Vite)...
cd frontend
start cmd /k "npm install && npm run dev"
cd ..

REM === START NGROK (exposing 3001) ===
echo.
echo Starting ngrok tunnel for media server (port 3001)...
start cmd /k "ngrok http 3001"

echo.
echo All services are launching... Enjoy ENUF!
pause
