function beforeSubmitSalesOrder(type){

     var newId = nlapiGetRecordId();
     var newType = nlapiGetRecordType();
     nlapiLogExecution('DEBUG','<Before Submit Script> type:'+type+', RecordType: '+newType+', Id:'+newId);

}
