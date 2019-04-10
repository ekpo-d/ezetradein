import { observable, action, toJS } from 'mobx';
import {
	setClassProps,
	runInActionUtil,
	getData,
} from '../utils/helpers';

export default class RestaurantStore {
	searchbarRef = '';

	@observable loading = false;

	@observable refreshing = false;

	@observable restaurants = [];

	@observable showSearchbar = false;

	@observable searchString = '';

	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);

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
