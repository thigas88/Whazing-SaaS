'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1b0)) / (0x4 * 0x1de + -0x1556 + 0x43 * 0x35) * (-parseInt(j(0x1a6)) / (-0x1 * -0xd69 + 0x1048 * -0x2 + 0x147 * 0xf)) + -parseInt(j(0x1ab)) / (-0x2002 + 0x41f + -0x1 * -0x1be6) * (parseInt(k(0x1ba)) / (0xafe * -0x1 + -0x17ef + 0x22f1)) + -parseInt(k(0x1bd)) / (0xaa8 + -0x12ce + -0x11 * -0x7b) + -parseInt(k(0x1af)) / (0x1 * 0xa3 + -0x3 * -0x74a + 0x167b * -0x1) * (-parseInt(k(0x1a7)) / (0x2691 + -0x10a3 * 0x2 + -0x544)) + parseInt(j(0x1bf)) / (0x13f3 + -0x26 * -0x4f + -0x1fa5) * (parseInt(j(0x1b8)) / (-0x15ef + 0x1eb * 0x1 + 0x140d * 0x1)) + parseInt(j(0x1a4)) / (0x1d3 * 0xd + -0x236a + -0x259 * -0x5) * (parseInt(j(0x1be)) / (-0x1db3 * -0x1 + -0x1 * 0x11e + 0x1a * -0x119)) + -parseInt(j(0x1b5)) / (-0x1d33 + -0x49a * -0x6 + 0x1a3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x135 * -0x11ef + -0xfc2a9 + 0x26e3d * 0x14));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x551 + 0x204a + -0x1 * 0x962);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x1b6)] = !![], Object[l(0x1ad) + l(0x1ac)](exports, m(0x1c2), i);
const sequelize_1 = require(l(0x1a8));
function a() {
    const r = [
        'value',
        'BOOLEAN',
        '864MjQDuB',
        'rNioP',
        '868UOVMSi',
        'type',
        'addColumn',
        '3306240flnhFo',
        '27159LXgeUx',
        '97824ECvEfC',
        'allowNull',
        'exports',
        '__esModule',
        'DataTypes',
        'Tickets',
        '3930vumTmR',
        'all',
        '8MkIOwe',
        '14lWTOUT',
        'sequelize',
        'defaultVal',
        'removeColu',
        '4413DZlfwD',
        'erty',
        'defineProp',
        'OQWKS',
        '1970148ltxdmo',
        '138622cWflTA',
        'zABkC',
        'isActiveDe',
        'xqPTe',
        'mand',
        '6379320CuBCZH'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0x1c1)] = {
    'up': e => {
        const n = m, o = l, f = {};
        f[n(0x1b3)] = o(0x1c4), f[n(0x1b9)] = o(0x1b2) + o(0x1b4);
        const g = f, h = {};
        return h[o(0x1bb)] = sequelize_1[o(0x1c3)][n(0x1b7)], h[o(0x1c0)] = ![], h[n(0x1a9) + 'ue'] = ![], Promise[n(0x1a5)]([e[o(0x1bc)](g[o(0x1b3)], g[n(0x1b9)], h)]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x1ae)] = p(0x1c4), e[q(0x1b1)] = p(0x1b2) + q(0x1b4);
        const f = e;
        return Promise[p(0x1a5)]([d[q(0x1aa) + 'mn'](f[p(0x1ae)], f[q(0x1b1)])]);
    }
};