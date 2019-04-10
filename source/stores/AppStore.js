import { configure, observable, action } from 'mobx';
import { setClassProps } from '../utils/helpers';

configure({ computedRequiresReaction: 'strict' });

/**
 * MobX store class.
 * This creates the base store for the app.
 * It containes configuration for all stores and app wide preferences.
 * @class
 */
export default class AppStore {
	/**
	 * Dummy Varaible
	 * @type {string}
	 */
	@observable name = 'AppStore';

	/**
	 * Function used to assign values to the members of
	 *  this class from an external function or a react component.
	 * @param {Array} arr - An array key:value pairs of class members and their values
	 * @param {Object} self - Refers to the class itself or a member which is a member.
	 */
	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
