%~d0
PUSHD %~dp0

call compass compile -s compressed

PUSHD js
java -jar compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --js storage.js --js config.js --js birthday.js --js mobamas-dojo.js --js init.js --js_output_file mobamas-dojo-min.js
POPD

POPD
