function createSO(request, response){
	var myRecord = new $R({
		nlobjRecordType:"salesorder",
    nlobjFieldIds:{
      trandate: '1/11/2019',
      entity: 12541
		},
		nlobjSublistIds:{
			item:[{
				itemid : 6945,
				quantity: 10,
        rate: 1000
			}]
		}
	});

	var recordId = myRecord.save();
	nlapiLogExecution('DEBUG','New Record saved', recordId);
}
