'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12e2 + -0x449 + -0xe1e);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x98)) / (0x179b + -0x1a1 + -0x7d * 0x2d) * (parseInt(m(0x87)) / (-0x239 * -0xf + 0x1185 + -0x32da)) + parseInt(m(0x9d)) / (-0x1 * -0x6e1 + -0x1 * -0x1e01 + -0x24df * 0x1) + parseInt(l(0x7b)) / (0x3 * 0x6d9 + 0x177d + 0xb01 * -0x4) * (-parseInt(l(0x9a)) / (-0x363 + 0x3f1 * -0x1 + 0x759)) + parseInt(l(0x8e)) / (-0xd37 + 0xaf9 + 0xa * 0x3a) * (-parseInt(l(0x7e)) / (0xaa3 + -0xdac + 0x310)) + parseInt(m(0x99)) / (-0x253a + -0x19cf * 0x1 + 0x3f11) + parseInt(m(0x94)) / (-0x1b * 0x14 + 0x25af + 0x2 * -0x11c5) * (-parseInt(l(0x84)) / (0x2 * -0xf91 + 0x3 * -0xa2b + 0x115 * 0x39)) + parseInt(m(0x89)) / (-0x1b5b + 0x2b * -0x37 + 0x24a3 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4d825 + 0x1 * 0x5a3c2 + 0x6fa35));
function a() {
    const t = [
        'sequelize',
        '1585026uxlIdB',
        '189404Xbacss',
        'pUIly',
        'ownerId',
        '171661zztgvd',
        'Tenants',
        'nFEOV',
        'erty',
        'all',
        'defineProp',
        '16070CtgOOr',
        'nerId_fkey',
        'TkoZz',
        '2eeZbKl',
        'CASCADE',
        '20512646DQgopt',
        'exports',
        'LrGzb',
        'Tenants_ow',
        'INTEGER',
        '180BgjIZn',
        'RItHT',
        'TFvaD',
        'removeCons',
        '__esModule',
        'DataTypes',
        '72bVwGZK',
        'changeColu',
        'traint',
        'aQjEg',
        '917943jxLgiE',
        '4322968WLcXio',
        '80nfbaMH',
        'value'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[n(0x9b)] = !![], Object[n(0x83) + o(0x81)](exports, o(0x92), k);
const sequelize_1 = require(o(0x9c));
module[o(0x8a)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0x97)] = p(0x7f), e[p(0x86)] = q(0x8c) + p(0x85), e[q(0x80)] = q(0x7d), e[p(0x7c)] = q(0x88);
        const f = e;
        return Promise[p(0x82)]([
            d[p(0x91) + q(0x96)](f[p(0x97)], f[p(0x86)]),
            d[q(0x95) + 'mn'](f[p(0x97)], f[q(0x80)], {
                'type': sequelize_1[q(0x93)][p(0x8d)],
                'references': {
                    'model': f[q(0x97)],
                    'key': 'id'
                },
                'onUpdate': f[q(0x7c)],
                'onDelete': f[p(0x7c)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x8b)] = s(0x7f), e[r(0x8f)] = r(0x7d), e[r(0x90)] = r(0x88);
        const f = e;
        return Promise[s(0x82)]([d[s(0x95) + 'mn'](f[r(0x8b)], f[r(0x8f)], {
                'type': sequelize_1[s(0x93)][s(0x8d)],
                'references': {
                    'model': f[r(0x8b)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x90)],
                'onDelete': f[r(0x90)],
                'allowNull': !![]
            })]);
    }
};