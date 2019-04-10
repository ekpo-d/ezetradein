/**
 * MobX store classes inistantiation.
 * This is where all MobX stores are instantiated
 * and exported for use within the Provider.
 */

import AppStoreClass from './AppStore';
import UIStoreClass from './UIStore';
import RestaurantStoreClass from './RestaurantStore';

 /**
 * AppStore - For app wide store configuration and preferences.
 * @class
 */
const AppStore = new AppStoreClass();

 /**
 * UIStore - For app wide UI configurations (e.g modals and tabs).
 * @class
 */
const UIStore = new UIStoreClass();

 /**
 * RestaurantStore - For restaurant component and related actions.
 * @class
 */
const RestaurantStore = new RestaurantStoreClass();

export default {
	AppStore,
	UIStore,
	RestaurantStore,
};
