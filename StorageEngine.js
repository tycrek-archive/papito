const { StorageFunction, StorageFunctionGroup } = require('./StorageFunction');

class StorageType {
	/**
	 * Used to describe file-based data storage.
	 * Would be used for things like JSON or YAML
	 */
	static FILE = 'file';

	/**
	 * Used to describe a database engine.
	 * Would be used for things like MongoDB, MySQL, PostgreSQL
	 */
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

	/**
	 * Get resource data from the StorageEngine
	 * @param {String} resourceId The ID of the resource to get data for
	 * @returns {Promise} A Promise containing a JSON Object representing the resource data
	 */
	get(resourceId) {
		return this.#getFunc.func.call(null, resourceId);
	}

	/**
	 * Adds a resource to the StorageEngine
	 * @param {String} resourceId The ID of the resource to add
	 * @param {Object} resourceData The data for the resource
	 * @returns {Promise}
	 */
	put(resourceId, resourceData) {
		return this.#putFunc.func.call(null, resourceId, resourceData);
	}

	/**
	 * Deletes a resource from the StorageEngine
	 * @param {String} resourceId The ID of the resource to delete
	 * @returns {Promise}
	 */
	del(resourceId) {
		return this.#delFunc.func.call(null, resourceId);
	}
}

module.exports = {
	StorageType,
	StorageEngine,
};
