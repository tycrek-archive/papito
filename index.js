const { name: EngineName, version: EngineVersion } = require('./package.json');
const { StorageEngine, StorageType } = require('./StorageEngine');
const { StorageFunctionType, StorageFunction, StorageFunctionGroup } = require('./StorageFunction');
const { KeyFoundError, KeyNotFoundError } = require('./Errors');
const JsonStorageEngine = require('./JsonStorageEngine');

module.exports = {
	EngineName,
	EngineVersion,
	StorageEngine,
	StorageType,
	StorageFunction,
	StorageFunctionType,
	StorageFunctionGroup,
	JsonStorageEngine,
	KeyFoundError,
	KeyNotFoundError
};
