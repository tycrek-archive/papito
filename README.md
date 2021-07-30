# ass-storage-engine

[ass](https://github.com/tycrek/ass) `StorageEngine` base. This package also comes with a [sample `StorageEngine` using JSON](https://github.com/tycrek/ass-storage-engine/blob/master/JsonStorageEngine.js), which is used as the default `StorageEngine` in ass.

`StorageEngine`s allow a universal interface for data management. Simply run **GET**, **PUT**, **DEL**, and **HAS** operations on your data and the `StorageEngine` will handle the rest, whether it be JSON, MySQL, or something else entirely.

[//]: # (GH PACKAGES TEMPLATE START)
## Usage

This package is installable from [GitHub Packages]. To use this package in your project, create an `.npmrc` file in the same directory as your project's `package.json` file with these contents:

```
@tycrek:registry=https://npm.pkg.github.com
```

[GitHub Packages]: https://github.com/features/packages
[//]: # (GH PACKAGES TEMPLATE END)

Install using `npm i @tycrek/ass-storage-engine`. **Please read the [ass Wiki](https://github.com/tycrek/ass/wiki/Writing-a-StorageEngine) to properly use this package.**
