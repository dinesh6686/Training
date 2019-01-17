function billSalesOrder(request,response){
  var billOrder = new $R({
    nlobjRecordType:'invoice',
    nlobjTransformType:'salesorder',
    nlobjTransformId:39264,
    nlobjFieldIds:{
      entity:12541,
      location:6
    },
      nlobjSublistIds:{
      item:{
             lines:[{'item':6945,'quantity':5,'location':6,'amount':1000}]
      }
     }
  });
  var recordId = billOrder.save();
  response.write('Your Bill Order Is Invoiced');
  nlapiLogExecution('DEBUG','New Record saved', recordId);
}
