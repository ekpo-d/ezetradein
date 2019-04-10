
/**
 * General helper functions for multiple uses.
 */

import { runInAction } from 'mobx';
import axios from 'axios';
import { API_KEY } from '../../env/env';
import ErrorAlert from '../components/common/ErrorAlert';

/**
 * Basic get method using Axio lib.
 * @param {string} url - Yelp Fusion API url with query paramsmember.
 */
const getData = url => axios.get(url, { headers: { Authorization: `Bearer ${API_KEY}` } })
														.catch(() => ErrorAlert());

/**
 * Function used to assign values to the members of
 * this class from an external function or a react component.
 * @param {Array} arr - An array key:value pairs of class members and their values
 * @param {Object} self - Refers to the class itself or a member which is a member.
 */
const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
	});
};

/**
 * Utility for the runInAction MobX method used
 * in assigning data to class members within asinc functions.
 * @param {any} data - data to be assigned to class member
 * @param {any} prop - class member
 * @param {Object} self - Refers to the class itself.
 */
const runInActionUtil = (data, prop, self) => {
	runInAction(() => {
		self[prop] = data;
	});
};

/**
 * Function for rendering components based on a condition.
 * @param {Boolean} condition - condition for rendering component
 * @param {Component} content - component to be rendered
 */
const renderIf = (condition, content) => {
  if (condition) {
    return content;
  }
  return null;
};

/**
 * Basic function for truncating a string
 * @param {string} str - string to be truncated
 * @param {integer} limit - word limit
 */
const truncateString = (str, limit) => {
  if (str.length < limit) return str;
  return `${str.slice(0, limit + 1)}...`;
};

export {
	getData,
	setClassProps,
	runInActionUtil,
	renderIf,
	truncateString,
};
