
var newItem = nlapiCreateRecord('inventoryitem');
newItem.setFieldValue('itemid', 'newItem_12343245');//create a new item everytime
newItem.setFieldValue('department', 3);
newItem.setFieldValue('costestimate', '512.00');
var Itemid = nlapiSubmitRecord(newItem, true);
inventoryadjustment(Itemid);
createCustomer(Itemid);
response.write('Item created!!, Inv adjusted, Cust created, SO and itemfulfillment done!!'+Itemid) ;


function inventoryadjustment(id){
var obj = nlapiCreateRecord('inventoryadjustment');

obj.setFieldValue('subsidiary',3);
obj.setFieldValue('account', 186);

obj.selectNewLineItem('inventory');
obj.setCurrentLineItemValue('inventory', 'item', id);
obj.setCurrentLineItemValue('inventory', 'location', 6);
obj.setCurrentLineItemValue('inventory', 'adjustqtyby', 10);
obj.commitLineItem('inventory');

var id = nlapiSubmitRecord(obj);
nlapiLogExecution('DEBUG',' AdjObj:'+id);
}

function createCustomer(Itemid){
var newCust = nlapiCreateRecord('customer');
newCust.setFieldValue('subsidiary',3);
newCust.setFieldValue('companyname','ABCDEFG');//create a new companyname everytime
var custId = nlapiSubmitRecord(newCust);
salesorder(Itemid,custId);
}

function salesorder(Itemid, custId){
  var so = nlapiCreateRecord('salesorder');
  so.setFieldValue('entity',custId);
  so.setLineItemValue('item','item', 1, Itemid);
  so.setLineItemValue('item','amount', 1, 250);
   so.setLineItemValue('item','quantity', 1, 10);
  so.setLineItemValue('item', 'location',1, 6);
  var soId = nlapiSubmitRecord(so);
  itemFulfillment(soId);
}

function itemFulfillment(salesOrderId){
  	var fulfillRecord = nlapiTransformRecord('salesorder', salesOrderId, 'itemfulfillment',{'shipgroup':5});
  	nlapiSubmitRecord( fulfillRecord );

}
