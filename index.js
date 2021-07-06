const { StorageEngine, StorageType } = require('./StorageEngine');
const { StorageFunctionType, StorageFunction, StorageFunctionGroup } = require('./StorageFunction');
const JsonStorageEngine = require('./JsonStorageEngine');

module.exports = {
	StorageEngine,
	StorageType,
	StorageFunction,
	StorageFunctionType,
	StorageFunctionGroup,
	JsonStorageEngine
};
