@echo off
echo Adding Node.js to PATH temporarily...
set PATH=%PATH%;C:\Program Files\nodejs\

echo.
echo Installing dependencies...
npm install

echo.
echo Setup complete!
echo.
echo To run the development server, use: npm run dev
pause
