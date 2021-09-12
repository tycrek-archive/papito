# Papito

**Papito** is a "data engine" system, primarily designed for use with [ass](https://github.com/tycrek/ass). This package comes with a [sample engine using JSON](https://github.com/tycrek/papito/blob/v0.2.7/JsonStorageEngine.js), which is used as the default data engine in ass.

Papito allow a universal interface for data management. Simply run **GET**, **PUT**, **DEL**, and **HAS** operations on your data and the Papito engine will handle the rest, whether it be JSON, MySQL, or something else entirely.

## Usage

Install using `npm i @tycrek/papito`. **Please read the [ass Wiki](https://github.com/tycrek/ass/wiki/Writing-a-StorageEngine) to properly use this package.**
