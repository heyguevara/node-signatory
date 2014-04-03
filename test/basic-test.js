
var signatory = require('../index'),
	assert = require('assert');

describe('signatory', function(){
	
	it("should generate the correct signature from some basic parameters", function( done ){
		var signature = signatory.signature({
			secret:"my secret",
			path:"/my/path",
			params: { id:7, _redHerring:"something", _:"1234567890", foo:"bar" },
			ignored : [ "_", "foo" ]
		});
		assert.strictEqual( signature, "2ea33741024a409849859ae16436d944c11e1c89" );
		done();
	});
	
})