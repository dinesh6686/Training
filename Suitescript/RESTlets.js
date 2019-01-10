function getRecords(){
  var mail = 'vegeta@saiyans.com';
  var filters = new Array();
  filters[0] = new nlobjSearchFilter('custbody14',null,'is',mail);
  var col = new Array();
  col[0]= new nlobjSearchColumn('tranid')
  col[1]= new nlobjSearchColumn('amount')
  col[2]= new nlobjSearchColumn('custbody14')
  col[3]= new nlobjSearchColumn('entity')
  var searchResults = new nlapiSearchRecord('salesorder',null,filters,col);
  return searchResults;

}
