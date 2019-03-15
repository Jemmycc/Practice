const db = require('../models');

module.exports = {
	campaignSearch: function (req, res) {
		db.Data
			.find({})
			.then((response) => {
				// const truncatedResponse = [ ...new Set(response.map((campaignDonor) => campaignDonor.race)) ]
				// 	.filter((item) => item !== 'NULL')
				// 	.sort((a, b) => (a < b ? -1 : 0));
				// res.json({ response: truncatedResponse });
				//res.json({response})
				result[0] = [...new Set(response.map(campaignDonor => campaignDonor.campaignName))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
				result[1] = [...new Set(response.map(campaignDonor => campaignDonor.date))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
				res.json({ response: result });
			})
			.catch((err) => {
				console.log(err);
			});
	},




	campaignSearchResults: function (req, res) {
		db.Data
			.find({})
			.then((response) => {
				// console.log(response)
				res.json({ response })
				// const truncatedResponse = [ ...new Set(response.map((campaignDonor) => campaignDonor)) ]
				// 	.filter((item) => item !== 'NULL')
				// 	.sort((a, b) => (a < b ? -1 : 0));
				// res.json({ response: truncatedResponse });
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
