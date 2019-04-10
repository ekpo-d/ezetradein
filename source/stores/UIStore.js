import { observable, action } from 'mobx';
import { setClassProps } from '../utils/helpers';

/**
 * MobX store class.
 * For app wide UI configurations (e.g modals and tabs)
 * @class
 */
export default class UIStore {
	/**
	 * Dummy Variable
	 * @type {string}
	 */
	@observable name = 'UIStore';

	/**
	 * Function used to assign values to the members of
	 *  this class from an external function or a react component.
	 * @param {Array} arr - An array key:value pairs of class members and their values
	 * @param {Object} self - Refers to the class itself or a member which is a member.
	 */
	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
