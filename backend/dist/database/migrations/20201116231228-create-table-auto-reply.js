'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x152)) / (0x1 * 0x2ef + -0x4b1 * 0x5 + 0x41b * 0x5) + parseInt(t(0x14c)) / (-0x191f + -0x789 + 0x20aa) * (parseInt(t(0x14e)) / (0x2595 * 0x1 + -0x1406 + 0x1 * -0x118c)) + parseInt(t(0x155)) / (-0x75a + -0x2446 + 0x2ba4) + parseInt(u(0x14d)) / (0x5ee + -0xb93 + 0x5 * 0x122) * (parseInt(u(0x163)) / (0x17 * 0xdc + 0x66d + -0x1a2b)) + -parseInt(u(0x162)) / (-0x1044 + -0xb47 * 0x1 + -0x2 * -0xdc9) * (-parseInt(t(0x153)) / (-0x568 * -0x7 + 0x617 * -0x6 + -0xa3 * 0x2)) + -parseInt(u(0x165)) / (0xd * 0x2fc + 0x1f89 + 0x2326 * -0x2) * (parseInt(u(0x15b)) / (0x1a68 + 0x2029 + 0x3a87 * -0x1)) + parseInt(u(0x15e)) / (0x37a + -0x7 * 0x2f5 + 0x5 * 0x374) * (-parseInt(t(0x160)) / (0x1f3c * 0x1 + 0x7be + -0x26ee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2d88d * 0x2 + 0x2bd * -0x2f5 + 0x1263b7));
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1048 + 0x9 * -0x2eb + 0x2bd5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'AutoReply',
        '66RAndpI',
        'primaryKey',
        '1542228BUYJyk',
        'tMjZj',
        '217EjwmXd',
        '12DLeMLW',
        'erty',
        '117648zuwiVi',
        'createTabl',
        'LTFnD',
        'JDkiV',
        'szKGt',
        'defineProp',
        'DATE',
        'value',
        'DataTypes',
        'Users',
        'defaultVal',
        'UnaEg',
        'CASCADE',
        'INTEGER',
        '14HTDpNa',
        '822565TfboSc',
        '129039GgiyWp',
        'allowNull',
        'dropTable',
        'STRING',
        '522336BSwehF',
        '20112Rvtdgn',
        'autoIncrem',
        '1512716AsvXyO',
        'ent',
        'type',
        'exports',
        'sequelize',
        'SET\x20NULL',
        '410gUJrMW',
        '__esModule'
    ];
    a = function () {
        return B;
    };
    return a();
}
s[v(0x16c)] = !![], Object[v(0x16a) + w(0x164)](exports, v(0x15c), s);
const sequelize_1 = require(w(0x159));
module[v(0x158)] = {
    'up': h => {
        const x = v, y = w, i = {};
        i[x(0x168)] = x(0x15d), i[y(0x167)] = x(0x16e), i[y(0x169)] = x(0x14a), i[x(0x170)] = x(0x15a);
        const j = i, k = {};
        k[x(0x157)] = sequelize_1[x(0x16d)][x(0x14b)], k[x(0x154) + y(0x156)] = !![], k[x(0x15f)] = !![], k[x(0x14f)] = ![];
        const l = {};
        l[x(0x157)] = sequelize_1[x(0x16d)][x(0x151)], l[y(0x14f)] = ![];
        const m = {};
        m[x(0x157)] = sequelize_1[y(0x16d)][y(0x151)], m[y(0x14f)] = ![];
        const n = {};
        return n[y(0x157)] = sequelize_1[x(0x16d)][x(0x14b)], n[y(0x14f)] = ![], n[x(0x16f) + 'ue'] = 0x0, h[x(0x166) + 'e'](j[y(0x168)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x16d)][x(0x14b)],
                'references': {
                    'model': j[y(0x167)],
                    'key': 'id'
                },
                'onUpdate': j[y(0x169)],
                'onDelete': j[x(0x170)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x16d)][y(0x16b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x16d)][y(0x16b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0x161)] = z(0x15d);
        const f = e;
        return d[A(0x150)](f[A(0x161)]);
    }
};