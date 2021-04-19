const fs = require('fs');

// directory path
const dir = './artifacts/';

// list all files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }

  // files object contains all files names
  // log them on console
  files.forEach(file => {
    const path = `${dir}${file}`;
    let rawdata = fs.readFileSync(path);
    let { abi, contractName, sourceName } = JSON.parse(rawdata);
    fs.writeFileSync(path, JSON.stringify({ abi, contractName, sourceName }));
  });
});