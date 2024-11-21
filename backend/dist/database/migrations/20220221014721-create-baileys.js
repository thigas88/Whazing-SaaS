'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x81d + 0x2472 + -0x2b75);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x139)) / (0xa70 + 0x2 * -0x599 + -0xd * -0xf) * (-parseInt(v(0x123)) / (-0x1768 + -0x171c + 0x2e86)) + parseInt(v(0x131)) / (-0x1613 + -0xba * -0x27 + -0x14 * 0x50) + -parseInt(v(0x127)) / (-0x193d + 0x1cd4 + -0x393) * (-parseInt(v(0x120)) / (0x1 * -0x1ec7 + 0x2 * 0x7d3 + 0xf26 * 0x1)) + parseInt(w(0x12a)) / (0x23c7 + 0x7d2 + -0x8b7 * 0x5) * (parseInt(v(0x137)) / (-0x633 + -0x1b13 * 0x1 + 0x214d)) + parseInt(v(0x13a)) / (0xb2a + -0x3d * -0x8f + -0x2d35) * (-parseInt(v(0x11e)) / (-0x3 * -0xb75 + 0x1a9 * 0x3 + -0x131 * 0x21)) + -parseInt(w(0x133)) / (-0x2543 * -0x1 + -0x64f * -0x1 + -0x2b88) + parseInt(v(0x11d)) / (0x1c32 + -0x1d07 + 0xe0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39682 + -0x2b * 0x2a92 + -0x104248 * -0x1));
function a() {
    const D = [
        '__esModule',
        'type',
        'DataTypes',
        'createTabl',
        'primaryKey',
        'exports',
        '881544jKCwHU',
        'updatedAt',
        '5560410SJVWEv',
        'QJJRu',
        'value',
        'dropTable',
        '7GuUizv',
        'TEXT',
        '68857OPulXh',
        '419744AgJXqC',
        'erty',
        'whatsappId',
        'createdAt',
        'INTEGER',
        'chats',
        'allowNull',
        '1241614DEoedn',
        '36cyLUAk',
        'Baileys',
        '2204120JXKCsu',
        'autoIncrem',
        'sequelize',
        '6xuEuXj',
        'contacts',
        'xOPzc',
        'DATE',
        '4pKPhic',
        'ent',
        'defineProp',
        '441528iXpVHE'
    ];
    a = function () {
        return D;
    };
    return a();
}
const q = {};
q[x(0x135)] = !![], Object[y(0x129) + y(0x13b)](exports, y(0x12b), q);
const sequelize_1 = require(y(0x122));
module[x(0x130)] = {
    'up': k => {
        const z = x, A = y, l = {};
        l[z(0x125)] = A(0x11f);
        const m = l, n = {};
        n[z(0x12c)] = sequelize_1[z(0x12d)][A(0x11a)], n[z(0x121) + z(0x128)] = !![], n[A(0x12f)] = !![], n[A(0x11c)] = ![];
        const o = {};
        o[A(0x12c)] = sequelize_1[A(0x12d)][A(0x11a)], o[z(0x12f)] = !![];
        const p = {};
        p[z(0x12c)] = sequelize_1[A(0x12d)][A(0x138)], p[z(0x11c)] = !![];
        const r = {};
        r[z(0x12c)] = sequelize_1[A(0x12d)][z(0x138)], r[z(0x11c)] = !![];
        const s = {};
        s[A(0x12c)] = sequelize_1[z(0x12d)][A(0x126)], s[z(0x11c)] = ![];
        const t = {};
        t[A(0x12c)] = sequelize_1[A(0x12d)][z(0x126)], t[z(0x11c)] = ![];
        const u = {};
        return u['id'] = n, u[z(0x13c)] = o, u[A(0x124)] = p, u[z(0x11b)] = r, u[A(0x13d)] = s, u[A(0x132)] = t, k[z(0x12e) + 'e'](m[A(0x125)], u);
    },
    'down': d => {
        const B = y, C = y, e = {};
        e[B(0x134)] = B(0x11f);
        const f = e;
        return d[B(0x136)](f[B(0x134)]);
    }
};