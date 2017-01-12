/**
 *  __          __  _    _____ _____  ______ 
 *  \ \        / / | |  |_   _|  __ \|  ____|
 *   \ \  /\  / /__| |__  | | | |  | | |__   
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|  
 *     \  /\  /  __/ |_) || |_| |__| | |____ 
 *      \/  \/ \___|_.__/_____|_____/|______|
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

(function(){
    $(".wi-tabs").css("margin-left", "35px");
    
    $(".wi-panelsbar-left-item").click(function(){
        var _this = this;
        
        if($($(_this).attr("rel")).css("display") === "none"){
            if($(".wi-panelsbar-left-item-active").length <= 0)
                $(".wi-tabs").animate({marginLeft: "335px"}, 100);
            
            $($(_this).attr("rel")).addClass("wi-panelsbar-left-panel-active").css("display", "block").animateCss("slideInLeft", function(){
                $($(_this).attr("rel")).removeClass("slideInLeft");
                $(".wi-panelsbar-left-item-active").removeClass("wi-panelsbar-left-item-active");
                $(_this).addClass("wi-panelsbar-left-item-active");
            });
        }
        else{
            if($(".wi-panelsbar-left-item-active").length == 1)
                $(".wi-tabs").animate({marginLeft: "35px"}, 100);
            
            $($(_this).attr("rel")).removeClass("wi-panelsbar-left-panel-active").animateCss("slideOutLeft", function(){
                $($(_this).attr("rel")).css("display", "none");
                $(_this).removeClass("wi-panelsbar-left-item-active");
                
                if($(".wi-panelsbar-left-panel-active").length > 0)
                    $($(".wi-panelsbar-left-panel-active").first().attr("rel")).addClass("wi-panelsbar-left-item-active");
            });
        }
    });
})();