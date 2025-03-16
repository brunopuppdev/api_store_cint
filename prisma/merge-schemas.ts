import * as fs from 'fs';
import * as path from 'path';

const baseSchema = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

`;

const modelsDir = path.join(__dirname, './models');
const outputFile = path.join(__dirname, 'schema.prisma');

// Lê todos os arquivos .prisma da pasta models
const modelFiles = fs.readdirSync(modelsDir)
  .filter(file => file.endsWith('.prisma'));

// Combina o schema base com todos os modelos
let finalSchema = baseSchema;
for (const file of modelFiles) {
  const modelContent = fs.readFileSync(path.join(modelsDir, file), 'utf-8');
  finalSchema += '\n' + modelContent;
}

// Escreve o schema final
fs.writeFileSync(outputFile, finalSchema);