## ca a causer bcp de bug // ajouter npx prisma generate
import { PrismaClient } from '../../src/generated/prisma';
const prisma = new PrismaClient();

## et apres 
npx prisma generate

## ensuite
npx prisma migrate dev --name first-commit
