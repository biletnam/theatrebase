const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');

const getInstanceFixture = require('../../fixtures/theatres/get-instance');

let action;

const subject = require('../../../dist/lib/create-alert-data');

describe('Create Alert Data module', () => {

	describe('create action', () => {

		beforeEach(() => {

			action = 'create';

		});

		context('instance does not have model errors', () => {

			it('will return data for successful create alert', () => {

				const instanceFixture = getInstanceFixture();
				const alertData = subject(instanceFixture, action);
				expect(alertData).to.deep.eq({ text: 'THEATRE CREATED: Almeida Theatre', type: 'success' });

			});

		});

		context('instance has model errors', () => {

			it('will return data for unsuccessful create alert', () => {

				const alertData = subject(getInstanceFixture({ hasError: true }), action);
				expect(alertData).to.deep.eq({ text: 'THEATRE ERRORS', type: 'error' });

			});

		});

	});

	describe('update action', () => {

		beforeEach(() => {

			action = 'update';

		});

		context('instance does not have model errors', () => {

			it('will return data for successful update alert', () => {

				const instanceFixture = getInstanceFixture();
				const alertData = subject(instanceFixture, action);
				expect(alertData).to.deep.eq({ text: 'THEATRE UPDATED: Almeida Theatre', type: 'success' });

			});

		});

		context('instance has model errors', () => {

			it('will return data for unsuccessful update alert', () => {

				const alertData = subject(getInstanceFixture({ hasError: true }), action);
				expect(alertData).to.deep.eq({ text: 'THEATRE ERRORS', type: 'error' });

			});

		});

	});

	describe('delete action', () => {

		beforeEach(() => {

			action = 'delete';

		});

		context('instance does not have model errors', () => {

			it('will return data for successful delete alert', () => {

				const instanceFixture = getInstanceFixture();
				const alertData = subject(instanceFixture, action);
				expect(alertData).to.deep.eq({ text: 'THEATRE DELETED: Almeida Theatre', type: 'success' });

			});

		});

		context('instance has model errors (existing dependent associations)', () => {

			it('will return data for unsuccessful creation alert', () => {

				const instanceFixture = getInstanceFixture(
						{ hasError: true, errorsAssociations: { associations: ['productions'] } }
					);
				const alertData = subject(instanceFixture, action);
				expect(alertData).to.deep.eq(
					{ text: 'THEATRE ERRORS: Dependent associations exist with productions', type: 'error' }
				);

			});

		});

	});

});
