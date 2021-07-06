class StorageFunctionType {
	/**
	 * PUT operations add a resource to the StorageEngine
	 */
	static PUT = 'put';

	/**
	 * GET operations return a resource from the StorageEngine
	 */
	static GET = 'get';

	/**
	 * DEL operations delete a resource from the StorageEngine
	 */
	static DEL = 'delete';
}

class StorageFunction {
	/**
	 * A blank StorageFunction with no type and no function
	 */
	static NULL = new StorageFunction(null, null);

	/**
	 * Build an function to run for a data operation
	 * @param {StorageFunctionType} type The operation this StorageFunction is doing
	 * @param {Function} func The function to execute
	 */
	constructor(type, func) {
		this.type = type;
		this.func = func;
	}
}

class StorageFunctionGroup {
	/**
	 * Create a new StorageFunctionGroup
	 * @param {StorageFunction} getFunc GET StorageFunction
	 * @param {StorageFunction} putFunc PUT StorageFunction
	 * @param {StorageFunction} delFunc DEL StorageFunction
	 */
	constructor(getFunc, putFunc, delFunc) {
		this.getFunc = getFunc;
		this.putFunc = putFunc;
		this.delFunc = delFunc;
	}
}

module.exports = {
	StorageFunctionType,
	StorageFunction,
	StorageFunctionGroup
};
