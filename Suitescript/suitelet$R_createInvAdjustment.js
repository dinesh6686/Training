function createInventoryAdjustment(request, response){
	var myRecord = new $R({
		nlobjRecordType: "inventoryadjustment",
		nlobjFieldIds: {
			subsidiary : 3,
			account: 186,
		},
		nlobjSublistIds:{
			inventory:[{
				item: 6945,
				itemdisplay: 'myid1234',
				location: 6,
				adjustqtyby: 10,
			}]
		}
	});

	var recordId = myRecord.save();
	nlapiLogExecution('DEBUG','New Record saved'  recordId);
}
