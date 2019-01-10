function pageInit(type){
  alert ('myPageInit' );
  alert ('type=' + type);
}
function fieldChanged(type,name,linenum) {
 alert ('myFieldChanged' );
 alert ('type=' + type);
 alert ('name=' + name );
 alert ('linenum=' + linenum);
}
function recalc(type) {
 alert ('myRecalc' );
 alert ('type=' + type);
}
function pageLoad(type) {
  alert ('myPageLoad' );
 alert ('type=' + type);
}
function beforeSave() {
  alert ('myBeforeSave' );
 return true;
}
function saveRecord()
{
 alert ('mySaveRecord' );
 return true;
}
