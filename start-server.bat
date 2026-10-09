@echo off
title Maharashtra B.Tech Scholarship Portal - MahaDBT Assistant
echo ======================================================================
echo  Maharashtra B.Tech Scholarship Portal (MahaDBT Assistant)
echo  Starting Localhost Web Server...
echo ======================================================================
cd /d "%~dp0"
start http://localhost:3000/
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 3000
pause
