@echo off
echo ===================================================
echo   Pushing Swarna Vaidehi Makhana Hub to GitHub     
echo ===================================================
echo.
echo Make sure you have created a repository named 'makhana-hub' on GitHub under your account (theabhishekraj).
echo.
echo Attempting to push to main branch...
git push -u origin main
echo.
if %errorlevel% neq 0 (
    echo.
    echo Pushing via SSH failed or prompted. Attempting HTTPS push fallback...
    echo Changing remote to HTTPS...
    git remote set-url origin https://github.com/theabhishekraj/makhana-hub.git
    git push -u origin main
)
echo.
echo Done!
pause
