const fs = require("fs");
const process = require("process");
let _readFileSync = fs.readFileSync;
const enableDebugLogs = process.env.FILE_DEBUGGER_DEBUG_LOG === "1";
const fileToTrace = process.env.FILE_DEBUGGER_TRACE_THIS;
const pluginPrefix = "FILE DEBUGGER:";
const log = (...args) => {
	args = [pluginPrefix].concat(args);
	console.log(...args);
};

const debug = (...args) => {
	if (!enableDebugLogs) return;
	args = [pluginPrefix].concat(args);
	console.log(...args);
};

log(`File Debugger is included.`);

if (FILE_DEBUGGER_TRACE_THIS) {
	log(`Any time file that has ${FILE_DEBUGGER_TRACE_THIS} in it's pathname, a breakpoint would be automatically added`)
}

if (enableDebugLogs) {
	log(`All files' reads will be logged`);
}

const trace = (fileName) => {
	debug("Reading file", fileName);
	if (fileName.includes(fileToTrace)) {
		debugger;
	}
};

fs.readFileSync = function (...args) {
	const fileName = args[0];
	trace(fileName);
	return _readFileSync.apply(this, args);
};
let _readFile = fs.readFile;
fs.readFile = function (...args) {
	const fileName = args[0];
	trace(fileName);
	return _readFile.apply(this, args);
};
