'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x17c)) / (-0x119 * -0xd + 0xf8 + -0xf3c) * (parseInt(t(0x15f)) / (0xf4d + 0x1f63 + 0x2eae * -0x1)) + parseInt(u(0x17e)) / (-0x460 + -0x837 + -0x64d * -0x2) + parseInt(u(0x160)) / (-0x13e2 + 0x5ed + 0xdf9) + -parseInt(t(0x172)) / (0x265 * -0xc + -0x89e * -0x1 + -0x5 * -0x407) * (-parseInt(u(0x16c)) / (-0x7 * -0x18b + -0x1 * 0x1c0d + 0x1146)) + -parseInt(t(0x17f)) / (0x66a + -0x1 * 0x1691 + -0x102e * -0x1) + -parseInt(t(0x16b)) / (0x1f42 + 0x29 * 0x97 + 0x1 * -0x3769) + -parseInt(u(0x175)) / (0x2598 + -0xa * 0x45 + -0x22dd) * (-parseInt(t(0x178)) / (0x1fea + 0x649 * 0x1 + -0x2629));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8fcf0 + -0x12ae9e + -0x1489 * -0x10c));
function a() {
    const B = [
        '__esModule',
        'exports',
        'ent',
        'DataTypes',
        'neral',
        'updatedAt',
        'STRING',
        'TEXT',
        'dropTable',
        '5443736YrkZCw',
        '173754QGNRtR',
        'njxPL',
        'erty',
        'createTabl',
        'defineProp',
        'sequelize',
        '210oFYwuG',
        'key',
        'lPucK',
        '315kQlqme',
        'primaryKey',
        'value',
        '104240kPzJCU',
        'DATE',
        'INTEGER',
        'SettingsGe',
        '4sGESMU',
        'autoIncrem',
        '3108MWBEfN',
        '4111268aOIcBO',
        'createdAt',
        'allowNull',
        '213822QxCCTO',
        '3547388GwhEGc',
        'type'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1950 + 0x25b7 + -0x8 * 0x7b5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[v(0x177)] = !![], Object[v(0x170) + w(0x16e)](exports, w(0x162), o);
const sequelize_1 = require(v(0x171));
module[w(0x163)] = {
    'up': j => {
        const x = v, y = w, k = {};
        k[x(0x16d)] = x(0x17b) + y(0x166);
        const l = k, m = {};
        m[y(0x161)] = sequelize_1[x(0x165)][y(0x17a)], m[y(0x17d) + y(0x164)] = !![], m[x(0x176)] = !![], m[x(0x181)] = ![];
        const n = {};
        n[y(0x161)] = sequelize_1[y(0x165)][y(0x168)], n[y(0x176)] = ![], n[x(0x181)] = ![];
        const p = {};
        p[x(0x161)] = sequelize_1[y(0x165)][x(0x169)], p[x(0x181)] = ![];
        const q = {};
        q[x(0x161)] = sequelize_1[y(0x165)][x(0x179)], q[y(0x181)] = ![];
        const r = {};
        r[x(0x161)] = sequelize_1[x(0x165)][x(0x179)], r[y(0x181)] = ![];
        const s = {};
        return s['id'] = m, s[y(0x173)] = n, s[y(0x177)] = p, s[y(0x180)] = q, s[x(0x167)] = r, j[x(0x16f) + 'e'](l[y(0x16d)], s);
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x174)] = A(0x17b) + A(0x166);
        const f = e;
        return d[A(0x16a)](f[A(0x174)]);
    }
};