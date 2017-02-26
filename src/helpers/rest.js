export default class REST {

  static proxyAddress = 'http://ip.jsontest.com/';

  static get(url, params = {}) {
    return REST.send(url, params, { method: 'get' });
  }

  static post(url, params = {}) {
    return REST.send(url, params, { method: 'post' });
  }

  static put(url, params = {}) {
    return REST.send(url, params, { method: 'put' });
  }

  static options(url, params = {}) {
    return REST.send(url, params, { method: 'options' });
  }

  static patch(url, params = {}) {
    return REST.send(url, params, { method: 'patch' });
  }

  static async send(url, params, options) {
    const queryParams = this.encodeQueryData({ ...params, format: 'json' });

    try {
      const response = await fetch(`${this.proxyAddress}/${url}?${queryParams}`, options);
      if (!response.ok) {
        /* Better error handling required. */
        throw new Error('Service unavailable');
      }
      return response.json();
    } catch (error) {
      return console.error(error.message);
    }
  }

  static encodeQueryData(data) {
    // CHECK OUT /////////////
    // const ret = [];
    // for (const d of Object.keys(data)) {
    //   if (data.hasOwnProperty(d)) {
    //     ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
    //   }
    // }
    // Object.assign(options, opts)
    // return ret.join('&');
    // ////////////////////////
    return `?${Object.keys(data)
      .map(key => [key, data[key]].map(encodeURIComponent).join('=')).join('&')}`;
  }
}
