'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x16f)) / (0xdc + 0x1b19 + -0x2 * 0xdfa) * (parseInt(n(0x15e)) / (-0x1294 + -0x14c * 0x7 + 0x1baa * 0x1)) + -parseInt(n(0x16a)) / (0x2157 + 0xd7c + -0x2ed0) * (parseInt(n(0x165)) / (0x1969 + -0xf25 * 0x1 + -0x8 * 0x148)) + parseInt(n(0x15f)) / (-0x1830 + 0x20ab + -0x876) * (-parseInt(o(0x15d)) / (0x1c4d + 0x204a + -0x3c91)) + parseInt(o(0x164)) / (-0x860 * -0x1 + 0xf92 + -0x17eb) * (-parseInt(n(0x16e)) / (-0x102b + 0x1cd + 0x13 * 0xc2)) + parseInt(n(0x166)) / (0x6b * -0x5b + 0x7e6 + 0x1e2c) + parseInt(o(0x176)) / (0xd * 0x83 + -0x77b + -0x3 * -0x4a) + -parseInt(o(0x159)) / (-0x1185 + 0x1c5f + -0xacf) * (-parseInt(o(0x16c)) / (-0x4 * -0x80e + -0x5f2 * 0x3 + -0xe56));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x13bc16 + -0x1412ec * 0x1 + 0x64a1 * 0x84));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x944 + 0x483 * 0x7 + -0x14fe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
function a() {
    const v = [
        '15129100FlFpWh',
        'DATE',
        'kyQqd',
        'defaultVal',
        'lastIntera',
        '__esModule',
        'sequelize',
        'erty',
        '44kNTcnH',
        'PsfdZ',
        'HfdEd',
        'removeColu',
        '318nxfaKe',
        '4YrevHs',
        '124840FMqDDD',
        'Tickets',
        'ZZsPk',
        'ctionBot',
        'botRetries',
        '35HfiiKT',
        '13024dsWnag',
        '13006278bfFvdj',
        'value',
        'addColumn',
        'exports',
        '1143ufDrRN',
        'INTEGER',
        '2144892sVmLiL',
        'all',
        '871888fFecuc',
        '113654Synkii',
        'DataTypes',
        'defineProp',
        'SNNBY',
        'type',
        'allowNull',
        'uiVNu'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x167)] = !![], Object[q(0x171) + q(0x158)](exports, q(0x156), m);
const sequelize_1 = require(q(0x157));
module[q(0x169)] = {
    'up': f => {
        const r = p, s = p, g = {};
        g[r(0x172)] = r(0x160), g[s(0x175)] = r(0x163), g[r(0x161)] = r(0x155) + s(0x162);
        const h = g, i = {};
        i[s(0x173)] = sequelize_1[r(0x170)][s(0x16b)], i[s(0x174)] = ![], i[r(0x154) + 'ue'] = 0x0;
        const j = {};
        return j[r(0x173)] = sequelize_1[r(0x170)][r(0x177)], j[r(0x174)] = !![], j[r(0x154) + 'ue'] = null, Promise[s(0x16d)]([
            f[s(0x168)](h[r(0x172)], h[s(0x175)], i),
            f[s(0x168)](h[r(0x172)], h[r(0x161)], j)
        ]);
    },
    'down': d => {
        const t = q, u = q, e = {};
        e[t(0x15a)] = t(0x160), e[u(0x15b)] = t(0x163), e[u(0x153)] = t(0x155) + t(0x162);
        const f = e;
        return Promise[t(0x16d)]([
            d[t(0x15c) + 'mn'](f[u(0x15a)], f[t(0x15b)]),
            d[t(0x15c) + 'mn'](f[t(0x15a)], f[t(0x153)])
        ]);
    }
};