"use strict";
var datasource_model_1 = require("./datasource.model");
var Model = (function () {
    /**
     *Nothing to see here
     */
    function Model() {
        var _this = this;
        this.locator = function (p, id) { return p.id == id; };
        this.dataSource = new datasource_model_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getData()
            .forEach(function (p) { return _this.products.push(p); });
    }
    Model.prototype.getProducts = function () {
        return this.products;
    };
    Model.prototype.getProduct = function (id) {
        var _this = this;
        return this.products
            .find(function (p) { return _this.locator(p, id); });
    };
    Model.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products
                .findIndex(function (p) { return _this.locator(p, product.id); });
            this.products.splice(index, 1, product); //replace that index
        }
    };
    Model.prototype.deleteProduct = function (id) {
        var _this = this;
        var index = this.products
            .findIndex(function (p) { return _this.locator(p.id, id); });
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    Model.prototype.generateId = function () {
        var candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    };
    return Model;
}());
exports.Model = Model;
