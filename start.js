/**
 * Created by J1aDong on 2017/6/30.
 */
require("babel-core/register")(
    {
        presets: ['stage-3','es2015']
    }
);

require("babel-polyfill");

require("./app.js");