# File Debugger

## Introduction

Debugs files being accessed by any NodeJS dependency.

- Adds automatic breakpoint at the line where the file is being read
- Logs all the files that are being read

## Motivation

- Sometimes you add/change something in a config file and expect an npm dependency to act on it, but what if it does't work. How do you know where, how and in which condition that dependency accesses that file.

## Usage

`npm i file-debugger --save-dev`

`node -r file-debugger your_file_with_hundreds_of_deps.js`
