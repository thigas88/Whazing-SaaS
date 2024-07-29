'use strict';
const m = b, n = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x473 * -0x7 + 0x317 * -0xb + 0x350);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x98)) / (-0x1c1f + 0x7b1 + -0x1 * -0x146f) + -parseInt(k(0x7c)) / (-0x5e * 0x2c + 0x4 * 0x998 + -0x1636) * (parseInt(k(0x7f)) / (0x851 + 0x218 + -0xa66)) + parseInt(k(0x7e)) / (-0x9 * -0x35f + -0x1 * 0xaee + 0x3e1 * -0x5) * (parseInt(k(0x87)) / (0x1f4a + 0x2 * -0x422 + -0x1701)) + -parseInt(l(0x94)) / (-0x1cfa + 0x1729 * -0x1 + 0x1163 * 0x3) * (-parseInt(l(0x82)) / (-0xb * -0x2ed + 0x15b2 + -0x35da)) + -parseInt(l(0x91)) / (-0x20fd + 0x1d39 + 0x3cc) * (parseInt(l(0x9e)) / (-0x3 * 0x28c + -0x4 * -0xe2 + -0x1 * -0x425)) + parseInt(l(0x8a)) / (0x1 * 0x2611 + -0x5c9 * -0x1 + 0x2bd * -0x10) + -parseInt(l(0x97)) / (-0x7 * -0x431 + -0x1 * -0x93d + -0x2689 * 0x1) * (-parseInt(k(0x9f)) / (0x1319 * 0x2 + -0x2 * -0xdf + 0x6a6 * -0x6));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x2e012 * 0x4 + -0xe71e6 + 0xaf876));
const c = {};
function a() {
    const s = [
        'type',
        '2ALFrdp',
        '__esModule',
        '956xkMsfH',
        '2677143MqqZFZ',
        'ble',
        'defineProp',
        '2202067tHEsJd',
        'vAMOB',
        'TRHvw',
        'XyGat',
        'dpCjd',
        '3580jGfFJb',
        'bCdyR',
        'ggjGO',
        '8434980gcXoEv',
        'defaultVal',
        'value',
        'pFSxy',
        'allowNull',
        'exports',
        'addColumn',
        '208jUGfbX',
        'Tenants',
        'BOOLEAN',
        '18PPRBaU',
        'tenantId',
        'isActive',
        '3047fRbpyn',
        '954958riuQXr',
        'sequelize',
        'xmESD',
        'xelan',
        'erty',
        'DataTypes',
        '294534RETLDe',
        '54840ibtEKH',
        'restrict',
        'describeTa',
        'Groups',
        'removeColu',
        'CASCADE',
        'INTEGER'
    ];
    a = function () {
        return s;
    };
    return a();
}
c[m(0x8c)] = !![], Object[n(0x81) + n(0x9c)](exports, n(0x7d), c);
const sequelize_1 = require(n(0x99));
module[n(0x8f)] = {
    'up': async f => {
        const o = m, p = n, g = {};
        g[o(0x89)] = o(0xa2), g[p(0x9b)] = p(0x95), g[o(0x83)] = o(0x92), g[o(0x8d)] = o(0x79), g[o(0x9a)] = p(0xa0), g[o(0x86)] = p(0x96);
        const h = g, i = await f[p(0xa1) + p(0x80)](h[o(0x89)]);
        (!i || !i[h[o(0x9b)]]) && await f[o(0x90)](h[o(0x89)], h[o(0x9b)], {
            'type': sequelize_1[o(0x9d)][p(0x7a)],
            'references': {
                'model': h[p(0x83)],
                'key': 'id'
            },
            'onUpdate': h[p(0x8d)],
            'onDelete': h[p(0x9a)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[o(0x86)]]) {
            const j = {};
            j[o(0x7b)] = sequelize_1[o(0x9d)][o(0x93)], j[p(0x8e)] = ![], j[p(0x8b) + 'ue'] = !![], await f[o(0x90)](h[o(0x89)], h[p(0x86)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0x84)] = r(0xa2), f[q(0x88)] = q(0x95), f[r(0x85)] = q(0x96);
        const g = f;
        await e[r(0x78) + 'mn'](g[q(0x84)], g[r(0x88)]), await e[q(0x78) + 'mn'](g[q(0x84)], g[q(0x85)]);
    }
};