# File Debugger

## Introduction

Debugs files being accessed by any NodeJS dependency.

- Adds automatic breakpoint at the line where the file is being read
- Logs all the files that are being read

## Usage

`npm i file-debugger --save-dev`
`npm i file-debugger -g`
`node -r file-debugger your_file_with_hundreds_of_deps.js`