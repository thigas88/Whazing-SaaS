'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21ba + -0x1109 + -0x62 * -0x89);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1b1)) / (-0x251f * 0x1 + 0x1c6a + 0x1be * 0x5) * (parseInt(i(0x1cb)) / (-0x5 * 0x729 + -0x1 * -0x1c99 + -0x47 * -0x1a)) + parseInt(i(0x1ce)) / (0x23 * 0x117 + 0x1 * -0x112e + 0x12a * -0x12) * (parseInt(i(0x1c3)) / (-0x89 * 0x2f + -0x24 * 0xdb + 0x37f7 * 0x1)) + parseInt(j(0x1cc)) / (-0x20 * -0x46 + 0x3a9 + -0xc64) * (parseInt(i(0x1af)) / (0x116a + -0x2400 + -0xc * -0x18d)) + parseInt(i(0x1be)) / (-0x1d64 + 0x1 * -0x1b8e + 0x38f9) + -parseInt(j(0x1b3)) / (-0x95 * 0x19 + -0x1 * 0x47b + -0x28 * -0x7a) * (-parseInt(j(0x1b7)) / (0x757 + 0x172b + -0x1e79)) + parseInt(i(0x1c8)) / (-0x266c + -0x1 * 0x20ed + 0x4763) + -parseInt(j(0x1b4)) / (0x690 + 0x2d7 * -0x1 + 0x3ae * -0x1) * (parseInt(i(0x1c1)) / (-0x230f + -0x244a + 0x1 * 0x4765));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x33 * -0x631 + -0x79 * 0x14ef + 0x128b2c));
const g = {};
g[k(0x1cf)] = !![], Object[k(0x1ca) + k(0x1c6)](exports, k(0x1d0), g);
function a() {
    const q = [
        '__esModule',
        '302196qwckCV',
        'XHqHV',
        '1XElUbC',
        'removeColu',
        '40GTDDvr',
        '19039669XbRnfg',
        'CASCADE',
        'LrFnI',
        '635967ODEeye',
        'exports',
        'Plans',
        'zHVLT',
        'addColumn',
        'DataTypes',
        'Tenants',
        '6098953OlgRtf',
        'INTEGER',
        'SET\x20NULL',
        '12sVuYJT',
        'qFkRN',
        '665996JhMneW',
        'planId',
        'sequelize',
        'erty',
        'uMYJU',
        '6306390aOukcZ',
        'FOaml',
        'defineProp',
        '1221414rXDHXU',
        '80BdJMlG',
        'PXZpB',
        '3jwfdlS',
        'value'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0x1c5));
module[l(0x1b8)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1c9)] = n(0x1bd), e[n(0x1b0)] = n(0x1c4), e[n(0x1b6)] = n(0x1b9), e[n(0x1c7)] = n(0x1b5), e[n(0x1ba)] = m(0x1c0);
        const f = e;
        return d[m(0x1bb)](f[m(0x1c9)], f[n(0x1b0)], {
            'type': sequelize_1[m(0x1bc)][m(0x1bf)],
            'references': {
                'model': f[m(0x1b6)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1c7)],
            'onDelete': f[n(0x1ba)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1cd)] = p(0x1bd), e[p(0x1c2)] = o(0x1c4);
        const f = e;
        return d[o(0x1b2) + 'mn'](f[o(0x1cd)], f[p(0x1c2)]);
    }
};