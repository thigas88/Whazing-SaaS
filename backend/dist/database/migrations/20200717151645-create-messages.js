'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1c6)) / (-0xbd2 + 0x1e42 + -0x126f) + -parseInt(A(0x1a9)) / (0xd * -0x61 + 0x3 * 0x7c9 + -0x126c) + parseInt(A(0x1b3)) / (0x834 + 0x177a + 0x43 * -0x79) + -parseInt(A(0x1b0)) / (-0x1 * 0x122 + -0x222c + 0x2352) + -parseInt(A(0x1c2)) / (-0xe * -0x14d + -0x1447 + 0x216) * (-parseInt(A(0x1af)) / (-0x89b + -0x31a + 0xb * 0x111)) + -parseInt(A(0x1bf)) / (0xad5 + 0x33b * 0x4 + -0x17ba) + parseInt(A(0x1c9)) / (-0xc12 + 0x11b3 + -0x599);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb40d3 + -0x4d07e + 0x68b40));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ecf + -0x8f7 + 0x296f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
function a() {
    const H = [
        'INTEGER',
        'STRING',
        'Tickets',
        'dropTable',
        'exports',
        '__esModule',
        'BOOLEAN',
        'defineProp',
        'createTabl',
        'TEXT',
        '11627371GJhrZi',
        'defaultVal',
        'allowNull',
        '5Hqyghj',
        'erty',
        'ansIL',
        'Messages',
        '646118TmCwJR',
        'sequelize',
        'type',
        '29666848yzHrvB',
        'uyMot',
        'CdmtH',
        'primaryKey',
        'wSjns',
        '1825912JVIWPX',
        'tiEfv',
        'value',
        'DataTypes',
        'Users',
        'DATE',
        '9759324giGxTm',
        '5353564pcjUds',
        'SET\x20NULL',
        'CASCADE',
        '223335dDyxdZ',
        'BBtTL'
    ];
    a = function () {
        return H;
    };
    return a();
}
y[B(0x1ab)] = !![], Object[B(0x1bc) + B(0x1c3)](exports, C(0x1ba), y);
const sequelize_1 = require(B(0x1c7));
module[C(0x1b9)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x1b4)] = D(0x1c5), k[D(0x1ca)] = E(0x1ad), k[D(0x1cb)] = D(0x1b2), k[E(0x1cd)] = E(0x1b1), k[D(0x1aa)] = D(0x1b7);
        const l = k, m = {};
        m[D(0x1c8)] = sequelize_1[D(0x1ac)][E(0x1b6)], m[E(0x1cc)] = !![], m[D(0x1c1)] = ![];
        const n = {};
        n[D(0x1c8)] = sequelize_1[E(0x1ac)][D(0x1be)], n[E(0x1c1)] = ![];
        const o = {};
        o[E(0x1c8)] = sequelize_1[D(0x1ac)][D(0x1b5)], o[E(0x1c1)] = ![], o[D(0x1c0) + 'ue'] = 0x0;
        const p = {};
        p[E(0x1c8)] = sequelize_1[D(0x1ac)][E(0x1bb)], p[E(0x1c1)] = ![], p[E(0x1c0) + 'ue'] = ![];
        const q = {};
        q[D(0x1c8)] = sequelize_1[E(0x1ac)][E(0x1b6)];
        const r = {};
        return r[E(0x1c8)] = sequelize_1[E(0x1ac)][E(0x1b6)], j[D(0x1bd) + 'e'](l[D(0x1b4)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0x1ac)][E(0x1b5)],
                'references': {
                    'model': l[D(0x1ca)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1cb)],
                'onDelete': l[E(0x1cd)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x1ac)][E(0x1b5)],
                'references': {
                    'model': l[D(0x1aa)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1cb)],
                'onDelete': l[D(0x1cb)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0x1ac)][E(0x1ae)](-0xd80 + 0x8bb + 0x4cb),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x1ac)][E(0x1ae)](-0x6c3 + 0x7 * -0x47 + 0x8ba),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0x1c4)] = G(0x1c5);
        const f = e;
        return d[F(0x1b8)](f[G(0x1c4)]);
    }
};