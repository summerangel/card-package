/**
 * Created by summer on 2018/12/16.
 */
import qs from 'qs';
import URL from 'url-parse';
import { isEmpty, isString } from 'lodash';
import api from '../api/index';

const NETWORK_ERROR = '网络连接异常';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1MjM1MDI2OTA1MzAwOTkyMDAiLCJzdWIiOiJ7XCJvcGVuSWRcIjo1MjM1MDI2OTA1MzAwOTkyMDAsXCJwYXJ0bmVyXCI6MTAwMDAwfSIsImlzcyI6IkZFIiwiaWF0IjoxNTQ0OTQ2OTgxLCJleHAiOjE1NDU1NTE3ODF9.StBRQZNOMj3RjN1i4A16yQl4-0k1tPb__a5ihJt7clo';
const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    'partner': 100000,
    'version': 'v1.0',
    'sign': '',
    'token': TOKEN
  },
  //   mode: "no-cors",
  credentials: 'same-origin',
};

function jsonResponseHandler(data, apiOptions) {
  return Promise.resolve(data);
}

export const request = {
  async sendRequest(url, options = {}) {
    if (!isEmpty(options.qs)) {
      url = this.addQueryString(url, options.qs);
    }

    url = this.normalizeRestfulParams(url, options);

    let tokenFromNative = '';

    let token = tokenFromNative || TOKEN;

    const ops = { ...defaultOptions };
    ops.headers.token = token;
    if (!isEmpty(options) && !isEmpty(options.headers)) {
      ops.headers = Object.assign({}, ops.headers, options.headers);
      delete options.headers;
    }
    this.options = Object.assign({}, ops, options);

    const apiOptions = Object.assign({}, this.options, options);
    return fetch(url, apiOptions)
      .then(response => {
        if (!response.ok) {
          try {
            return response.json().then(data => {
              return Promise.reject(data);
            });
          } catch (e) {
            return Promise.reject({ responseMsg: NETWORK_ERROR });
          }
        }
        return response.json();
      })
      .then(
        async data => {
          const { responseCode } = data;
          if (responseCode === '000') {
            if (!!apiOptions.allData) {
              // 是否返回所有的数据，包括 应答码
              return data;
            }
            return data.data;
          } else if (responseCode === 'gateway01') {
            window.location.href = '/card/register';
          } else {
            return Promise.reject(data);
          }
        },
        data => Promise.reject(data)
      );
  },
  get(url, params = {}, options = {}) {
    if (!isEmpty(params)) {
      url = addQueryString(url, params);
    }
    return this.sendRequest(url, options);
  },
  post(url, data = {}, options = {}) {
    return this.sendRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  },
  put(url, data = {}, options = {}) {
    return this.sendRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  },
  delete(url, data = {}, options = {}) {
    return this.sendRequest(url, {
      method: 'DELETE',
      body: JSON.stringify(data),
      ...options,
    });
  },
  upload(url, inputFiles, extraData, fileFieldName, options = {}) {
    const formData = new FormData();
    if (!isEmpty(extraData)) {
      const keys = Object.keys(extraData);
      for (const key of keys) {
        formData.append(key, extraData[key]);
      }
    }
    const fieldName = fileFieldName || 'files';
    let i = 0;
    for (; i < inputFiles.length; i++) {
      formData.append(fieldName, inputFiles[i]);
    }

    url = normalizeRestfulParams(url, options);

    const apiOptions = Object.assign(
      {
        method: 'POST',
        body: formData,
        credentials: 'same-origin',
      },
      options
    );
    return fetch(url, apiOptions)
      .then(response => response.json())
      .then(data => jsonResponseHandler(data, apiOptions));
  },
  normalizeRestfulParams(url, { restParams = [] } = {}) {
    return formatRestfulUrl(url, restParams);
  },
};

export default api;

function addQueryString(url, params, baseUrl = '', noHost = false) {
  if (isEmpty(params)) return url;
  const obj = new URL(url, baseUrl);
  const addedQuery = isString(params) ? params : qs.stringify(params);
  const query = obj.query ? `${obj.query}&${addedQuery}` : `?${addedQuery}`;
  const fullHost = obj.protocol ? `${obj.protocol}//${obj.host}` : '';
  return `${noHost ? '' : fullHost}${obj.pathname}${query}${obj.hash}`;
}

function normalizeRestfulParams(url, { restParams = [] } = {}) {
  return formatRestfulUrl(url, restParams);
}

/**
 * Simplify the rest parameters creation, e.g:
 * //NOTICE: order of params in array is important, params use object do not care about order
 * formatRestfulUrl('/user/:id/:id2', [1,2]) ->  /user/1/2
 * formatRestfulUrl('/user/:id/:id2', {id2: 2, id: 1}) ->  /user/1/2
 * @param {string} url request url definition
 * @param {Array|Object} params rest parameters
 * @return {*}
 */
export const formatRestfulUrl = function(url, params) {
  if (!params || url.indexOf(':') < 0) return url;
  let parts = url.split('/');
  let partIndex = 0;
  const isArray = Array.isArray(params);
  parts.forEach(function(ele, index) {
    if (ele.indexOf(':') === 0) {
      parts[index] = isArray ? params[partIndex] : params[ele.substring(1)];
      partIndex++;
    }
  });
  return parts.join('/');
};
