function beforeSubmitSalesOrder(type){

  var company=nlapiGetFieldValue('companyname');
  var email=nlapiGetFieldValue('email');
  var phone=nlapiGetFieldValue('phone');
  var newrec = nlapiCreateRecord('customrecord1199');
  newrec.setFieldValue('name',company);
  newrec.setFieldValue('custrecord9885653',email);
  newrec.setFieldValue('custrecord9885654',phone);
  var newId = nlapiSubmitRecord(newrec);

  nlapiLogExecution('DEBUG','<Before Submit Script> type:'+type+', RecordType: '+newType+', Id:'+newId);
  nlapiLogExecution('DEBUG','id'+newId);
}
