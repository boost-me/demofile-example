// Example on reading a .dem file with nodejs

const fs = require("fs");
const demofile = require("demofile");

fs.readFile("astralis-vs-faze-dust2.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.stringTables.on("update", e => {
    if (e.table.name === "userinfo" && e.userData != null) {
      console.log("\nPlayer info updated:");
      console.log(e.entryIndex, e.userData);
    }
  });

  demoFile.parse(buffer);
});