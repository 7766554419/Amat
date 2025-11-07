@echo off
set PATH=%PATH%;C:\Program Files\nodejs\
echo Building your website for production...
npm run build
echo.
echo Build complete! Your static site is in the 'out' folder.
pause
