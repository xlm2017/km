function stringToHex (str) {
  const buf = Buffer.from(str, 'utf8');
  return buf.toString('hex');
}

function hexToString (str) {
  const buf = new Buffer(str, 'hex');
  return buf.toString('utf8');
}


// JS parseInt 函数将 base 作为第二个参数。所以你可以简单地使用parseInt(hexString, 16).