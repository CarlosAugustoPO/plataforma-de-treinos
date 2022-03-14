const path = require('path');
const envPath = path.resolve(process.cwd(), '.env.local');

console.log({ envPath });

require('dotenv').config({ path: envPath });

const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT),
  },
});

async function query(q) {
  try {
    const results = await db.query(q);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fname TEXT NOT NULL,
      lname TEXT NOT NULL,
      email varchar(255) NOT NULL UNIQUE KEY,
      jwtKey TEXT NULL,
      verification_code INT NOT NULL,
      is_verified TIMESTAMP NULL,
      password TEXT NOT NULL,
      fragment_hash_password TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at
        TIMESTAMP
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
    )
    `);
    console.log('Create users ran successfully');

    await query(`
    CREATE TABLE IF NOT EXISTS magic_links (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_email varchar(255) NOT NULL UNIQUE KEY,
      magic_token TEXT NOT NULL,
      is_disabled TIMESTAMP NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at
        TIMESTAMP
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
    )
    `);
    console.log('Create magic_links ran successfully');
  } catch (e) {
    console.error(
      'could not run migration, double check your credentials.',
    );
    process.exit(1);
  }
}

migrate().then(() => process.exit());
