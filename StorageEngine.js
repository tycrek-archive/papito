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
	#hasFunc = StorageFunction.NULL;

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
		this.#hasFunc = funcGroup.hasFunc;
	}

	/**
	 * Get resource data from the StorageEngine
	 * @param {String=} resourceId The ID of the resource to get data for. If left unspecified, will return the full set of entries
	 * @returns {Promise} A Promise containing a JSON Object representing the resource data, OR the full set of entries as a [key,value] array
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

	/**
	 * Check if a resource exists in the StorageEngine
	 * @param {String} resourceId The ID to check
	 * @returns {Promise} A Promise containing a boolean, true if the StorageEngine DOES have the resource, false if it does not
	 */
	has(resourceId) {
		return this.#hasFunc.func.call(null, resourceId);
	}
}

module.exports = {
	StorageType,
	StorageEngine,
};
