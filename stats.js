const os 	= require('os-utils')

const getStats = async () => {
    let procInfo = {};
    procInfo.cpuUsage = await new Promise((res, rej)=>{
        try {
            os.cpuUsage((v)=>res(v));
        } catch (error) {
            res("E!");
        }
    })
    procInfo.cpuFree = await new Promise((res, rej)=>{
        try {
            os.cpuFree((v)=>res(v));
        } catch (error) {
            res("E!");
        }
    })
    procInfo.platform = os.platform();
    procInfo.cpuCount = os.cpuCount();
    procInfo.freemem = os.freemem();
    procInfo.totalmem = os.totalmem();
    procInfo.freememPercentage = os.freememPercentage();
    procInfo.sysUptime = os.sysUptime();
    procInfo.processUptime = os.processUptime();
    procInfo.process_avg_load_1 = os.loadavg(1);
    procInfo.process_avg_load_5 = os.loadavg(5);
    procInfo.process_avg_load_15 = os.loadavg(15);
    procInfo.ISODate = new Date().toISOString();
    const used= process.memoryUsage();
    for (let key in used) {
        procInfo[key] = Math.round(used[key] / 1024 / 1024 * 100) / 100;
    }
    console.log(JSON.stringify(procInfo, null, 2))
}

module.exports = {
    getStats
}