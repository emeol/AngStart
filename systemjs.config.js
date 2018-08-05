//module loader configuration
//module loader resolves dependencies
//module setting in tsconfig must match 
//the module loader you're using 'systemjs' matches 'commonjs'

(function (global) {
    
    var paths={
        "rxjs/*":"node_modules/rxjs/bundles/Rx.min.js",
        "@angular/*":"node_modules/@angular/*"
    }

    var packages = {"app":{}};

    var angularModules = ["common","compiler","core","platform-browser",
        "platform-browser-dynamic"];
    
    angularModules.forEach(function (pkg) {
        packages["@angular/" + pkg] = {
            main:"/bundles/" + pkg + ".umd.min.js"
        };
    });

    System.config({paths:paths, packages:packages});

})(this);