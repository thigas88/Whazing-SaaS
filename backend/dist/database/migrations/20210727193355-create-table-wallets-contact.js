'use strict';
function a() {
    const z = [
        '8AVVekV',
        '565047ouRtoQ',
        'DataTypes',
        'INTEGER',
        'primaryKey',
        'LSzCI',
        'dxsGn',
        'DATE',
        'type',
        'erty',
        'EfCLO',
        'autoIncrem',
        '622053gZrxpl',
        'exports',
        'value',
        '__esModule',
        '659886vYedvg',
        'dropTable',
        'Contacts',
        '18007FbrcPr',
        'ent',
        'Tenants',
        '6920KWwqzy',
        'IfFBi',
        '2170UzZTdj',
        '124382DANStg',
        'createTabl',
        'Users',
        'ContactWal',
        'CASCADE',
        '3wSWcCt',
        'sequelize',
        'allowNull',
        'QQDXK',
        'LSaxB',
        '40280QFncNr',
        '726FPlCoa',
        'lets',
        'defineProp'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x201)) / (0x2 * 0xb6b + -0x139 * 0x1f + -0xf12 * -0x1) * (-parseInt(r(0x1fc)) / (0xbb1 + -0x1 * 0x557 + -0x658)) + -parseInt(s(0x1f3)) / (0x2 * 0x102b + 0x191 * 0xa + -0x2ffd) + parseInt(r(0x206)) / (-0x965 + 0x1 * -0x262b + 0x2f94) + parseInt(s(0x1f9)) / (0x6 * 0x527 + -0x1 * 0x1a2d + -0x4b8) * (parseInt(r(0x207)) / (0x2 * -0x10db + 0x43 * 0x9 + 0x1f61 * 0x1)) + -parseInt(r(0x20b)) / (-0xfd5 + -0x2d3 + 0x1 * 0x12af) * (parseInt(r(0x20a)) / (0x10a6 + 0x1 * 0x1ebd + -0x2f5b)) + parseInt(s(0x1ef)) / (0x1 * 0x1dbd + -0x3ac + -0x1a08) + -parseInt(r(0x1fb)) / (-0x24d + -0x417 * 0x3 + -0xb * -0x154) * (-parseInt(r(0x1f6)) / (-0x17b7 + -0x196a + 0x312c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe14a * 0x2 + -0x3 * 0x123ed + 0x368f3));
const q = {};
q[t(0x1f1)] = !![], Object[u(0x209) + u(0x213)](exports, t(0x1f2), q);
const sequelize_1 = require(u(0x202));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb2d + -0xe06 + 0x17 * 0x12e);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0x1f0)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x205)] = w(0x1ff) + w(0x208), f[v(0x214)] = w(0x1fe), f[v(0x1fa)] = w(0x200), f[v(0x20f)] = v(0x1f5), f[v(0x210)] = v(0x1f8);
        const g = f, h = {};
        return h[v(0x212)] = sequelize_1[w(0x20c)][w(0x20d)], h[v(0x215) + v(0x1f7)] = !![], h[v(0x20e)] = !![], h[w(0x203)] = ![], e[w(0x1fd) + 'e'](g[w(0x205)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x20c)][w(0x20d)],
                'references': {
                    'model': g[w(0x214)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1fa)],
                'onDelete': g[v(0x1fa)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x20c)][w(0x20d)],
                'references': {
                    'model': g[v(0x20f)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1fa)],
                'onDelete': g[v(0x1fa)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x20c)][v(0x20d)],
                'references': {
                    'model': g[w(0x210)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1fa)],
                'onDelete': g[w(0x1fa)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x20c)][w(0x211)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x20c)][w(0x211)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x204)] = x(0x1ff) + y(0x208);
        const f = e;
        return d[x(0x1f4)](f[x(0x204)]);
    }
};