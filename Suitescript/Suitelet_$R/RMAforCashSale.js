function returnAuth(request,response){
  var RMARecord = new $R({
    nlobjRecordType:'returnauthorization',
    nlobjTransformType:'cashsale',
    nlobjTransformId:38888,
    nlobjFieldId:{
      entity:12405
    },
    nlobjSublistIds:{
      item:{
        lines:[{'item':6888,'quantity':1,'amount':10000}]
      }
    }
  })
  var id  = RMARecord.save()
  response.write('RMA Confirmed')
  nlapiLogExecution('DEBUG','RMA confirmed', id);
}
