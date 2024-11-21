'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xd6)) / (0x233c + 0x16 * -0xf6 + -0xe17) + parseInt(j(0xd4)) / (0x851 + -0x250 * -0x8 + -0x1acf) + parseInt(j(0xc2)) / (0x137 * -0x2 + -0x7cf + 0xa40) * (parseInt(k(0xbe)) / (0x27 + -0x1f10 + 0x1eed)) + parseInt(j(0xdd)) / (0x14af + 0x23ad + -0x3857) + -parseInt(j(0xd2)) / (0x4 * -0x595 + -0x3 * -0xb69 + -0xbe1) * (parseInt(j(0xc9)) / (0x17c0 + 0xd0c + -0x24c5 * 0x1)) + parseInt(j(0xc3)) / (-0x61b * 0x1 + -0x1f20 + 0x1 * 0x2543) * (parseInt(j(0xd7)) / (-0x139 + -0x2a5 + 0x3e7)) + -parseInt(k(0xce)) / (-0x1936 + 0x2 * 0xbd4 + 0x198);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x123053 + 0x128331 + -0x1785f1));
function a() {
    const r = [
        'removeColu',
        'all',
        'MQZcJ',
        '4244550sGyiSu',
        'DataTypes',
        'JCeYI',
        'erty',
        '1264902HMJaQR',
        'value',
        '2525192ENTPSa',
        'defineProp',
        '1284940oDspxR',
        '1611SIbnIw',
        'sequelize',
        'restrict',
        'tenantId',
        'FuSvY',
        'WjMCK',
        '6002785ktAQqp',
        'exports',
        '668ByuiWq',
        'addColumn',
        'CASCADE',
        'XhfKm',
        '13992knvegn',
        '26632sFeqrZ',
        'vxImE',
        'ctFzu',
        'Messages',
        'INTEGER',
        'Tenants',
        '42fbfNDj',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0xd3)] = !![], Object[l(0xd5) + m(0xd1)](exports, l(0xca), i);
const sequelize_1 = require(m(0xd8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fff * -0x1 + -0xe * -0x150 + -0x31a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[m(0xde)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0xcd)] = n(0xc6), e[o(0xdc)] = n(0xda), e[n(0xdb)] = n(0xc8), e[n(0xd0)] = o(0xc0), e[o(0xc4)] = n(0xd9);
        const f = e;
        return Promise[o(0xcc)]([d[o(0xbf)](f[o(0xcd)], f[o(0xdc)], {
                'type': sequelize_1[o(0xcf)][n(0xc7)],
                'references': {
                    'model': f[n(0xdb)],
                    'key': 'id'
                },
                'onUpdate': f[o(0xd0)],
                'onDelete': f[n(0xc4)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0xc5)] = p(0xc6), e[p(0xc1)] = q(0xda);
        const f = e;
        return Promise[q(0xcc)]([d[p(0xcb) + 'mn'](f[q(0xc5)], f[q(0xc1)])]);
    }
};