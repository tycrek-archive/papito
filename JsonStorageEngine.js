const { StorageType, StorageEngine } = require('./StorageEngine');
const { StorageFunction, StorageFunctionType, StorageFunctionGroup } = require('./StorageFunction');

const data = new Map();

function JsonGetFunc(resourceId) {
	return new Promise((resolve, reject) =>
		(data.has(resourceId))
			? resolve(data.get(resourceId))
			: reject(new Error('Key does not exist!')));
}

function JsonPutFunc(resourceId, resourceData) {
	return new Promise((resolve, reject) =>
		(!data.has(resourceId))
			? (data.set(resourceId, resourceData), resolve(), null)
			: reject(new Error('Key already exists!')));
}

function JsonDelFunc(resourceId) {
	return new Promise((resolve, reject) =>
		(data.has(resourceId))
			? (data.delete(resourceId), resolve(), null)
			: reject(new Error('Key does not exist!')));
}

class JsonStorageEngine extends StorageEngine {
	/**
	 * Create a new JsonStorageEngine
	 * @param {String} filename Filename for the JSON file. Defaults to 'data.json'
	 */
	constructor(filename = 'data.json') {
		super('JSON', StorageType.FILE, new StorageFunctionGroup(
			new StorageFunction(StorageFunctionType.GET, JsonGetFunc),
			new StorageFunction(StorageFunctionType.PUT, JsonPutFunc),
			new StorageFunction(StorageFunctionType.DEL, JsonDelFunc)
		));
	}

	get size() {
		return data.size;
	}

	toString() {
		return data;
	}
}

module.exports = JsonStorageEngine;
