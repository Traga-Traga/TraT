document.title = "SK Agar.io;
 
   window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.agar.simpleCellDraw = true;
    //CSS Override, removing this will make the extension unuseable.
    $("h2").replaceWith('<h2><b>Sixer Knight Console</b></h2>'); //TITLE <----
    $(".agario-panel").css({'background-color': 'Black'}); //MAIN PANEL COLOR <--
    $(".agario-panel").css({'color': 'white'});
    $("#user-id-tag, #version-tag").css({'color': '#222'});
    $("#user-id-tag, #version-tag").css({'height': '0px'});
    $("#user-id-tag, #version-tag").css({'width': '0px'});
    $(".text-muted").css({'color': '#222'});
    $(".text-muted").css({'height': '0px'});
    $(".text-muted").css({'width': '0px'});
    $(".form-control").css({'background-color': '#333'});
    $(".form-control").css({'color': 'white'});
    //zoom
    window.agar.minScale = -30;
 
 
    //draws grid, true = yes, and false = no    
 
 
    window.agar.drawGrid = false;
    //sets dark theme to true on extension load
    setDarkTheme(false;
    //sets show mass to true on extension load
    setShowMass(true);
 
    window.agar.hooks.drawCellMass = function(cell, old_draw) {
        if(cell.size > 20) return cell;  
    };
    window.agar.hooks.cellColor = function(cell, old_color) {
        if(cell.size < 20) return "#FF0000"; //PELLET COLOR <-----
                if (cell.isVirus) {
            return "rgba(0, 23, 255,0.15)"; }
                             return false;
 
    };
 
    //You can just delete the return 50 if you dont like the size
    window.agar.hooks.cellMassTextScale = function(cell, old_scale) {
        return 50; //number here  
    };
 
    //Boat Is a Fudging hoe xD
    setTimeout(function() {
        var f = -7071;
        var g = -7071;
        var h = 7071;
        var j = 7071;
        var k = {
            minx: 0,
            miny: 0,
            maxx: 0,
            maxy: 0
        };
 
        function isMe(a) {
            for (var i = 0; i < window.agar.myCells.length; i++) {
                if (window.agar.myCells[i] == a.id) {
                    return true;
                }
            }
            return false;
        }
 
        function getCell() {
            var a = [];
            for (var b in window.agar.allCells) {
                var c = window.agar.allCells[b];
                if (isMe(c)) {
                    a.push(c);
                }
            }
            return a[0];
        }
        var r = 0;
 
        function toggleMovement() {
            m = !m;
            switch (m) {
                case true:
                    p.onmousemove = o[0];
                    o[0] = null;
                    p.onmousedown = o[1];
                    o[1] = null;
                    break;
                case false:
                    p.onmousemove({
                        clientX: innerWidth / 2,
                        clientY: innerHeight / 2
                    });
                    o[0] = p.onmousemove;
                    p.onmousemove = null;
                    o[1] = p.onmousedown;
                    p.onmousedown = null;
                    break;
            }
        }
        interval_id = setInterval(function() {
            emitPosition();
        }, 1);
        interval_id2 = setInterval(function() {
            transmit_game_server_if_changed();
        }, 1);
        document.addEventListener('keydown', function(e) {
            var a = e.keyCode || e.which;
            switch (a) {
                case 68:
                    toggleMovement();
                    break;
            }
        });
 
        function transmit_game_server_if_changed() {
            if (last_transmited_game_server != window.agar.ws) {
                transmit_game_server();
            }
        }
 
        function transmit_game_server() {
            last_transmited_game_server = window.agar.ws;
            l.emit("cmd", {
                "name": "connect_server",
                "ip": last_transmited_game_server
            });
        }
        var s = 0;
        var t = 0;
        $("body").mousemove(function(a) {
            s = a.clientX;
            t = a.clientY;
        });
        window.agar.minScale = -30;
    }, 200);
};
