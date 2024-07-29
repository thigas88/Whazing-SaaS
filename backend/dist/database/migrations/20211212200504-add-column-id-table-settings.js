'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xd0)) / (-0x20e1 + 0x24b7 + -0x3d5) + -parseInt(j(0xd5)) / (-0x1c73 * 0x1 + -0x1 * 0x1daa + -0x3a1f * -0x1) + parseInt(j(0xd8)) / (-0x12e * -0x3 + -0x17 * 0x199 + 0x2138) * (parseInt(j(0xda)) / (0x82 * 0x34 + -0xe6e + -0xbf6)) + -parseInt(j(0xd3)) / (-0x211f + -0x13cc + -0x16 * -0x268) + -parseInt(k(0xd9)) / (0xeaa + -0xa34 + -0x4 * 0x11c) + parseInt(j(0xc6)) / (0xd04 + 0xc7f + 0x7 * -0x3a4) * (parseInt(k(0xca)) / (-0x6ff + -0xeb + 0x7f2)) + parseInt(j(0xce)) / (-0x137c + -0x1d09 * -0x1 + -0x984) * (parseInt(k(0xd1)) / (-0x57d + 0x235b + -0x1 * 0x1dd4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1dcd7 * 0x2 + 0x1904e3 + 0xc0 * -0x922));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x148 + 0x16bf * -0x1 + 0x18cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
i[l(0xe2)] = !![], Object[l(0xde) + l(0xc7)](exports, m(0xcf), i);
const sequelize_1 = require(m(0xd4));
function a() {
    const r = [
        'allowNull',
        'MQxYY',
        '435YujjYU',
        '6830286dGDjRm',
        '10796wFCPIK',
        'exports',
        'DataTypes',
        'Settings',
        'defineProp',
        'removeColu',
        'addColumn',
        'all',
        'value',
        '11203563zwxIOP',
        'erty',
        'autoIncrem',
        'qlavd',
        '8WlqQxp',
        'INTEGER',
        'primaryKey',
        'ent',
        '13510107JVKhpZ',
        '__esModule',
        '177333oMkrTu',
        '10xObAfW',
        'type',
        '3952290itXszM',
        'sequelize',
        '880404GuoeQS'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0xdb)] = {
    'up': e => {
        const n = m, o = m, f = {};
        f[n(0xc9)] = o(0xdd);
        const g = f, h = {};
        return h[o(0xd2)] = sequelize_1[o(0xdc)][n(0xcb)], h[n(0xc8) + o(0xcd)] = !![], h[n(0xcc)] = !![], h[o(0xd6)] = ![], Promise[o(0xe1)]([e[n(0xe0)](g[o(0xc9)], 'id', h)]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xd7)] = q(0xdd);
        const f = e;
        return Promise[p(0xe1)]([d[p(0xdf) + 'mn'](f[q(0xd7)], 'id')]);
    }
};