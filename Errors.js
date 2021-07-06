class KeyFoundError extends Error {
	/**
	 * An error to throw when a key is found
	 */
	constructor() {
		super('Key already exists');
	}
}

class KeyNotFoundError extends Error {
	/**
	 * An error to throw when a key is not found
	 */
	constructor() {
		super('Key does not exist');
	}
}

module.exports = {
	KeyFoundError,
	KeyNotFoundError
};
