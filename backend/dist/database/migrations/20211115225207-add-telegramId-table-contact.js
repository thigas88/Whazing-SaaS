'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xc0)) / (0x1 * 0x1982 + 0x30 * -0x21 + -0x1 * 0x1351) + -parseInt(q(0xd3)) / (0xc68 * 0x1 + -0x5 * 0x2d5 + 0x1c3) * (-parseInt(q(0xd2)) / (-0x815 + -0x33 * -0x39 + -0x343)) + -parseInt(p(0xda)) / (0x15c0 + -0xb9c + -0xa20) + -parseInt(q(0xc8)) / (0x1329 * 0x2 + -0x645 + 0x28 * -0xcd) + -parseInt(q(0xcd)) / (-0x98d + -0x1ff9 + 0x298c) * (parseInt(p(0xe7)) / (0x67 * 0x25 + -0xe6c + 0x8 * -0xe)) + parseInt(q(0xd4)) / (0x518 * -0x4 + 0x33f * -0x1 + 0x7 * 0x361) * (parseInt(p(0xd9)) / (0xcc7 * -0x3 + -0x1 * 0x20a0 + 0x46fe)) + -parseInt(p(0xe9)) / (0x2194 + 0x1f74 + -0x40fe) * (-parseInt(p(0xea)) / (-0x1dcf * -0x1 + -0x1071 + -0xd53));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfb4a5 + -0xdfddc + -0x1 * -0x29cc9b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25e6 + 0x121f + -0x3748);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
function a() {
    const x = [
        '2RdzemJ',
        '280BdCjjG',
        'ntact_numb',
        'SWFmA',
        'vNIaU',
        'straint_co',
        '183969xiFqjh',
        '3611508eZknfN',
        'bXjjC',
        'allowNull',
        '__esModule',
        'erty',
        'vPwbO',
        'uWeWB',
        'er_tenant',
        'all',
        'defaultVal',
        'addColumn',
        'tChig',
        'telegramId',
        '131285bZBebQ',
        'changeColu',
        '13690yBELpJ',
        '11869UGfrIh',
        'sequelize',
        'defineProp',
        'number',
        'int',
        'DataTypes',
        'cMdpD',
        'type',
        '525127VmgziQ',
        'unique',
        'BIGINT',
        'HaqRr',
        'removeColu',
        'zAPPe',
        'value',
        'traint',
        '2808840RTVebv',
        'QChRp',
        'STRING',
        'Contacts',
        'addConstra',
        '426WPGUbJ',
        'tenantId',
        'unique_con',
        'exports',
        'removeCons',
        '2614953EpSFjF'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0xc6)] = !![], Object[r(0xec) + r(0xde)](exports, r(0xdd), o);
const sequelize_1 = require(s(0xeb));
module[r(0xd0)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0xdb)] = u(0xcb), g[u(0xc3)] = u(0xe6), g[t(0xbe)] = u(0xcf) + t(0xd8) + u(0xd5) + u(0xe1), g[u(0xc5)] = u(0xed);
        const h = g, i = {};
        i[u(0xbf)] = sequelize_1[u(0xbd)][t(0xc2)], i[t(0xe3) + 'ue'] = null, i[u(0xdc)] = !![];
        const j = {};
        return j[u(0xbf)] = sequelize_1[t(0xbd)][t(0xca)], j[t(0xdc)] = !![], j[u(0xc1)] = ![], j[u(0xe3) + 'ue'] = null, Promise[u(0xe2)]([
            f[u(0xe4)](h[u(0xdb)], h[t(0xc3)], i),
            f[u(0xd1) + t(0xc7)](h[u(0xdb)], h[t(0xbe)]),
            f[u(0xe8) + 'mn'](h[t(0xdb)], h[t(0xc5)], j)
        ]);
    },
    'down': e => {
        const v = r, w = s, f = {};
        f[v(0xdf)] = w(0xcb), f[w(0xd7)] = v(0xe6), f[w(0xc9)] = v(0xed), f[v(0xd6)] = v(0xce), f[w(0xe5)] = w(0xc1), f[w(0xe0)] = w(0xcf) + v(0xd8) + w(0xd5) + v(0xe1);
        const g = f, h = {};
        return h[w(0xbf)] = sequelize_1[v(0xbd)][v(0xca)], h[w(0xdc)] = ![], h[v(0xc1)] = !![], Promise[v(0xe2)]([
            e[w(0xc4) + 'mn'](g[w(0xdf)], g[w(0xd7)]),
            e[v(0xe8) + 'mn'](g[v(0xdf)], g[v(0xc9)], h),
            e[w(0xcc) + w(0xee)](g[w(0xdf)], [
                g[w(0xc9)],
                g[v(0xd6)]
            ], {
                'type': g[v(0xe5)],
                'name': g[w(0xe0)]
            })
        ]);
    }
};