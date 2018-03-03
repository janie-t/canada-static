import get from 'lodash/get';
import dictionaries from './dictionaries';

const DEFAULT_LANG = 'en';
const PARAMS_REG_EXP = '%{(.*?)}';
const paramsRegExp = new RegExp(PARAMS_REG_EXP, 'g');

const content = (path, params) => {
  const language = DEFAULT_LANG;
  const text = get(dictionaries[language], path, '');
  return params ? text.replace(paramsRegExp, (replaceText, key) => params[key]) : text;
};

export { dictionaries };
export default content;
