@echo off
cls
cd /d "%~dp0"

echo ========================================
echo   NETTOYAGE ET DEMARRAGE
echo ========================================
echo.

echo [1/3] Arret des serveurs...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo [2/3] Suppression du cache...
if exist .next (
    rmdir /s /q .next
    echo Cache supprime !
)

echo [3/3] Demarrage du serveur...
echo.
call npm run dev

pause


