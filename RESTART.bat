@echo off
echo Arret des serveurs Node.js en cours...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Suppression du cache...
if exist .next rmdir /s /q .next

echo Demarrage du serveur...
npm run dev


