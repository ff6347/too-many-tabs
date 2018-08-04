const chromeManifestIconify = require('chrome-manifest-iconify');
const fs = require('fs');
chromeManifestIconify.async({
  manifest: './src/manifest.json',
  masterIcon: './src/master.png',
  resizeMode: chromeManifestIconify.ResizeMode.HERMITE
}).then((icons) => {
  // Do stuff with icons
  icons.forEach((i) => {
    // console.log(i);
    fs.writeFileSync(i.path, i.contents);

  });
}).catch((err) => {
  // Oh, no! Something bad happened
  console.log(err);
});
