const modelNamingPropMap = require('./model-naming-prop-map');

const getModelName = instance => instance.constructor.name.toLowerCase();

const checkIfCreateAction = action => action === 'create';

const getPageTitleText = (model, instance) => instance.pageTitleText || instance[modelNamingPropMap[model]];

const getAlertText = (model, instance, action) => {

	const instanceText = instance.title || instance.name;

	return `${model.toUpperCase()} ${instance.hasError ? 'ERRORS' : action.toUpperCase() + 'D: ' + instanceText}`;

};

const getAlertType = instance => instance.hasError ? 'error' : 'success';

module.exports = function (instance, action) {

	const model = getModelName(instance);

	const isCreateAction = checkIfCreateAction(action);

	return {
		title: isCreateAction ? `New ${model}` : getPageTitleText(model, instance),
		modelName: model,
		formAction: `/${model}s${isCreateAction ? '' : '/' + instance.id}`,
		submitValue: `${isCreateAction ? 'Create' : 'Update'} ${model}`,
		alertText: getAlertText(model, instance, action),
		alertType: getAlertType(instance)
	};

};