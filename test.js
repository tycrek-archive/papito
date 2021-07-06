const JsonStorageEngine = require('./JsonStorageEngine');

function putGetLogDelGetLog() {
	const se1 = new JsonStorageEngine();
	se1.put('hi', { name: 'awesome-sauce' })
		.then(() => se1.get('hi'))
		.then((d) => console.log(d))
		.then(() => se1.del('hi'))
		.then(() => se1.get('hi'))
		.then((d) => console.log(d))
		.catch(console.error);
}

function putFourSizeDelOneSize() {
	const se2 = new JsonStorageEngine();
	se2.put('foo_1', { name: 'FooBar One!' })
		.then(() => se2.put('foo_2', { name: 'FooBar Two!' }))
		.then(() => se2.put('foo_3', { name: 'FooBar Three!' }))
		.then(() => se2.put('foo_4', { name: 'FooBar Four!' }))
		.then(() => console.log(se2.toString()))
		.then(() => console.log(se2.size))
		.then(() => se2.del('foo_2'))
		.then(() => console.log(se2.toString()))
		.then(() => console.log(se2.size))
		.catch(console.error);

}

//putGetLogDelGetLog();
putFourSizeDelOneSize();