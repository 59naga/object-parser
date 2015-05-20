// Dependencies
var OBJ= require('../lib');

var fs= require('fs');

// Environment
var fixture= {
  obj: require('./fixture'),
  yml: fs.readFileSync(__dirname+'/fixture.yml','utf8'),
  json: fs.readFileSync(__dirname+'/fixture.json','utf8'),
  json5: fs.readFileSync(__dirname+'/fixture.json5','utf8'),
};

// Specs
describe('API',function(){
  it('parse',function(){
    var yaml= OBJ.parse('yaml',fixture.yml);
    var json= OBJ.parse('json',fixture.json);
    var json5= OBJ.parse('json5',fixture.json5);

    expect(fixture.obj).toEqual(yaml);
    expect(fixture.obj).toEqual(json);
    expect(fixture.obj).toEqual(json5);
  });
  it('stringify',function(){
    var yaml= OBJ.stringify('yaml',fixture.obj,null,2);
    var json= OBJ.stringify('json',fixture.obj,null,2);
    var json5= OBJ.stringify('json5',fixture.obj,null,2);

    expect(fixture.yml).toBe(yaml);
    expect(fixture.json).toBe(json);
    expect(fixture.json5).toBe(json5);
  });
});