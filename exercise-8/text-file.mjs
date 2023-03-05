import { writeFile } from 'node:fs';

writeFile('message.txt', "this is a text file", (error) => {
  if (error) throw error;
  console.log("text file saved");
});