import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const getRandomBoolean = () => Math.random() < 0.5;

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dbData = JSON.parse(data);

    dbData.contacts = dbData.contacts.filter(() => getRandomBoolean());

    await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error handling db.json:', err);
  }
};

await thanos();
