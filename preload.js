const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  appName: "Dev Browser"
});

