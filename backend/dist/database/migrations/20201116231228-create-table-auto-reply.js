'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x91 * 0x9 + -0x1 * -0x1e7 + -0x5d0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '99WTZFYK',
        '12483320XFEtFH',
        'createTabl',
        'defineProp',
        'primaryKey',
        'Fdoqs',
        '6HrQSoD',
        'exports',
        '155516fdqBeb',
        'defaultVal',
        'eeNTR',
        'pCGOD',
        'sequelize',
        'INTEGER',
        'VujPE',
        'ent',
        '105fyjvEL',
        'allowNull',
        '851526SirEDS',
        'type',
        '791380INCbUS',
        '__esModule',
        'erty',
        'DATE',
        '6318844UddFip',
        'AutoReply',
        'CASCADE',
        'autoIncrem',
        'value',
        '2431224SRzJWK',
        'EWKqM',
        'SET\x20NULL',
        'dropTable',
        'DataTypes',
        'Users',
        'STRING',
        '1734140ulZKSL'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x133)) / (-0x3 * 0x6e2 + 0x4cd * -0x1 + 0x1974) + parseInt(u(0x131)) / (-0x12e2 * 0x1 + 0x11a3 + -0x3 * -0x6b) + -parseInt(t(0x13c)) / (0x1251 + 0x27e + -0x14cc) + parseInt(t(0x14c)) / (0x1247 + 0x5 * -0x1c0 + 0x5 * -0x1e7) * (-parseInt(t(0x154)) / (0x1536 + 0x1 * 0x2263 + -0x3794)) + parseInt(t(0x14a)) / (-0x1b8c + -0x790 + 0x1 * 0x2322) * (parseInt(t(0x137)) / (-0xc7d * -0x1 + -0xc0d + -0x69)) + -parseInt(t(0x145)) / (0x1d87 + -0xf21 + -0xe5e) + parseInt(t(0x144)) / (0x20a6 + -0x101 * 0x26 + 0x589) * (parseInt(u(0x143)) / (0x94c + 0x1 * 0x557 + 0x25 * -0x65));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x697e5 + -0x11e28b + -0xad9 * -0x239));
const s = {};
s[v(0x13b)] = !![], Object[w(0x147) + v(0x135)](exports, v(0x134), s);
const sequelize_1 = require(v(0x150));
module[v(0x14b)] = {
    'up': h => {
        const x = v, y = w, i = {};
        i[x(0x14f)] = x(0x138), i[y(0x14e)] = x(0x141), i[x(0x149)] = x(0x139), i[y(0x13d)] = x(0x13e);
        const j = i, k = {};
        k[y(0x132)] = sequelize_1[x(0x140)][y(0x151)], k[y(0x13a) + x(0x153)] = !![], k[x(0x148)] = !![], k[y(0x130)] = ![];
        const l = {};
        l[x(0x132)] = sequelize_1[y(0x140)][y(0x142)], l[x(0x130)] = ![];
        const m = {};
        m[y(0x132)] = sequelize_1[x(0x140)][y(0x142)], m[y(0x130)] = ![];
        const n = {};
        return n[y(0x132)] = sequelize_1[y(0x140)][x(0x151)], n[y(0x130)] = ![], n[x(0x14d) + 'ue'] = 0x0, h[y(0x146) + 'e'](j[y(0x14f)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[y(0x140)][x(0x151)],
                'references': {
                    'model': j[y(0x14e)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x149)],
                'onDelete': j[y(0x13d)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x140)][y(0x136)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x140)][y(0x136)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x152)] = z(0x138);
        const f = e;
        return d[A(0x13f)](f[A(0x152)]);
    }
};