'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0xcb)) / (-0x44e * 0x1 + 0xb3 * -0x8 + 0x9e7) * (-parseInt(F(0xc6)) / (0x1 * 0x1f9d + 0x14df * -0x1 + -0xabc)) + parseInt(F(0xc4)) / (0x3c3 + -0x119b + 0xddb) * (parseInt(G(0xb0)) / (-0xc1d * -0x3 + 0xe52 + -0x5 * 0xa21)) + -parseInt(G(0xb8)) / (-0x207a * 0x1 + -0xe0d + -0x2 * -0x1746) * (parseInt(G(0xad)) / (-0x2053 + 0x210e + -0xb5)) + -parseInt(G(0xbc)) / (0x1256 + 0x29 * -0xf1 + -0xa25 * -0x2) + parseInt(F(0xca)) / (-0x1bfe + 0x768 * 0x3 + 0x5ce) + parseInt(G(0xaf)) / (-0xc3d + 0x9b7 + 0x28f) + parseInt(F(0xa6)) / (0x35 + 0x1ae + -0x1d9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15 * 0xd413 + 0x10e9 * 0xee + 0x36 * -0x572a));
const E = {};
E[H(0xb2)] = !![], Object[H(0xb3) + I(0xb1)](exports, H(0xb5), E);
const sequelize_1 = require(I(0xc5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19d * -0xc + 0x23e6 + -0xfe4);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        'dropTable',
        '4687779qEyqDH',
        'sequelize',
        '2eSQuJT',
        'arLwx',
        'defaultVal',
        'GhsaY',
        '3115056rHgTjP',
        '429813xJGzba',
        'allowNull',
        'primaryKey',
        '19623260HmIKmT',
        'CampaignCo',
        'STRING',
        'ent',
        'MQHog',
        'Campaigns',
        'DataTypes',
        '18nutyWd',
        'all',
        '386739ZlLOfP',
        '4ntlaGT',
        'erty',
        'value',
        'defineProp',
        'TEXT',
        '__esModule',
        'OPLTc',
        'exports',
        '1733775Wpaqmd',
        'type',
        'IMrVP',
        'DATE',
        '10652159VvuJEE',
        'createTabl',
        'ntacts',
        'autoIncrem',
        'INTEGER',
        'Contacts',
        'CASCADE'
    ];
    a = function () {
        return N;
    };
    return a();
}
module[H(0xb7)] = {
    'up': l => {
        const J = I, K = H, m = {};
        m[J(0xc7)] = J(0xa7) + J(0xbe), m[J(0xba)] = J(0xc1), m[K(0xc9)] = J(0xc2), m[K(0xaa)] = J(0xab);
        const n = m, o = {};
        o[J(0xb9)] = sequelize_1[J(0xac)][J(0xc0)], o[K(0xcd)] = !![], o[J(0xbf) + K(0xa9)] = !![], o[J(0xcc)] = ![];
        const p = {};
        p[J(0xb9)] = sequelize_1[J(0xac)][K(0xa8)], p[J(0xcc)] = ![];
        const q = {};
        q[K(0xb9)] = sequelize_1[K(0xac)][K(0xb4)], q[J(0xcc)] = !![], q[K(0xc8) + 'ue'] = null;
        const r = {};
        r[J(0xb9)] = sequelize_1[K(0xac)][J(0xa8)], r[J(0xcc)] = !![], r[K(0xc8) + 'ue'] = null;
        const s = {};
        s[K(0xb9)] = sequelize_1[K(0xac)][J(0xa8)], s[J(0xcc)] = !![], s[J(0xc8) + 'ue'] = null;
        const t = {};
        t[J(0xb9)] = sequelize_1[K(0xac)][K(0xa8)], t[J(0xcc)] = !![], t[K(0xc8) + 'ue'] = null;
        const u = {};
        u[J(0xb9)] = sequelize_1[K(0xac)][J(0xc0)], u[J(0xcc)] = ![], u[K(0xc8) + 'ue'] = 0x0;
        const v = {};
        return v[K(0xb9)] = sequelize_1[K(0xac)][K(0xc0)], v[K(0xcc)] = !![], v[J(0xc8) + 'ue'] = null, Promise[J(0xae)]([l[J(0xbd) + 'e'](n[K(0xc7)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[K(0xac)][K(0xc0)],
                    'references': {
                        'model': n[J(0xba)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0xc9)],
                    'onDelete': n[J(0xc9)]
                },
                'campaignId': {
                    'type': sequelize_1[J(0xac)][J(0xc0)],
                    'references': {
                        'model': n[K(0xaa)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0xc9)],
                    'onDelete': n[K(0xc9)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[J(0xac)][K(0xbb)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0xac)][K(0xbb)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = I, e = {};
        e[L(0xb6)] = L(0xa7) + L(0xbe);
        const f = e;
        return Promise[L(0xae)]([d[M(0xc3)](f[L(0xb6)])]);
    }
};