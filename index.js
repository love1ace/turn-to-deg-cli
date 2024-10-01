#!/usr/bin/env node

const turnToDeg = (turns) => {
  return turns * 360;
};

const [turns] = process.argv.slice(2).map(Number);

if (isNaN(turns)) {
  console.error("Invalid input. Please provide a valid number for turns.");
  console.error("Usage: turn-to-deg-cli <turns>");
  process.exit(1);
}

const degrees = turnToDeg(turns);

console.log(`Turns: ${turns} turn(s)`);
console.log(`Degrees: ${degrees}°`);