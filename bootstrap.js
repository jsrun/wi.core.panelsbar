/**
 *  __          __  _    _____ _____  ______    _____ _     _      _                
 *  \ \        / / | |  |_   _|  __ \|  ____|  / ____(_)   | |    | |               
 *   \ \  /\  / /__| |__  | | | |  | | |__    | (___  _  __| | ___| |__   __ _ _ __ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|    \___ \| |/ _` |/ _ \ '_ \ / _` | '__|
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ ____) | | (_| |  __/ |_) | (_| | |   
 *      \/  \/ \___|_.__/_____|_____/|______(_)_____/|_|\__,_|\___|_.__/ \__,_|_|   
 *                                                                                                                                                     
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

let _ = require("lodash");
    
_.mixin({
    'sortKeysBy': function (obj, comparator) {
        var keys = _.sortBy(_.keys(obj), function (key) {
            return comparator ? comparator(obj[key], key) : key;
        });
                
        var newobj = {};
        
        for(var key in keys)
            newobj[keys[key]] = obj[keys[key]];
        
        return newobj;
    }
});

module.exports = {    
    /**
     * List of navbar itens
     * @type object
     */
    itens: {},
        
    /**
     * Function to add item menu
     * 
     * @params object item
     * @return this
     */ 
    addItem: function(namespace, item, index){
        item.namespace = namespace;
        item.index = index;
        
        if(index)
            namespace = index + "_" + namespace;
        
        if(typeof item == "object" && typeof namespace == "string")
            this.itens[namespace] = item;
        else
            throw new "The default value for panels item is 'object' and namespace is 'string'.";
    },
    
    /**
     * Function to generate template
     * 
     * @param object _this
     * @return string
     */
    getTemplate: function(sidebar, i18n, template){   
        sidebar.itens = _.sortKeysBy(sidebar.itens, (value, key) => { return value.index; });//Order by index
        return new template(__dirname + "/template.ejs").seti18n(i18n).render({itens: sidebar.itens});
    }
};