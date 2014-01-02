@ECHO OFF
%~d0
PUSHD %~dp0

IF "%1" EQU "release" (
  CALL compass compile -e production --force
) ELSE (
  CALL compass compile -e development --force
)

PUSHD js
java -jar compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js toast.js --js storage.js --js config.js --js closebutton.js --js versionedinfo.js --js birthday.js --js mobamas-dojo.js --js init.js --js_output_file mobamas-dojo-min.js
POPD

POPD
