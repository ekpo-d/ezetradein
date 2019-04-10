import { observable, action, toJS } from 'mobx';
import {
	setClassProps,
	runInActionUtil,
	getData,
} from '../utils/helpers';

/**
 * MobX store class.
 * For restaurant component and related actions.
 * @class
 */
export default class RestaurantStore {
	/**
	 * This holds a reference to the searchbar component.
	 * @type {Object}
	 */
	searchbarRef = '';

	/**
	 * This controls the display of the loading animation in the restaurant list component.
	 * @type {Boolean}
	 */
	@observable loading = false;

	/**
	 * This controls the refreshing indicator on pull down in the restaurant list component
	 * @type {Boolean}
	 */
	@observable refreshing = false;

	/**
	 * This is an array of objects containing individual restaurant data.
	 * @type {Array}
	 */
	@observable restaurants = [];

	/**
	 * This switch shows and hides the searchbar.
	 * @type {Boolean}
	 */
	@observable showSearchbar = false;

	/**
	 * This holds the location search query string.
	 * @type {Boolean}
	 */
	@observable searchString = '';

	/**
	 * Function used to assign values to the members of
	 * this class from an external function or a react component.
	 * @param {Array} arr - An array key:value pairs of class members and their values
	 * @param {Object} self - Refers to the class itself or a member which is a member.
	 */
	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);

	/**
	 * Function used to both get the array of restaurants on initial load,
	 * refresh the list on pull to refresh,
	 * and get new restaurants based on search query.
	 * @param {string} load - load type, either load or refresh.
	 * @param {string} location - location parameter.
	 */
	@action
	getRestaurants = (type = 'load', location = 'NYC') => {
		if (type === 'load') this.loading = true;
		else this.refreshing = true;
		getData(`https://api.yelp.com/v3/businesses/search?location=${location}&term=restaurant&limit=20`)
			.then(result => {
				runInActionUtil(result.data.businesses, 'restaurants', this);
				if (type === 'load') runInActionUtil(false, 'loading', this);
				else runInActionUtil(false, 'refreshing', this);
			});
	};

	/**
	 * Function used during infinite scrolling.
	 * It's triggered when the scroll has reached the specified threshold.
	 */
	@action
	onEndReached = () => {
		const offset = toJS(this.restaurants).length;
		const location = this.searchString || 'NYC';
		getData(`https://api.yelp.com/v3/businesses/search?location=${location}&term=restaurant&limit=20&offset=${offset}`)
			.then(result => {
				runInActionUtil(
					toJS(this.restaurants).concat(result.data.businesses),
					'restaurants',
					this,
				);
			});
	};
}
