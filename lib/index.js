// Dependencies
var YAML= require('yamljs');
var JSON5= require('json5');
var JSONML= require('json_ml/lib/index.js');

// Public
var OP= {
  parse: function(type,data,extra){
    switch(type){
      case 'yaml':
        return YAML.parse(data,extra);
      case 'json':
        return JSON.parse(data,extra);
      case 'json5':
        return JSON5.parse(data,extra);
      case 'jsonml':
        return JSONML.parse(data,extra);
    }

    throw new TypeError(type+" is Invalid type");
  },
  stringify: function(type,object,replacer,indent){
    switch(type){
      case 'yaml':
        return YAML.stringify(object,replacer,indent);
      case 'json':
        return JSON.stringify(object,replacer,indent);
      case 'json5':
        return JSON5.stringify(object,replacer,indent);
      case 'jsonml':
        return JSONML.stringify(object,replacer,indent);
    }

    throw new TypeError(type+" is Invalid type");
  },
};

module.exports= OP;