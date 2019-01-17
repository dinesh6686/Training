function createCustomerAndSO(request, response){
  var myCust  = new $R({
    nlobjRecordType: "customer",
    nlobjFieldIds: {
      isperson: "true",
      firstname: "Random",
      lastname: "Guy",
      entitystatus: 13,
      subsidiary: 3
    }
  });
  var recordId = myCust.save();
	nlapiLogExecution('DEBUG','New Customer saved', recordId);
}
