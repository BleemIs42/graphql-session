"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_client_1 = require("apollo-client");
var apollo_link_rest_1 = require("apollo-link-rest");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var graphql_tag_1 = require("graphql-tag");
var node_fetch_1 = require("node-fetch");
global.Headers = global.Headers || require('fetch-headers');
global.Headers.prototype.forEach = Array.prototype.forEach;
var restLink = new apollo_link_rest_1.RestLink({
    customFetch: node_fetch_1.default,
    uri: 'https://swapi.co/api/',
    headers: {
        'Content-Type': 'application/json'
    },
});
var client = new apollo_client_1.default({
    link: restLink,
    cache: new apollo_cache_inmemory_1.InMemoryCache(),
});
var query = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query luke {\n    person @rest(type: \"Person\", path: \"people/1\") {\n      name\n      height\n      mass,\n      hair_color\n    }\n  }\n"], ["\n  query luke {\n    person @rest(type: \"Person\", path: \"people/1\") {\n      name\n      height\n      mass,\n      hair_color\n    }\n  }\n"])));
client.query({ query: query }).then(function (response) {
    console.log(response.data);
});
var templateObject_1;
