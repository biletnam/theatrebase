import neo4j from 'neo4j';

const databaseHost = process.env.DEV_DATABASE_HOST
const databaseName = process.env.DEV_DATABASE_NAME
const databasePort = process.env.DEV_DATABASE_PORT

const db = new neo4j.GraphDatabase({
	url: `http://neo4j:${databaseName}@${databaseHost}:${databasePort}`
});

export default function (query, queryOpts = {}) {

	const isReqdResult = queryOpts.isReqdResult === false ? false : true;
	const returnArray = queryOpts.returnArray || false;

	return new Promise(function (resolve, reject) {

		db.cypher({ query }, function (err, results) {

			if (err) return reject(err);

			return (!results.length && isReqdResult) ?
				reject(err) :
				resolve(returnArray ? results : results[0]);

		});

	});

};
