function myBeforeLoadUE(type){
 if (type == 'create') nlapiLogExecution('DEBUG', 'type argument', 'type is create');
 if (type == 'view')   nlapiLogExecution('DEBUG', 'type argument', 'type is view');
 if (type == 'edit')   nlapiLogExecution('DEBUG', 'type argument', 'type is edit');
}
function myBeforeSubmitUE(type){
 if (type == 'create') nlapiLogExecution('DEBUG', 'type argument', 'type is create');
 if (type == 'delete') nlapiLogExecution('DEBUG', 'type argument', 'type is delete');
 if (type == 'edit')   nlapiLogExecution('DEBUG', 'type argument', 'type is edit');
 if (type == 'cancel') nlapiLogExecution('DEBUG', 'type argument', 'type is cancel');
}
function myAfterSubmitUE(type){
if (type == 'create') nlapiLogExecution('DEBUG', 'type argument', 'type is create');
if (type == 'delete') nlapiLogExecution('DEBUG', 'type argument', 'type is delete');
if (type == 'edit')   nlapiLogExecution('DEBUG', 'type argument', 'type is edit');
if (type == 'approve')nlapiLogExecution('DEBUG', 'type argument', 'type is approve');
}
