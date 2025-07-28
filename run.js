// Executa chamadas da agent.yaml com Claude Desktop via prompt CLI
import fs from 'fs';
import dotenv from 'dotenv';
import readline from 'readline';

dotenv.config();

const agent = fs.readFileSync('./agent.yaml', 'utf8');
const CLAUDE_API = process.env.CLAUDE_API_KEY; // Opcional

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Prompt: ', async (input) => {
  const payload = {
    context: agent,
    prompt: input,
    temperature: 0.4
  };

  const res = await fetch('http://localhost:5005/claude', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': CLAUDE_API ? `Bearer ${CLAUDE_API}` : undefined
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log('\nResposta IA:');
  console.log(data.output || JSON.stringify(data, null, 2));
  rl.close();
});
