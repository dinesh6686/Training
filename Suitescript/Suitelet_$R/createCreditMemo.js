function createCreditMemo(request,response){
  var recNew = new $R({
    nlobjRecordType:'creditmemo',
    nlobjTransformType:'returnauthorization',
    nlobjTransformId:39586,
    nlobjFiledIds:{
    entity:12541,
    location:6
  },
   nlobjSublistIds:{
		item:{
          lines:[{'item':6945,'quantity':5,'amount':1000}]
    }
   }
  })
  var id = recNew.save()
  response.write('Credit Memo Generated')
  nlapiLogExecution('DEBUG','Credit Memo Generated', id);
}
