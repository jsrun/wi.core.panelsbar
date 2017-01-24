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

(function(){
    $(".wi-tabs").css("margin-left", "33px");
    $(".wi-tabs").css("margin-right", "38px");
    
    $(".wi-sidebar-left-item").click(function(){
        var _this = this;
        
        if($($(_this).attr("rel")).css("display") === "none"){
            if($(".wi-sidebar-left-item-active").length <= 0)
                $(".wi-tabs").animate({marginLeft: (parseInt($($(_this).attr("rel")).css("width")) + 35)+"px"}, 100);
            
            $($(_this).attr("rel")).addClass("wi-sidebar-left-panel-active").css("display", "block").animateCss("slideInLeft", function(){
                $($(_this).attr("rel")).removeClass("slideInLeft");
                $(".wi-sidebar-left-item-active").removeClass("wi-sidebar-left-item-active");
                $(_this).addClass("wi-sidebar-left-item-active");
                webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
            });
        }
        else{
            if($(".wi-sidebar-left-item-active").length == 1)
                $(".wi-tabs").animate({marginLeft: "33px"}, 100);
            
            $($(_this).attr("rel")).removeClass("wi-sidebar-left-panel-active").animateCss("slideOutLeft", function(){
                $($(_this).attr("rel")).css("display", "none");
                $(_this).removeClass("wi-sidebar-left-item-active");
                
                webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
                
                if($(".wi-sidebar-left-panel-active").length > 0)
                    $($(".wi-sidebar-left-panel-active").first().attr("rel")).addClass("wi-sidebar-left-item-active");
            });
        }
    });
    
    $(".wi-sidebar-left-panel").resizable({
        alsoResize: ".wi-sidebar-left-panel",
        handles: "e",
        minWidth: 200,
        maxWidth: 1000,
        resize: function(event, ui){
            $(".wi-tabs").css({marginLeft: (ui.size.width+33)+"px"});            
            webide.tabs.layout.updateSize($(".wi-tabs-contents").width, $(".wi-tabs-contents").height);
        }
    });
    
    $(".wi-sidebar-left-panel").first().addClass("wi-sidebar-left-panel-active").css("display", "block");
    $(".wi-sidebar-left-item").first().addClass("wi-sidebar-left-item-active");
    $(".wi-tabs").animate({marginLeft: "335px"}, 100);
})();