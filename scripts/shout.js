function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}

function sendMessage() {
  const customDescription = game.settings.get('foundry-discordshout', 'description');
  const foundryUrl = game.settings.get('foundry-discordshout', 'url');
  const webhook = game.settings.get('foundry-discordshout', 'webhook');
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');

  var embed = {
    title: `${game.world.title} is open!`,
    footer: {
      text: `System: ${game.system.title} — Sent by Discord SHOUT!`
    },
    color: hexToDecimal("#FF381D")
  }

  if (foundryUrl?.trim()) {
    embed.url = foundryUrl;
  }

  if (customDescription?.trim()) {
    embed.description = customDescription;
  }

  const params = {
    embeds: [ embed ]
  }

  request.send(JSON.stringify(params));
}

Hooks.once("ready", () => {
 sendMessage();
 console.log("Sent Discord message")
});