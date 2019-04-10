import { observable, action } from 'mobx';
import { setClassProps } from '../utils/helpers';

export default class UIStore {
	navigation = '';

	@observable activeModals = {
		open: false,
		type: 'loading',
	};

	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
