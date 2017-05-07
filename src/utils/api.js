import superagent from 'superagent';

const errFunc = (url, message) => {
	console.error(`api request: ${url} ${message}`);
}

const formatParams = (params) => {
	const temp = []
	for(name in params) {
		const value = params[name];
		temp.push(`${name}=${value}`);
	}

	return temp.join('&')
}

/**
 * 
 * @param  string url
 * @param  object options 参数列表
 * @return bool type 	请求类型 GET/POST
 */
const request = (url, type='GET') => {
	return ( options={} ) => {
		return new Promise((resolve, reject) => {
				let s
				if(type === 'GET') {
					s = () => {
						return superagent.get(url).query(options);
					}
				}
				else if(type === 'POST') {
					s = () => {
						// passport 强制要求 serviceToken
						// options['serviceToken'] = encodeURIComponent(serviceToken);
						// const queryJsonString = JSON.stringify(options);
						const queryJsonString = formatParams(options);

						return superagent.post(url).send(queryJsonString);
					}
				}
				// else if(type === 'DOWN_LOAD') {
				// 	 let downLoadPath = url + '?' + formatParams(options)
				// 	 if(!/https?:/.test(downLoadPath)) {
				// 	 	downLoadPath = location.origin+downLoadPath
				// 	 }
				// 	 window.open(downLoadPath);
				// 	 // return resolve(downLoadPath);
				// }
				else {
					return new Error('Api request only support GET or POST');
				}

				return s()
					.end((err, req) => {
						if(err) {
							errFunc(url, err);
							reject(err);
							return ;
						}
						
						const body = req.body;
						const { errCode, result } = body;

						if(errCode != 0) {
							errFunc(url, result);
							reject(result);
							return ;
						}
						else {
							resolve(result);	
						}
						
					})
		})	// end of Promise
	}
}

/**
 * 弹幕页
 * 通过手机号查询用户
 * phoneNumber    手机号
 */
export const queryUserInfoByNumber = request('/account/queryUserInfoByNumber', 'POST');

/**
 * 评价页面
 * 通过手机号查询评价标签 
 * phoneNumber    手机号
 */
export const queryRateTagsByNumber = request('/rate/queryRateTagsByNumber', 'POST');

/**
 * 评价页面
 * 提交评价
 * raterNumber  评价者手机号
 * rateeNumber  被评价者手机号
 * rateeName    被评价者姓名
 * rate         评级
 * tags         标签列表，以\001分隔
 * comment      评论内容
 * sendMms      是否发送短信
 */
export const submitRateContent = request('/rate/submitRateContent', 'POST');

export default {
	queryUserInfoByNumber,
	queryRateTagsByNumber,
	submitRateContent
}