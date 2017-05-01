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

export default {
	formatParams,
	unformatParams
}