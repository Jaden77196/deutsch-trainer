@echo off
rem Deutsch trainer - double-click to start the phone server
rem Keeps the window open so you can read the phone URL, then Ctrl+C to stop.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
