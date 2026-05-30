@echo off
chcp 65001 >nul
echo ========================================
echo   知信精密 - 网站更新工具
echo ========================================
echo.

cd /d "%~dp0"

echo 📦 正在打包更新内容...
git add -A

echo.
set /p MSG="✏️  输入更新说明（直接回车默认"更新网站内容"）: "
if "%MSG%"=="" set MSG=更新网站内容

git commit -m "%MSG%"

echo.
echo 🚀 正在推送到 GitHub...
git push github main

echo.
echo 🌐 正在部署到 Netlify...
set NETLIFY_AUTH_TOKEN=nfp_5jSzNpktE4ysSqH5yuRHUh3kBbHrj5p6a18e
npx netlify-cli@latest deploy --dir=. --prod

echo.
echo ========================================
echo ✅ 更新完成！
echo    网站地址：https://gilded-kangaroo-8ecaa7.netlify.app
echo ========================================
pause
