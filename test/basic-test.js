
var signatory = require('../index'),
	assert = require('assert');

describe('signatory', function(){
	
	it("should generate the correct signature from some basic parameters", function( done ){
		var signature = signatory.signature({
			secret:"my secret",
			path:"/my/path",
			params: { id:7, _redHerring:"something", _:"" }
		});
		assert.strictEqual( signature, "471a05a313814f9a869066ffc4659d823e8eda51" );
		done();
	});
	
})