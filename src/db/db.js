
import Dexie from 'dexie';
export const db = new Dexie('database'); 
db.version(1).stores({
  students: '++id, name , age', // Primary key and indexed props
});
