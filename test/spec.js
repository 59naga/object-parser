// Dependencies
var OP= require('../lib');

var fs= require('fs');

// Environment
var fixture= {
  obj: require('./fixture'),
  yml: fs.readFileSync(__dirname+'/fixture.yml','utf8'),
  json: fs.readFileSync(__dirname+'/fixture.json','utf8'),
  json5: fs.readFileSync(__dirname+'/fixture.json5','utf8'),
  html: fs.readFileSync(__dirname+'/fixture.html','utf8'),
};

// Specs
describe('API',function(){
  it('parse',function(){
    var yaml= OP.parse('yaml',fixture.yml);
    var json= OP.parse('json',fixture.json);
    var json5= OP.parse('json5',fixture.json5);
    var html= OP.parse('jsonml',fixture.html);

    expect(fixture.obj).toEqual(yaml);
    expect(fixture.obj).toEqual(json);
    expect(fixture.obj).toEqual(json5);
    expect(fixture.obj).toEqual(html);
  });
  it('stringify',function(){
    var yaml= OP.stringify('yaml',fixture.obj,null,2);
    var json= OP.stringify('json',fixture.obj,null,2);
    var json5= OP.stringify('json5',fixture.obj,null,2);
    var html= OP.stringify('jsonml',fixture.obj,null,2);

    expect(fixture.yml).toBe(yaml);
    expect(fixture.json).toBe(json);
    expect(fixture.json5).toBe(json5);
    expect(fixture.html).toBe(html);
  });
});