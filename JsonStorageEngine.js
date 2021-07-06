const fs = require('fs/promises');
const { StorageType, StorageEngine } = require('./StorageEngine');
const { StorageFunction, StorageFunctionType, StorageFunctionGroup } = require('./StorageFunction');

const STORAGE = {
	FILENAME: 'data.json',
	DATA: new Map()
};

STORAGE.DATA.toJson = () => {
	const json = {};
	STORAGE.DATA.forEach((resourceData, resourceId) => json[resourceId] = resourceData);
	return JSON.stringify(json, null, 4);
}

STORAGE.DATA.save = (resolve, reject) => {
	fs.writeFile(STORAGE.FILENAME, STORAGE.DATA.toJson())
		.then(resolve)
		.catch(reject);
}

function JsonGetFunc(resourceId) {
	return new Promise((resolve, reject) =>
		(STORAGE.DATA.has(resourceId))
			? resolve(STORAGE.DATA.get(resourceId))
			: reject(new Error('Key does not exist!')));
}

function JsonPutFunc(resourceId, resourceData) {
	return new Promise((resolve, reject) =>
		(!STORAGE.DATA.has(resourceId))
			? (STORAGE.DATA.set(resourceId, resourceData), STORAGE.DATA.save(resolve, reject), null)
			: reject(new Error('Key already exists!')));
}

function JsonDelFunc(resourceId) {
	return new Promise((resolve, reject) =>
		(STORAGE.DATA.has(resourceId))
			? (STORAGE.DATA.delete(resourceId), STORAGE.DATA.save(resolve, reject), null)
			: reject(new Error('Key does not exist!')));
}

class JsonStorageEngine extends StorageEngine {
	/**
	 * Create a new JsonStorageEngine
	 * @param {String} filename Filename for the JSON file. Defaults to 'data.json'
	 */
	constructor(filename = 'data.json') {
		STORAGE.FILENAME = filename;
		super('JSON', StorageType.FILE, new StorageFunctionGroup(
			new StorageFunction(StorageFunctionType.GET, JsonGetFunc),
			new StorageFunction(StorageFunctionType.PUT, JsonPutFunc),
			new StorageFunction(StorageFunctionType.DEL, JsonDelFunc)
		));
	}

	get size() {
		return STORAGE.DATA.size;
	}

	toString() {
		return STORAGE.DATA;
	}
}

module.exports = JsonStorageEngine;
