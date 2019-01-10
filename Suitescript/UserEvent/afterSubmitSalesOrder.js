function afterSubmitSalesOrder(type){
  var id = nlapiGetRecordId();
  var obj = nlapiLoadRecord('salesorder',id);
  var sdate = new Array();
  sdate[0]=obj.getLineItemValue('item','item_display',1);
  sdate[1]= obj.getFieldValue('trandate');
  sdate[2]=obj.getLineItemValue('item','amount',1);
  sdate[3]= obj.getLineItemValue('item','quantity',1);
  var message = sdate[0]+" "+sdate[1]+" " +sdate[2]+" " +sdate[3]
  //var file = nlapiPrintRecord('TRANSACTION', id, 'PDF', sdate);
  nlapiSendEmail('12279', 'dinesh.venkat@celigo.com', 'Incoming Transaction', message, null, null, null, null);
}
 /*nlapiLogExecution('DEBUG','Customer ID:'+ obj.getFieldValue('entity'));
  nlapiLogExecution('DEBUG','Date', obj.getFieldValue('trandate'));
  nlapiLogExecution('DEBUG','Line Item', obj.getLineItemValue('item','item_display',1));
  nlapiLogExecution('DEBUG','salesorder id', id)*/
