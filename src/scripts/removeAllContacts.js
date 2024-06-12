import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let dbData = JSON.parse(data);

    dbData.contacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(dbData), 'utf-8');
  } catch (err) {
    console.error('Error handling db.json:', err);
  }
};

await removeAllContacts();
