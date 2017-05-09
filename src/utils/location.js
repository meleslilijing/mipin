export const formatParams = (params) => {
  const r = [];
  for(let name in params) {
    const value = encodeURIComponent(params[name]);
    r.push(name + '=' + value);
  }
  return r.join('&');
}

export const unformatParams = () => {
	const string = window.location.search.slice(1);

	const arr = string.split('&');
	const r = {};

	arr.forEach(item => {
		const temp = item.split('=');
		const key = temp[0];
		const value = decodeURIComponent(temp[1]);
		
		r[key] = value
	})

	return r;
}

// 页面跳转
export const redirect = {
	_getHref(name) {
		const origin = window.location.origin;

		const url = process.env.NODE_ENV === 'development' ? 
			name + '.html' : 
			name;

		return origin + '/' + url;
	},
	danmu(params) {
		window.location.href = this._getHref('danmu') + '?' + formatParams(params);
	},
	evaluation(params) {
		window.location.href = this._getHref('evaluation') + '?' + formatParams(params);
	},
	evaluation_result(params) {
		window.location.href = this._getHref('evaluation_result') + '?' + formatParams(params);
	}
};

export default {
	formatParams,
	unformatParams,
	redirect
}