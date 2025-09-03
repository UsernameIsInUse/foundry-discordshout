function initialize() {
  game.settings.register('foundry-discordshout', 'webhook', {
    name: "Discord Webhook URL",
    hint: "The webhook URL to send messages to (required).",
    scope: "world",
    config: true,
    type: String,
    default: ""
  });

  game.settings.register('foundry-discordshout', 'url', {
    name: "Foundry URL",
    hint: "The Foundry game URL to send (optional).",
    scope: "world",
    config: true,
    type: String,
    default: ""
  });

  game.settings.register('foundry-discordshout', 'description', {
    name: "Description",
    hint: 'The description to replace the default "Join for a session, or mess with your character!" (optional).',
    scope: "world",
    config: true,
    type: String,
    default: "Join for a session, or mess with your character!"
  });
}

Hooks.once("init", () => {
  console.log("Initializing Discord SHOUT!");
  initialize();  
  console.log("Initialized Discord SHOUT!");
});

