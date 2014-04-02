## node-signatory

[![Build Status](https://secure.travis-ci.org/riskpenguin/node-signatory.png)](http://travis-ci.org/riskpenguin/node-signatory)

Node implementation of the API request signing algorithm used at Guevara

###Example:

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
				

