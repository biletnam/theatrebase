import express from 'express';
import methodOverride from 'method-override';

import * as controllers from '../controllers';

const router = express.Router();

router.use(methodOverride((req, res) => {

	if (req.body && typeof req.body === 'object' && '_method' in req.body) {

		const method = req.body._method;

		delete req.body._method;

		return method;

	}

}));

router.get('/', controllers.productions.listRoute);

router.get('/characters/:uuid/edit', controllers.characters.editRoute);
router.post('/characters/:uuid', controllers.characters.updateRoute);
router.delete('/characters/:uuid', controllers.characters.deleteRoute);
router.get('/characters/:uuid', controllers.characters.showRoute);
router.get('/characters', controllers.characters.listRoute);

router.get('/people/:uuid/edit', controllers.people.editRoute);
router.post('/people/:uuid', controllers.people.updateRoute);
router.delete('/people/:uuid', controllers.people.deleteRoute);
router.get('/people/:uuid', controllers.people.showRoute);
router.get('/people', controllers.people.listRoute);

router.get('/playtexts/:uuid/edit', controllers.playtexts.editRoute);
router.post('/playtexts/:uuid', controllers.playtexts.updateRoute);
router.delete('/playtexts/:uuid', controllers.playtexts.deleteRoute);
router.get('/playtexts/:uuid', controllers.playtexts.showRoute);
router.get('/playtexts', controllers.playtexts.listRoute);

router.get('/productions/new', controllers.productions.newRoute);
router.post('/productions', controllers.productions.createRoute);
router.get('/productions/:uuid/edit', controllers.productions.editRoute);
router.post('/productions/:uuid', controllers.productions.updateRoute);
router.delete('/productions/:uuid', controllers.productions.deleteRoute);
router.get('/productions/:uuid', controllers.productions.showRoute);
router.get('/productions', (req, res) => res.redirect('/'));

router.get('/theatres/:uuid/edit', controllers.theatres.editRoute);
router.post('/theatres/:uuid', controllers.theatres.updateRoute);
router.delete('/theatres/:uuid', controllers.theatres.deleteRoute);
router.get('/theatres/:uuid', controllers.theatres.showRoute);
router.get('/theatres', controllers.theatres.listRoute);

export default router;
