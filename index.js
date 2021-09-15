const { name: EngineName, version: EngineVersion } = require('./package.json');
const { DataEngine, DataType } = require('./DataEngine');
const { DataFunctionType, DataFunction, DataFunctionGroup } = require('./DataFunction');
const { KeyFoundError, KeyNotFoundError } = require('./Errors');
const JsonDataEngine = require('./JsonDataEngine');

module.exports = {
	EngineName,
	EngineVersion,
	DataEngine,
	DataType,
	DataFunction,
	DataFunctionType,
	DataFunctionGroup,
	JsonDataEngine,
	KeyFoundError,
	KeyNotFoundError,

	_ENGINE_: (_oldData) => new JsonDataEngine()
};
