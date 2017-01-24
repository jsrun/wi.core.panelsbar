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

let SystemException = require("../wi.core.exception.js"),
    TemplateEngine = require("../wi.core.template.js");

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
    addItem: function(namespace, item){
        if(typeof item == "object" && typeof namespace == "string")
            this.itens[namespace] = item;
        else
            throw new SystemException("The default value for panels item is 'object' and namespace is 'string'.");
    },
    
    /**
     * Function to generate template
     * 
     * @param object _this
     * @return string
     */
    getTemplate: function(_this){
        return TemplateEngine(__dirname + "/template.ejs").seti18n(_this.i18n).render({itens: this.itens});
    }
};