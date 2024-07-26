'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x74a * 0x1 + -0x21d + 0xaec);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'restrict',
        '167582jnFIne',
        'Queues',
        'vFFgk',
        'defaultVal',
        'allowNull',
        'YWLjk',
        'exports',
        'CASCADE',
        'INTEGER',
        '1143380vsWQof',
        'sequelize',
        'Tickets',
        'ciiWW',
        'defineProp',
        'yRRkq',
        '18ZGYROF',
        'type',
        'queueId',
        '107048tnWYEt',
        '982152ambswg',
        '638659cZXfTX',
        '9985723gwbUmd',
        '2297950raJEiH',
        'addColumn',
        'YARTp',
        '6cCEgzc',
        'queue',
        'DataTypes',
        'jDneU',
        'HfSlQ',
        '3MwGjAy',
        'erty',
        '1CKcDgf',
        'VltqN',
        'HnjLb',
        '__esModule',
        'value',
        'removeColu'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0x1ab)) / (0x2322 + 0x265f + 0xc40 * -0x6) * (-parseInt(k(0x18b)) / (-0x2568 + -0x2 * 0xaf + 0x26c8)) + parseInt(j(0x1a9)) / (0x23b5 + 0x1a89 + -0x3e3b * 0x1) * (-parseInt(j(0x19e)) / (0x23ec + -0x545 + 0x17 * -0x155)) + -parseInt(k(0x1a1)) / (0x4 * 0x40d + -0x1 * -0x553 + -0x2 * 0xac1) + -parseInt(k(0x1a4)) / (-0xc51 + 0xa03 * 0x1 + -0x4 * -0x95) * (-parseInt(k(0x19f)) / (-0x67e * 0x2 + 0x13bf + -0x6bc)) + -parseInt(k(0x19d)) / (-0x66e + -0x1287 + 0x18fd) * (parseInt(k(0x19a)) / (-0x7fb + 0x20d0 + 0x17 * -0x114)) + -parseInt(j(0x194)) / (0x1dc9 + -0x982 * -0x2 + -0x39 * 0xdb) + parseInt(k(0x1a0)) / (0x16a5 + -0x3 * -0x9e + -0x1874);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x5219 * 0x4 + 0x36ae2 + -0xf * 0x129b));
const c = {};
c[l(0x188)] = !![], Object[m(0x198) + l(0x1aa)](exports, l(0x187), c);
const sequelize_1 = require(l(0x195));
module[l(0x191)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0x1a8)] = n(0x196), f[o(0x18d)] = o(0x1a5), f[o(0x190)] = o(0x19c), f[n(0x185)] = o(0x18c), f[o(0x199)] = o(0x192), f[o(0x1a3)] = n(0x18a);
        const g = f;
        await e[n(0x189) + 'mn'](g[n(0x1a8)], g[n(0x18d)]), await e[o(0x1a2)](g[o(0x1a8)], g[n(0x190)], {
            'type': sequelize_1[n(0x1a6)][n(0x193)],
            'references': {
                'model': g[o(0x185)],
                'key': 'id'
            },
            'onUpdate': g[n(0x199)],
            'onDelete': g[n(0x1a3)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = m, g = {};
        g[p(0x186)] = q(0x196), g[q(0x197)] = p(0x19c), g[p(0x1a7)] = p(0x1a5);
        const h = g;
        await f[p(0x189) + 'mn'](h[q(0x186)], h[p(0x197)]);
        const i = {};
        i[q(0x19b)] = sequelize_1[p(0x1a6)][p(0x193)], i[q(0x18e) + 'ue'] = null, i[p(0x18f)] = !![], await f[q(0x1a2)](h[q(0x186)], h[q(0x1a7)], i);
    }
};