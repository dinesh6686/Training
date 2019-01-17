function createIF2(request,response){
	var myRecord = new $R({
		nlobjRecordType: 'itemfulfillment',
		nlobjTransformType:'salesorder',
		nlobjTransformId:39264,
    nlobjFieldIds:{
    shipstatus:'shipped'
  	},
		nlobjSublistIds:{
			item:{
						 lines:[{'item':6945,'quantity':5,'location':6}]
			}
		 }
	});
  //$$.logExecution('DEBUG','New Record saved', JSON.stringify(myRecord));
	var recordId = myRecord.save();
  response.write('done');
	nlapiLogExecution('DEBUG','New Record saved', recordId);
}
