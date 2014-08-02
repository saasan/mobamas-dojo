@ECHO OFF
%~d0
PUSHD %~dp0

CALL buildRelease.bat

robocopy . ..\saasan.github.com\mobamas-dojo * /MIR /XD .git .sass-cache /XF .gitattributes .gitignore compiler.jar buildAndSyncRelease.bat buildDebug.bat buildRelease.bat compile.bat /XA:SH

POPD
