function beforeLoadSalesOrder( type,form ){
  form.addButton('custpage_custombutton', 'Fill Contact'," nlapiSetFieldValue('custbody15',nlapiGetFieldText('entity'))");
}
