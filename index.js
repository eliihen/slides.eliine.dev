const fs = require("fs");
const path = require("path");

const { redirects } = require("./config.json");

if (!redirects) {
  console.error("No redirects found in config.json");
  process.exit(1);
}

redirects.forEach((redirect) => {
  const { from, to } = redirect;
  const template = `
<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting to ${to}</title>
<meta http-equiv="refresh" content="0; URL=${to}">
<link rel="canonical" href="${to}">
  `.trim();
  fs.writeFileSync(path.join(__dirname + "/build", from + ".html"), template);
  console.log(template);
});
