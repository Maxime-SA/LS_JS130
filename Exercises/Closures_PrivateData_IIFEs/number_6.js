/* eslint-disable max-len */

let ItemCreator = (function() {

  function validateItem(name) {
    return name.replace(/\s/g,'').length >= 5;
  }

  function validateCategory(name) {
    return name.split(' ').length === 1 && name.replace(/\s/g,'').length >= 5;
  }

  function validateQuantity(quantity) {
    return quantity !== undefined;
  }

  function generateSkuCode(itemName, category) {
    return itemName.replace(/\s/g, '').slice(0,3).toUpperCase() + category.replace(/\s/g, '').slice(0,2).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (validateItem(itemName) && validateCategory(category) && validateQuantity(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (newItem.notValid) return false;
    this.items.push(newItem);
  },

  update(skuCode, newValues) {
    Object.assign(this.getItem(skuCode), newValues);
  },

  delete(skucode) {
    this.items = this.getItemList().filter(item => item.skuCode !== skucode);
  },

  inStock() {
    return this.getItemList().filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.getItemList().filter(item => item.category === category);
  },

  getItem(skuCode) {
    for (let index = 0; index < this.getItemListSize(); index++) {
      let item = this.getItemList()[index];
      if (item.skuCode === skuCode) return item;
    }
  },

  getItemList() {
    return this.items;
  },

  getItemListSize() {
    return this.getItemList().length;
  },

};

let ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock: function() {
    console.log(this.items.inStock().map(function(item) {
      return item.itemName;
    }).join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10