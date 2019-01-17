function returnAuth(request,response){
  var RMARecord = new $R({
    nlobjRecordType:'returnauthorization',
    nlobjTransformType:'invoice',
    nlobjTransformId:39583,
    nlobjFieldId:{
      entity:12541
    },
    nlobjSublistIds:{
      item:{
        lines:[{'item':6945,'quantity':5,'amount':10000}]
      }
    }
  })
  var id  = RMARecord.save()
  response.write('RMA Confirmed')
  nlapiLogExecution('DEBUG','RMA confirmed', id);
}
