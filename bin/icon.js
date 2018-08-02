const chromeManifestIconify = require('chrome-manifest-iconify');

chromeManifestIconify.async({
  manifest: 'src/manifest.json',
  masterIcon: 'icon.png',
  resizeMode: chromeManifestIconify.ResizeMode.HERMITE
}).then((icons) => {
  // Do stuff with icons
  icons.forEach((i) => console.log(i.toString()));
}).catch((err) => {
  // Oh, no! Something bad happened
  console.log(err);
});
