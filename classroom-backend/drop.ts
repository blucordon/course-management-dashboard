import { db } from './src/db.js';
import { sql } from 'drizzle-orm';
db.execute(sql`DROP TABLE demo_users CASCADE`).then(()=>console.log('dropped')).catch(console.error);
