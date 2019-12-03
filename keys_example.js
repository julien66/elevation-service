// This file should be renamed as keys.js
// It is aimed to store an array of hashed keys to be compared against the hashed api key
// received from the user request.
// A custom message can be returned in case of 'Missing' or 'Invalid' api key.
module.exports = {
	get : function() {
		return ['first-hashed-key-goes-here', 'second-hashed-key-goes-here'];
	},
	message : function(wrong) {
  		return wrong + ' API key. Custom message... Wrong is either invalid or missing';
	},
}
