'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x15a)) / (-0x132e + -0xa * -0x30d + 0xd * -0xdf) + -parseInt(s(0x15e)) / (0x1e80 + -0x228e + 0x410) * (parseInt(r(0x167)) / (0x5c7 * 0x2 + -0x48 * 0x7e + -0x17e5 * -0x1)) + parseInt(r(0x16b)) / (-0x19af + 0x3bc + 0x15f7) * (parseInt(s(0x142)) / (-0x10e3 + -0x1 * -0x1c1 + 0xf27)) + parseInt(s(0x159)) / (0x1199 + -0x1b09 + 0x976) * (parseInt(r(0x154)) / (-0x7 * 0x3cb + 0x722 + 0x2 * 0x9b9)) + -parseInt(r(0x164)) / (-0x14bc + 0x1af6 * -0x1 + 0x12a * 0x29) + -parseInt(r(0x162)) / (0x130e + 0x1 * -0x1ec1 + 0xbbc) + -parseInt(r(0x161)) / (-0x2694 + 0xb58 + -0x1b46 * -0x1) * (-parseInt(s(0x15b)) / (-0x2e5 + 0xc1 * -0x2d + 0x24dd * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9a37d + -0xf * 0x33fd + -0x159da));
function a() {
    const z = [
        'type',
        'zFzzK',
        'defineProp',
        'tZaPq',
        'value',
        'Queues',
        'rYJqh',
        'addColumn',
        'queueId',
        'kpTNm',
        'exports',
        '21ftkgwd',
        'uJmGy',
        'cskHr',
        'removeColu',
        'DataTypes',
        '1022394sFQTiM',
        '584811WbvksU',
        '517NtzsuA',
        'obOMV',
        'userIdDest',
        '276482ReEZWu',
        'rVShM',
        'ination',
        '31230JiMFRN',
        '3165489vEKIZx',
        'restrict',
        '4888816NQfLRc',
        'queue',
        'wfVNj',
        '3MEYxvw',
        'CASCADE',
        'INTEGER',
        'qUBWA',
        '92AftmEP',
        'sequelize',
        'allowNull',
        'all',
        'defaultVal',
        'erty',
        '43865ekWQjZ',
        'Actions',
        'StepsReply',
        '__esModule',
        'tBVtF',
        'Users',
        'lOoZl'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16ca + 0x1668 + -0xc2 * 0x3a);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[t(0x14d)] = !![], Object[t(0x14b) + t(0x141)](exports, u(0x145), q);
const sequelize_1 = require(t(0x16c));
module[t(0x153)] = {
    'up': d => {
        const v = u, w = u, e = {};
        e[v(0x15f)] = v(0x144) + w(0x143), e[v(0x155)] = v(0x165), e[v(0x14f)] = v(0x151), e[w(0x14c)] = w(0x14e), e[v(0x148)] = v(0x168), e[v(0x156)] = w(0x163), e[w(0x146)] = v(0x15d) + w(0x160), e[v(0x16a)] = w(0x147);
        const f = e;
        return Promise[w(0x13f)]([
            d[v(0x157) + 'mn'](f[v(0x15f)], f[v(0x155)]),
            d[w(0x150)](f[w(0x15f)], f[w(0x14f)], {
                'type': sequelize_1[w(0x158)][w(0x169)],
                'references': {
                    'model': f[v(0x14c)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x148)],
                'onDelete': f[w(0x156)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0x157) + 'mn'](f[v(0x15f)], f[v(0x146)]),
            d[v(0x150)](f[w(0x15f)], f[v(0x146)], {
                'type': sequelize_1[w(0x158)][v(0x169)],
                'references': {
                    'model': f[w(0x16a)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x148)],
                'onDelete': f[v(0x156)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = u, y = u, g = {};
        g[x(0x152)] = y(0x144) + y(0x143), g[y(0x166)] = y(0x151), g[x(0x15c)] = x(0x165), g[y(0x14a)] = y(0x15d) + x(0x160);
        const h = g, i = {};
        i[y(0x149)] = sequelize_1[y(0x158)][x(0x169)], i[x(0x140) + 'ue'] = null, i[y(0x13e)] = !![];
        const j = {};
        return j[y(0x149)] = sequelize_1[x(0x158)][y(0x169)], j[y(0x140) + 'ue'] = null, j[y(0x13e)] = !![], Promise[x(0x13f)]([
            f[y(0x157) + 'mn'](h[x(0x152)], h[x(0x166)]),
            f[x(0x150)](h[x(0x152)], h[y(0x15c)], i),
            f[y(0x157) + 'mn'](h[x(0x152)], h[y(0x14a)]),
            f[y(0x150)](h[y(0x152)], h[y(0x14a)], j)
        ]);
    }
};