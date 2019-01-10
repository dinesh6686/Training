function customForm(request, response)
{
  var id=12518;
  var record = nlapiLoadRecord('customer',id);
  var phNumber = record.getFieldValue('phone');
  record.setFieldValue('fax', phNumber);
  nlapiSubmitRecord(record);
  response.write(phNumber);
  nlapiLogExecution('DEBUG', 'fax',phNumber);
}
