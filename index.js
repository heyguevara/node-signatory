
//		Generates a signature for a given set of parameters, given a shared secret.
// 		This algorithm has to be identical to the one in the client code
exports.signature = function( options ){
	
	// Settings
	var config = {
		secret:"",
		path:"",
		separator:"|",
		params:{},
		ignored:[]
	};
	for ( var prop in options ) config[prop] = options[prop];
	
	var secret
	// 1. Create an array of pair objects, e.g. [{key:'a',value:'b'}] excluding ignored parameters
	var fields = [];
	for ( var key in options.params ){
		if ( config.ignored.indexOf(key) == -1 ){
			fields.push({ key:key, value:options.params[key] });
		}
	}
	
	// 2. Sort fields alphabetically on key
	fields.sort(function( a, b ){ return b.key < a.key; });
	
	// 3. Flatten into a querystring-like thing
	fields = fields.map(function(pair){ return pair.key+"="+pair.value }).join("|");
	
	// 4. Now add the system secret, path and the user secret
	var stringToSign = config.secret + "|" + config.path + "|" + fields;
	console.log(stringToSign)
	return hash( stringToSign, 'sha1' );
};


// Convenience wrapper around Node's hash API to cover the most common usage
function hash( str, algorithm, encoding ){
	encoding = encoding || 'hex';
	var hash = require('crypto').createHash(algorithm);
	hash.update(str,'utf8');
	return hash.digest(encoding);
};