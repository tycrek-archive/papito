class DataFunctionType {
	/**
	 * PUT operations add a resource to the DataEngine
	 */
	static PUT = 'put';

	/**
	 * GET operations return a resource from the DataEngine
	 */
	static GET = 'get';

	/**
	 * DEL operations delete a resource from the DataEngine
	 */
	static DEL = 'delete';

	/**
	 * HAS operations return a boolean if the DataEngine contains the resource
	 */
	static HAS = 'has';
}

class DataFunction {
	/**
	 * A blank DataFunction with no type and no function
	 */
	static NULL = new DataFunction(null, null);

	/**
	 * Build an function to run for a data operation
	 * @param {DataFunctionType} type The operation this DataFunction is doing
	 * @param {Function} func The function to execute
	 */
	constructor(type, func) {
		this.type = type;
		this.func = func;
	}
}

class DataFunctionGroup {
	/**
	 * Create a new DataFunctionGroup
	 * @param {DataFunction} getFunc GET DataFunction
	 * @param {DataFunction} putFunc PUT DataFunction
	 * @param {DataFunction} delFunc DEL DataFunction
	 * @param {DataFunction} hasFunc HAS DataFunction
	 */
	constructor(getFunc, putFunc, delFunc, hasFunc) {
		this.getFunc = getFunc;
		this.putFunc = putFunc;
		this.delFunc = delFunc;
		this.hasFunc = hasFunc;
	}
}

module.exports = {
	DataFunctionType,
	DataFunction,
	DataFunctionGroup
};
