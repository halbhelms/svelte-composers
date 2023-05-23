import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: '$lib/db/composers.db',
  driver: sqlite3.Database,
});

export async function get ({ params }) {
  const { id } = params;
  const db = await dbPromise;
  const composer = await db.get('SELECT * FROM composers WHERE id = ?', id);
  
  return composer;
}