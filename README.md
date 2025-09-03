# Discord SHOUT!

A very simple FoundryVTT module that automatically tells your players on Discord when the world is open via Discord webhooks. With this module enabled you can't secretly work on your world, but if you don't mind your players showing up while you're prepping & working on their characters, then this module is for you. It will automatically tell your players the world name and game system that are open.

It initializes every time there are 0 players in game and one joins. If more players join it won't send again, but if you log out and log back in, or have to restart due to other modules, then it will send again when you log back in.

There are 4 settings to configure:

## Webhook URL

This is the URL to the webhook on your Discord server.

## Foundry URL

This is the URL your players use to access the game. Whether that's your IP, or a URL you've configured. Optional.

## Description

This is the text that it tells your players in the embed. Optional, and has a default value.

## Color

This is the color of the embed, needs to be in the format of "#FF00FF". Optional, but if you don't put anything in, it will default to Foundry Orange.