@ECHO OFF
%~d0
PUSHD %~dp0

python main.py
CALL compile.bat release

POPD
