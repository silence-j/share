import { cloneDeep } from 'lodash';

export const addressJson = require('api/cba_address.json').RECORDS;
/**
 * list数据拼装tree数据结构
 * @param name
 */
export const transData = (a, idStr, pidStr, childrenStr) => {
  const r = [];
  const hash = {};
  const id = idStr;
  const pid = pidStr;
  const children = childrenStr;
  let i = 0;
  let j = 0;
  const len = a.length;
  for (; i < len; i += 1) {
    a[i].id = (a[i].id).toString();
    hash[a[i][id]] = a[i];
  }
  for (; j < len; j += 1) {
    const aVal = a[j];
    aVal.id = (aVal.id).toString();
    if (aVal.parentId === aVal.id) {
      r.push(aVal);
    } else {
      const hashVP = hash[aVal[pid]];
      if (hashVP) {
        !hashVP[children] && (hashVP[children] = []);
        hashVP[children].push(aVal);
      } else {
        r.push(aVal);
      }
    }
  }
  return r;
};
/**
 * 根据id返回对应的名字
 * @param name
 */
const cloneAddress = cloneDeep(addressJson);
export const findAreaName = (id) => {
  const findItem = cloneAddress.find(x => x.id === id);
  return findItem ? findItem.name : '';
};
export const findAreaNames = (ids) => {
  let names = '';
  cloneAddress.forEach((item) => {
    if (ids.indexOf(item.id) !== -1) {
      names += `${item.name},`;
    }
  });
  return names.slice(0, names.length - 1);
};
export const addressData = transData(cloneAddress, 'id', 'pid', 'children');
/** 获取省市不要区* */
// const cities = addressJson.filter(x => x.level === '1' || x.level === '2')
// export const addressCities = transData(cities, 'id', 'pid', 'children')
