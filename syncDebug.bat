@ECHO OFF
%~d0
PUSHD %~dp0

python main.py --debug
CALL syncDebugIgnoreHTML.bat

POPD
