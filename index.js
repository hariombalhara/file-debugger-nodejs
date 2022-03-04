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

log(`File Debugger is included. 
- Any time a file is read, it can be automatically debugged(Node Debugger) by passing env variable FILE_DEBUGGER_TRACE_THIS="SUBSTRING".
- You can log all files being read by setting env variable FILE_DEBUGGER_DEBUG_LOG=1
`);

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
