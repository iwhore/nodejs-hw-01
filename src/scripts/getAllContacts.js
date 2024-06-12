import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data;
  } catch (err) {
    console.error('Error handling db.json:', err);
  }
};

console.log(await getAllContacts());
