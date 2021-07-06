# ass-storage-engine

[![npm (scoped)](https://img.shields.io/npm/v/@tycrek/ass-storage-engine?color=%23CB3837&label=View%20on%20NPM&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@tycrek/ass-storage-engine)

[ass](https://github.com/tycrek/ass) `StorageEngine` base. This package also comes with a [sample `StorageEngine` using JSON](https://github.com/tycrek/ass-storage-engine/blob/master/JsonStorageEngine.js), which is used as the default `StorageEngine` in ass.

`StorageEngine`s allow a universal interface for data management. Simply run **GET**, **PUT**, **DEL**, and **HAS** operations on your data and the `StorageEngine` will handle the rest, whether it be JSON, MySQL, or something else entirely.

## Usage

Install using `npm i @tycrek/ass-storage-engine`. **Please read the [ass Wiki](https://github.com/tycrek/ass/wiki/Writing-a-StorageEngine) to properly use this package.**
