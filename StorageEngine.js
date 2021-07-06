const { StorageFunction, StorageFunctionType, StorageFunctionGroup } = require('./StorageFunction');

class StorageType {
	static FILE = 'file';
	static DB = 'database';
}

class StorageEngine {
	#getFunc = StorageFunction.NULL;
	#putFunc = StorageFunction.NULL;
	#delFunc = StorageFunction.NULL;

	/**
	 * StorageEngines implement resource storage operations for ass
	 * @param {String} name Name of the Storage Engine
	 * @param {StorageType} type FILE or DB ('file' or 'database')
	 * @param {StorageFunctionGroup} funcGroup The StorageFunctionGroup to get StorageFunction's from
	 */
	constructor(name, type, funcGroup) {
		this.name = name;
		this.type = type;

		this.#getFunc = funcGroup.getFunc;
		this.#putFunc = funcGroup.putFunc;
		this.#delFunc = funcGroup.delFunc;
	}

	get(resourceId) {
		return this.#getFunc.func.call(null, resourceId);
	}


	put(resourceId, resourceData) {
		return this.#putFunc.func.call(null, resourceId, resourceData);
	}

	del(resourceId) {
		return this.#delFunc.func.call(null, resourceId);
	}
}

module.exports = {
	StorageType,
	StorageEngine,
};
