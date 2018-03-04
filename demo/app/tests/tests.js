var PluginExperiment = require("nativescript-plugin-experiment").PluginExperiment;
var pluginExperiment = new PluginExperiment();

describe("greet function", function() {
    it("exists", function() {
        expect(pluginExperiment.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(pluginExperiment.greet()).toEqual("Hello, NS");
    });
});