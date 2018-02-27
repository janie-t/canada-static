import get from 'lodash/get';
import dictionaries from './dictionaries';

const DEFAULT_LANG = 'en';
const PARAMS_REG_EXP = '%{(.*?)}';
const paramsRegExp = new RegExp(PARAMS_REG_EXP, 'g');
const language = navigator.language ? navigator.language.split('-')[0] : DEFAULT_LANG;

const content = (path, params) => {
  const text = get(dictionaries[language], path, '');
  return params ? text.replace(paramsRegExp, (replaceText, key) => params[key]) : text;
};

export { dictionaries };
export default content;
