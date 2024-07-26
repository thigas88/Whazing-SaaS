'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d5)) / (-0x44b + -0xd * -0x12d + 0xafd * -0x1) + -parseInt(q(0x1e0)) / (-0x1bc4 + 0x1 * 0x25fd + -0x1 * 0xa37) * (-parseInt(p(0x1ec)) / (-0x15ff + -0x24fa + 0x3afc)) + parseInt(q(0x1e4)) / (0x23ab * 0x1 + -0x2297 + -0x110) * (-parseInt(q(0x1ed)) / (0xd * -0x5 + -0x335 * 0x4 + 0xd1a)) + -parseInt(q(0x1e9)) / (0x1fc9 + 0xc85 + -0x8 * 0x589) * (-parseInt(q(0x1ee)) / (0x59e + 0x1ad + -0x744)) + parseInt(p(0x1dc)) / (-0x62 * -0x25 + 0x1163 * 0x1 + 0x1 * -0x1f85) * (parseInt(q(0x1d9)) / (0x127b + 0x593 + -0x1805)) + parseInt(p(0x1de)) / (0x6 * -0x442 + 0x243a + -0xaa4) + -parseInt(q(0x1ce)) / (-0x47 * 0x3 + -0x1 * -0xdc4 + -0x294 * 0x5) * (parseInt(p(0x1d7)) / (0x16e6 + -0x2609 + 0xf2f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x119 * -0x80 + 0x13 * -0xa4 + 0x54910));
const o = {};
function a() {
    const x = [
        'PXsIZ',
        'ent',
        'hCYoz',
        '1899162FBuJhf',
        'autoIncrem',
        'allowNull',
        '1559301ZrKFbc',
        '121895lqDtZq',
        '7HokqmY',
        'Users',
        'DATE',
        'dropTable',
        'sequelize',
        '187dXVHDR',
        'EPtRz',
        'type',
        'exports',
        'DataTypes',
        'Queues',
        '__esModule',
        '313501jhMsTc',
        'oRVoY',
        '786696mbQqxD',
        'defineProp',
        '21699MZDIGQ',
        'value',
        'UsersQueue',
        '656qFxQEg',
        'erty',
        '1949830NKXRnc',
        'ZeeKk',
        '2emmjEN',
        'createTabl',
        'primaryKey',
        'CASCADE',
        '8DvFITQ',
        'INTEGER'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x76 + 0x209d + -0x1d6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x1da)] = !![], Object[r(0x1d8) + s(0x1dd)](exports, r(0x1d4), o);
const sequelize_1 = require(r(0x1f2));
module[r(0x1d1)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1df)] = u(0x1db) + 's', f[u(0x1d6)] = t(0x1d3), f[u(0x1e6)] = t(0x1e3), f[u(0x1e8)] = t(0x1ef);
        const g = f, h = {};
        return h[t(0x1d0)] = sequelize_1[u(0x1d2)][t(0x1e5)], h[t(0x1e2)] = !![], h[t(0x1ea) + t(0x1e7)] = !![], h[u(0x1eb)] = ![], e[t(0x1e1) + 'e'](g[u(0x1df)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0x1d2)][u(0x1e5)],
                'references': {
                    'model': g[t(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1e6)],
                'onDelete': g[u(0x1e6)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x1d2)][t(0x1e5)],
                'references': {
                    'model': g[u(0x1e8)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x1e6)],
                'onDelete': g[u(0x1e6)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1d2)][t(0x1f0)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1d2)][u(0x1f0)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x1cf)] = w(0x1db) + 's';
        const f = e;
        return d[w(0x1f1)](f[v(0x1cf)]);
    }
};