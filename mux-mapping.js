
module.exports = function(RED) {

    function mux_mappingNode(config) {
        RED.nodes.createNode(this,config);
        this.slot = config.slot;

        this.A01 = config.A01;
        this.valueA01 = config.valueA01;
        this.A02 = config.A02;
        this.valueA02 = config.valueA02;
        this.A03 = config.A03;
        this.valueA03 = config.valueA03;
        this.A04 = config.A04;
        this.valueA04 = config.valueA04;
        this.A05 = config.A05;
        this.valueA05 = config.valueA05;
        this.A06 = config.A06;
        this.valueA06 = config.valueA06;
        this.A07 = config.A07;
        this.valueA07 = config.valueA07;
        this.A08 = config.A08;
        this.valueA08 = config.valueA08;
        this.A09 = config.A09;
        this.valueA09 = config.valueA09;
        this.A10 = config.A10;
        this.valueA10 = config.valueA10;
        this.A11 = config.A11;
        this.valueA11 = config.valueA11;
        this.A12 = config.A12;
        this.valueA12 = config.valueA12;
        this.A13 = config.A13;
        this.valueA13 = config.valueA13;
        this.A14 = config.A14;
        this.valueA14 = config.valueA14;
        this.A15 = config.A15;
        this.valueA15 = config.valueA15;
        this.A16 = config.A16;
        this.valueA16 = config.valueA16;

        this.AGND1 = config.AGND1;
        this.AGND11 = config.AGND11;
        this.AGND21 = config.AGND21;
        this.AGND31 = config.AGND31;
        this.AGND2 = config.AGND2;
        this.AGND12 = config.AGND12;
        this.AGND22 = config.AGND22;
        this.AGND32 = config.AGND32;

        var globalContext = this.context().global;
        var map = globalContext.get("map");

        var mux_map = [
            {feat: `MUX INSTANCE ${this.slot}`, pin: "", board: ""},
            {feat: 'A01', pin: 'PIN 39', board: `TP (${config.A01})` },
            {feat: 'A02', pin: 'PIN 37', board: `TP (${config.A02})` },
            {feat: 'A03', pin: 'PIN 35', board: `TP (${config.A03})` },
            {feat: 'A04', pin: 'PIN 33', board: `TP (${config.A04})` },
            {feat: 'AGND', pin: 'PIN 31', board: `TP (${config.AGND31})` },
            {feat: 'A05', pin: 'PIN 29', board: `TP (${config.A05})` },
            {feat: 'A06', pin: 'PIN 27', board: `TP (${config.A06})` },
            {feat: 'A07', pin: 'PIN 25', board: `TP (${config.A07})` },
            {feat: 'A08', pin: 'PIN 23', board: `TP (${config.A08})` },
            {feat: 'AGND', pin: 'PIN 21', board: `TP (${config.AGND21})` },
            {feat: 'A09', pin: 'PIN 19', board: `TP (${config.A09})` },
            {feat: 'A10', pin: 'PIN 17', board: `TP (${config.A10})` },
            {feat: 'A11', pin: 'PIN 15', board: `TP (${config.A11})` },
            {feat: 'A12', pin: 'PIN 13', board: `TP (${config.A12})` },
            {feat: 'AGND', pin: 'PIN 11', board: `TP (${config.AGND11})` },
            {feat: 'A13', pin: 'PIN 9', board: `TP (${config.A13})` },
            {feat: 'A14', pin: 'PIN 7', board: `TP (${config.A14})` },
            {feat: 'A15', pin: 'PIN 5', board: `TP (${config.A15})` },
            {feat: 'A16', pin: 'PIN 3', board: `TP (${config.A16 })` },
            {feat: 'AGND', pin: 'PIN 1', board: `TP (${config.AGND1})` },

            {feat: 'B01', pin: 'PIN 40', board: `TP (${config.B01})` },
            {feat: 'B02', pin: 'PIN 38', board: `TP (${config.B02})` },
            {feat: 'B03', pin: 'PIN 36', board: `TP (${config.B03})` },
            {feat: 'B04', pin: 'PIN 34', board: `TP (${config.B04})` },
            {feat: 'AGND', pin: 'PIN 32', board: `TP (${config.AGND32})` },
            {feat: 'B05', pin: 'PIN 30', board: `TP (${config.B05})` },
            {feat: 'B06', pin: 'PIN 28', board: `TP (${config.B06})` },
            {feat: 'B07', pin: 'PIN 26', board: `TP (${config.B07})` },
            {feat: 'B08', pin: 'PIN 24', board: `TP (${config.B08})` },
            {feat: 'AGND', pin: 'PIN 22', board: `TP (${config.AGND22})` },
            {feat: 'B09', pin: 'PIN 20', board: `TP (${config.B09})` },
            {feat: 'B10', pin: 'PIN 18', board: `TP (${config.B10})` },
            {feat: 'B11', pin: 'PIN 16', board: `TP (${config.B11})` },
            {feat: 'B12', pin: 'PIN 14', board: `TP (${config.B12})` },
            {feat: 'AGND', pin: 'PIN 12', board: `TP (${config.AGND12})` },
            {feat: 'B13', pin: 'PIN 10', board: `TP (${config.B13})` },
            {feat: 'B14', pin: 'PIN 8', board: `TP (${config.B14})` },
            {feat: 'B15', pin: 'PIN 6', board: `TP (${config.B15})` },
            {feat: 'B16', pin: 'PIN 4', board: `TP (${config.B16})` },
            {feat: 'AGND', pin: 'PIN 2', board: `TP (${config.AGND2})` },

        ];

        if(map){
            map.mux[config.slot - 1] = [];
            for(row of mux_map){
                map.mux[config.slot - 1].push(row);
            }
        }
    }

    RED.nodes.registerType("mux-mapping", mux_mappingNode);
}
