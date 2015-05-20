// Dependencies
var YAML= require('yamljs');
var JSON5= require('json5');

// Public
var OP= {
  parse: function(type,data){
    switch(type){
      case 'yaml':
        return YAML.parse(data);
      case 'json':
        return JSON.parse(data);
      case 'json5':
        return JSON5.parse(data);
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
    }

    throw new TypeError(type+" is Invalid type");
  },
};

module.exports= OP;