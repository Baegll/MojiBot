import 'dotenv/config';
import { readFileSync } from 'fs';

export async function DiscordRequest(endpoint, options) {
  console.log("Starting DiscordRequest");
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(`Status: ${res.status}\nResponse: ${res.json()}`);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  console.log(`Ending Request,\nStatus: ${res.status}\nResponse: ${res.json()}`);
  return res;
}

export async function InstallGlobalCommands(appId, commands) {
  console.log(`Starting InstallGlobalCommands\nappId: ${appId}\ncommands: ${commands}`);
  // API endpoint to overwrite global commands
  const endpoint = `applications/${appId}/commands`;

  try {
    // This is calling the bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await DiscordRequest(endpoint, { method: 'PUT', body: commands });
  } catch (err) {
    console.error(err);
  }
}

export function getSpiritList() {
  const file = 'spirit_data.js';
  const content = readFileSync(file, 'utf-8');

  const exportStructRegex = /export\s+const\s+(\w+)\s*=\s*{/g;

  let match;
  const exportedStructs = [];
  while ((match = exportStructRegex.exec(content)) !== null) {
    exportedStructs.push(match[1]);
  }

  console.log('Exported Spirits:', exportedStructs);

  return exportedStructs.filter(structName => structName !== 'EXAMPLE');
}

export async function getSpiritMap() {
	const exportsMap = {};
    const module = await import(`./spirit_data.js`);
    for (var name of getSpiritList()) {
        exportsMap[name] = module[name];
    }
    return exportsMap;
}

export function createSpiritChoices() {
  const commandChoices = [];

  for (let choice of getSpiritList()) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

export const statusEnum = {
  NOT_CREATED: 'notCreated',
  CREATED: 'created',
  STARTED: 'started',
};

export var emptyStats = {
  presence:0,
  health:0,
  speed:0,
  luck:0,
  knowledge:0,
  initiative:0,
  inventory:0,
  strike:0
}

// Simple method that returns a random emoji from list
export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
