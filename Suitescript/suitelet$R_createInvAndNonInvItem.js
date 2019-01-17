function createInvItem(request,response){
  var newInvItem = new $R({
    nlobjRecordType: "inventoryitem",
    nlobjFieldIds:{
      itemid : "myid123",
      subsidiary : 3
    }
  });
  var newNonInvItem = new $R({
    nlobjRecordType: "noninventoryitem",
  
    nlobjFieldIds:{
      itemid : "myid456",
      subsidiary : 3
    }
  });
  var invRecordId = newInvItem.save();
  nlapiLogExecution('DEBUG','New Record saved' + invRecordId);
  var nonInvRecordId = newNonInvItem.save();
  nlapiLogExecution('DEBUG','New Record saved' + nonInvRecordId);
}
