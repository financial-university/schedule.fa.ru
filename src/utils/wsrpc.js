import WSRPC from "@wsrpc/client";

// На будущее, не импортирован

(async function(global) {
    global.wsrpc = new WSRPC('wss://demo.wsrpc.info/ws/', 5000);
    global.wsrpc.connect();

    global.wsrpc.addEventListener("onconnect", function() {
        console.log("Соединение нестабильно");
        if (global.loading) {
            global.loading.close();
            global.loading = undefined;
        }
    });

    global.wsrpc.addEventListener("onerror", function() {
        console.error("Соединение потеряно");
        global.loading = global.app.$loading({
            lock: true,
            text: "Соединение потеряно",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
    });

})(window);

