module.exports = async function(req, res) {
  res.setHeader("Content-Type", "text/html");
  try {
    var links = await fetch("https://crestatic.vercel.app/creuserr/creuserr/static/crelink/data.json");
    links = await links.json();
    var meta 
    res.status(200).send("Redirecting...");
  } catch(e) {
    res.status(400).send("Failed to connect");
  }
}