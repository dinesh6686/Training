function beforeLoadSalesOrder( type,form ){
  var btn = nlapiSetFieldValue('custbody15',nlapiGetFieldText('entity'));
  form.addButton('custpage_custombutton', 'Fill Contact', btn);
}
