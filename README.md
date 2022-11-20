<div align="center">
  <h1>VirusDB</h1>
  <p>
    <a href="https://www.npmjs.com/package/dev.db"><img src="https://img.shields.io/npm/v/dev.db.svg?color=3884FF&label=version" alt="Version" /></a>
    <a href="https://www.npmjs.com/package/dev.db"><img src="https://img.shields.io/npm/dt/dev.db.svg?color=3884FF" alt="Downloads" /></a>
    <a href="https://www.npmjs.com/package/dev.db"><img src="https://img.shields.io/badge/dependencies-0-brightgreen?color=3884FF" alt="Dependencies" /></a>
    <a href="https://packagequality.com/#?package=dev.db"><img src="https://packagequality.com/shield/dev.db.svg?color=3dd164" alt="Quality" /></a>
  </p>
  <br><br>
</div>

A lightweight, 0 dependency, easy-to-use local database using JSON to store data.

- **[Documentation](https://dev.gitbook.io/docs/)**
- **[Yarn Package](https://yarnpkg.com/package/dev.db)**
- **[NPM Package](https://npmjs.com/package/dev.db)**
- **[NPM Package Statistics](https://npm-stat.com/charts.html?package=dev.db&from=2021-05-07)**

Installation
------------

```sh-session
npm install dev.db
yarn add dev.db
pnpm add dev.db
```

Example Usage
-------------

<h3>Database</h3>

```js
const VirusDB = require('dev.db');
const db = new VirusDB();


db.set('money', 100);
db.set('person.name', 'virus');


db.has('money'); // true
db.has('person.name'); // true
db.has('person.age'); // false


db.get('person.name'); // 'virus'
db.get('person.job'); // undefined


db.toJSON(); // { money: 100, person: { name: 'virus' } }
```

<h3>Collections</h3>

```js
const dbConfig =  {
  autoSave: false,
  encryptionKey: 'qwertyuiopasdfghjkpzxxcvbnm',
  dataFile: 'database/dev.db.json',
  collectionsFolder: 'database/collections'
}
const VirusDB = require('dev.db');
const db = new VirusDB(dbConfig);

const Users = db.createCollection('users');


Users.create({ name: 'virus', age: 19 });
Users.create({ name: 'virus24', age: 19 });


Users.update(
  user => user.age = 20,
  target => target.name === 'virus'
);
// or (dev.db@0.0.2+)
const user = Users.get(target => target.name === 'virus');
user.age = 20;
user.save();


Users.get(user => user.name === 'virus'); // { name: 'virus', age: 20 }
Users.getMany(user => user.age > 18); // [{ name: 'virus', age: 20 }, { name: 'virus24', age: 19 }]
```

<p>With TypeScript:</p>

```ts
import { Database, Modifiable } from 'dev.db';
const dbConfig =  {
  autoSave: false,
  encryptionKey: 'qwertyuiopasdfghjkpzxxcvbnm',
  dataFile: 'database/dev.db.json',
  collectionsFolder: 'database/collections'
}

const db = new Database(dbConfig);

type User = {
  name: string
  age: number
}

const Users = db.createCollection<User>('users');


Users.create({ name: 'virus', age: 19 });
Users.create({ name: 'virus24', age: 19 });


Users.update(
  user => user.age = 20,
  target => target.name === 'virus'
);
// or (dev.db@0.0.2+)
const user = <Modifiable<User>> Users.get(target => target.name === 'virus');
user.age = 20;
user.save();


Users.get(user => user.name === 'virus'); // { name: 'virus', age: 20 }
Users.getMany(user => user.age > 18); // [{ name: 'virus', age: 20 }, { name: 'virus24', age: 19 }]
```

Contributing
------------

Before [creating an issue](https://github.com/virgel1995/dev.db/issues), please ensure that it hasn't already been reported or suggested.

When [submitting a new pull request](https://github.com/virgel1995/dev.db/pulls), please make sure the code style/format used is the same as the one used in the original code.

License
-------

Refer to the [LICENSE](LICENSE) file.
