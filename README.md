## node-signatory

[![Build Status](https://secure.travis-ci.org/riskpenguin/node-signatory.png)](http://travis-ci.org/riskpenguin/node-signatory)

Node implementation of the API request signing algorithm used at Guevara.

Creates a base string according to some repeatable rules, and hashes it using SHA1 to generate a signature for that request

1. take the input map and convert it into an array of key/value pairs
2. sort the array alphabetically by key
3. flatten into separated pairs, e.g. `key=value&foo=bar`
4. prepend with secret, request method, and request path to form `my-secret|/some/url/path|key=value&foo=bar`
5. hash using SHA1



###Installation:

		npm install signatory

###Middleware Example:

		var serverSignature = request('signatory').signature({
			
			// secret shared between the client and server, user-scoped to be safe
			secret : secret,
			
			// the path to the API endpoint
			path : req.url,
			
			// the params to generate a signature for
			params : req.body,
			
			// params that you don't want to use as part of the signature, e.g. the client signature to verify, cache-busting timestamps, etc.
			ignored : ['sig','_']	
		});
		
		if ( serverSignature != clientSignature ) ... report the problem

###Manual Example:

		var serverSignature = request('signatory').signature({
			
			// secret shared between the client and server, user-scoped to be safe
			secret : secret,
			
			// the path to the API endpoint
			path : req.url,
			
			// the params to generate a signature for
			params : req.body,
			
			// params that you don't want to use as part of the signature, e.g. the client signature to verify, cache-busting timestamps, etc.
			ignored : ['sig','_']	
		});
		
		if ( serverSignature != clientSignature ) ... report the problem
				
