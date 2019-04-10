import { runInAction } from 'mobx';
import axios from 'axios';
import { API_KEY } from '../../env/env';
import ErrorAlert from '../components/common/ErrorAlert';

const getData = url => axios.get(url, { headers: { Authorization: `Bearer ${API_KEY}` } })
														.catch(() => ErrorAlert());

const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
	});
};

const runInActionUtil = (data, prop, self) => {
	runInAction(() => {
		self[prop] = data;
	});
};

const renderIf = (condition, content) => {
  if (condition) {
    return content;
  }
  return null;
};

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
