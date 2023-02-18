import { existsSync } from 'node:fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.');