'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1072 + -0x1a06 * -0x1 + -0x1 * 0x290b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x191)) / (-0x2 * -0x805 + -0x26bc + 0xd * 0x1bf) * (-parseInt(z(0x17f)) / (0x1fb3 + -0xa6f + 0x1 * -0x1542)) + parseInt(A(0x176)) / (-0x17 * -0x1 + -0x1b6f + 0x1b5b) + parseInt(z(0x17d)) / (0x1 * 0x269f + -0x3 * -0x4a3 + 0x4 * -0xd21) * (parseInt(z(0x17e)) / (-0x940 + 0xf89 + -0x644)) + parseInt(z(0x18b)) / (0x1 * 0x1f4 + 0x9d * 0x5 + 0x1 * -0x4ff) + -parseInt(z(0x190)) / (-0x1f21 + 0x12fa + 0xc2e) * (-parseInt(z(0x18d)) / (-0x2698 + -0x8 * -0x1e2 + 0xd * 0x1d0)) + parseInt(A(0x18e)) / (-0x1790 + -0x4 * 0x239 + 0x207d) * (parseInt(A(0x196)) / (-0x55 * -0x23 + 0x1a63 + 0x12 * -0x21c)) + -parseInt(z(0x181)) / (-0x2 * 0xea7 + 0x49b * 0x1 + -0x1 * -0x18be);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c5fa + 0x77 * 0x2de + 0x4cf3f * 0x1));
function a() {
    const H = [
        'name',
        'stQnO',
        'primaryKey',
        'type',
        '__esModule',
        '828304ncdRyz',
        '5eGapyA',
        '12saLtya',
        'allowNull',
        '11778767TsrOZs',
        'exports',
        'Plans',
        'unique',
        'INTEGER',
        'DataTypes',
        'lUXGk',
        'defineProp',
        'updatedAt',
        'STRING',
        '1733112ulNkQm',
        'defaultVal',
        '281848qBsIFY',
        '27XBLuVk',
        'sequelize',
        '42STWUio',
        '39709DDuXUQ',
        'isPublic',
        'autoIncrem',
        'createdAt',
        'ent',
        '811010RmgnHt',
        'DATE',
        'createTabl',
        'value',
        'ions',
        'BOOLEAN',
        'maxUsers',
        'FLOAT',
        'dropTable',
        'erty',
        '504759LHqUCJ',
        'maxConnect'
    ];
    a = function () {
        return H;
    };
    return a();
}
const u = {};
u[B(0x16f)] = !![], Object[B(0x188) + B(0x175)](exports, C(0x17c), u);
const sequelize_1 = require(C(0x18f));
module[B(0x182)] = {
    'up': m => {
        const D = C, E = C, n = {};
        n[D(0x187)] = E(0x183);
        const o = n, p = {};
        p[E(0x17b)] = sequelize_1[D(0x186)][D(0x185)], p[E(0x193) + E(0x195)] = !![], p[E(0x17a)] = !![], p[D(0x180)] = ![];
        const q = {};
        q[D(0x17b)] = sequelize_1[D(0x186)][D(0x18a)], q[E(0x180)] = ![], q[E(0x184)] = !![];
        const r = {};
        r[E(0x17b)] = sequelize_1[D(0x186)][D(0x185)], r[E(0x18c) + 'ue'] = 0x0;
        const s = {};
        s[E(0x17b)] = sequelize_1[D(0x186)][D(0x185)], s[D(0x18c) + 'ue'] = 0x0;
        const t = {};
        t[E(0x17b)] = sequelize_1[D(0x186)][D(0x16d)], t[D(0x180)] = ![];
        const v = {};
        v[E(0x17b)] = sequelize_1[D(0x186)][D(0x16d)], v[D(0x180)] = ![];
        const w = {};
        w[D(0x17b)] = sequelize_1[D(0x186)][D(0x173)], w[D(0x180)] = !![];
        const x = {};
        x[D(0x17b)] = sequelize_1[D(0x186)][D(0x171)], x[D(0x18c) + 'ue'] = !![], x[E(0x180)] = ![];
        const y = {};
        return y['id'] = p, y[D(0x178)] = q, y[D(0x172)] = r, y[D(0x177) + D(0x170)] = s, y[D(0x194)] = t, y[D(0x189)] = v, y[E(0x16f)] = w, y[E(0x192)] = x, m[E(0x16e) + 'e'](o[D(0x187)], y);
    },
    'down': d => {
        const F = C, G = B, e = {};
        e[F(0x179)] = G(0x183);
        const f = e;
        return d[F(0x174)](f[G(0x179)]);
    }
};