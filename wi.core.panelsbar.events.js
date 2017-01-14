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
                $(".wi-tabs").animate({marginLeft: (parseInt($($(_this).attr("rel")).css("width")) + 36)+"px"}, 100);
            
            $($(_this).attr("rel")).addClass("wi-panelsbar-left-panel-active").css("display", "block").animateCss("slideInLeft", function(){
                $($(_this).attr("rel")).removeClass("slideInLeft");
                $(".wi-panelsbar-left-item-active").removeClass("wi-panelsbar-left-item-active");
                $(_this).addClass("wi-panelsbar-left-item-active");
                webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
            });
        }
        else{
            if($(".wi-panelsbar-left-item-active").length == 1)
                $(".wi-tabs").animate({marginLeft: "35px"}, 100);
            
            $($(_this).attr("rel")).removeClass("wi-panelsbar-left-panel-active").animateCss("slideOutLeft", function(){
                $($(_this).attr("rel")).css("display", "none");
                $(_this).removeClass("wi-panelsbar-left-item-active");
                
                webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
                
                if($(".wi-panelsbar-left-panel-active").length > 0)
                    $($(".wi-panelsbar-left-panel-active").first().attr("rel")).addClass("wi-panelsbar-left-item-active");
            });
        }
    });
    
    $(".wi-panelsbar-left-panel").resizable({
        alsoResize: ".wi-panelsbar-left-panel",
        handles: "e",
        minWidth: 200,
        maxWidth: 1000,
        resize: function(event, ui){
            $(".wi-tabs").css({marginLeft: (ui.size.width+36)+"px"});            
            webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
        }
    });
    
    $(".wi-panelsbar-left-panel").first().addClass("wi-panelsbar-left-panel-active").css("display", "block");
    $(".wi-panelsbar-left-item").first().addClass("wi-panelsbar-left-item-active");
    $(".wi-tabs").animate({marginLeft: "335px"}, 100);
})();