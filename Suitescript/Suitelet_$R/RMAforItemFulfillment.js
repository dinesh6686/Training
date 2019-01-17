function returnAuth(request,response){
  var RMARecord = new $R({
    nlobjRecordType:'returnauthorization',
    nlobjTransformType:'salesorder',
    nlobjTransformId:39264,
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
  response.write('RMA for IF Confirmed')
  nlapiLogExecution('DEBUG','RMA for IF confirmed', id);
}
