@ECHO OFF
%~d0
PUSHD %~dp0

IF "%1" EQU "debug" (
  CALL compass compile -e development --force
) ELSE (
  CALL compass compile -e production --force
)

PUSHD js
java -jar compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js ..\flexslider\jquery.flexslider-min.js --js toast.js --js storage.js --js config.js --js birthday.js --js mobamas-dojo.js --js init.js --js_output_file mobamas-dojo-min.js
POPD

POPD
