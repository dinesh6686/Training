function custFieldfill(type, name){
  //applies to Customer
  if(name === 'phone'){
      if(nlapiGetFieldValue(name)!==null){
        nlapiSetFieldValue('companyname','ABCD',true)
        nlapiSetFieldValue('subsidiary','Honeycomb Holdings Inc.',true)
        nlapiSetFieldValue('fax','123-456-7890',true)
        nlapiSetFieldValue('email','dinesh.venkat@celigo.com',true)
        nlapiSetFieldValue('comments','remarks regarding the customer',true)
        //alert('Success')
      }
  }
}
