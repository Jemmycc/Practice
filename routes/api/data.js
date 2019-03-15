const router = require('express').Router();
const donorsController = require('../../controllers/donorsController');
const db = require("../../models");

// router
// .route('/')
//console.log('this route');
// .get(donorsController.campaignSearch);

// router.route('/donors').get(donorsController.campaignSearchResults);

// router.get('/donors', function(req, res){
//         // console.log('this route');
//         // db.Data.find({}).then(response => {
//         //         const truncatedResponse = [...new Set(response.map(campaignDonor=>campaignDonor))].filter(item=>item !== 'NULL').sort((a,b)=> a < b ? -1 : 0);
//         //         res.json({response: truncatedResponse});
//         // }).catch(err=> {
//         //         console.log(err);
//         // })
// });
//         // .post(donorsController.create);

router.get('/', function (req, res) {
	console.log('this route');
	let result = {}
	db.Data.find({}).then(response => {
		result[0] = [...new Set(response.map(campaignDonor => campaignDonor.campaignName))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		result[1] = [...new Set(response.map(campaignDonor => campaignDonor.date))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		result[2] = [...new Set(response.map(campaignDonor => campaignDonor.race))].filter(item => item !== 'NULL' && item !== 'null').sort((a, b) => a < b ? -1 : 1);
		result[3] = [...new Set(response.map(campaignDonor => campaignDonor.amount))].filter(item => item !== 'NULL').sort((a, b) => a < b ? -1 : 1);
		res.json({ response: result });
	}).catch(err => {
		console.log(err);
	})
});
// .post(donorsController.create);

module.exports = router;
