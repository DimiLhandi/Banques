@echo off
cls
echo.
echo ========================================
echo   DEMARRAGE DU SERVEUR
echo ========================================
echo.
echo Installation des dependances...
call npm install
echo.
echo Demarrage du serveur Next.js...
echo.
call npm run dev


