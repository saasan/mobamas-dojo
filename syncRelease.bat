@ECHO OFF
%~d0
PUSHD %~dp0

CALL compile.bat
python main.py

robocopy . ..\saasan.github.com\mobamas-dojo * /MIR /XD .git .sass-cache /XF .gitattributes .gitignore compiler.jar compile.bat syncDebug.bat syncRelease.bat /XA:SH

POPD
