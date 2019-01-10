function pageInit(type){
if(type == 'create'){
var context = nlapiGetContext();
var userName = context.getName()
alert("hello "+ userName)
}
}
