'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0xfb)) / (-0x1149 + -0x92 * 0x26 + 0x137b * 0x2) + parseInt(F(0x110)) / (-0x2412 + -0x4 * -0x16b + 0x1e68) + -parseInt(G(0x102)) / (0x283 + -0x1c32 + 0x19b2) + -parseInt(G(0x105)) / (-0x6b6 + 0x1 * -0xd52 + -0x140c * -0x1) + parseInt(G(0x115)) / (0x31 * 0x1 + -0x83 * 0x3 + 0x1 * 0x15d) * (-parseInt(F(0x109)) / (-0xf64 + -0xef1 + 0x1e5b)) + parseInt(F(0x104)) / (-0x60d * -0x1 + 0x1 * -0x994 + 0x38e) + parseInt(F(0x101)) / (0x1bd2 + 0x1 * -0xa9f + -0x3 * 0x5b9) * (-parseInt(F(0x119)) / (0x1 * -0x122b + -0x4 * -0x6bc + -0x8bc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc981c + 0x2c * 0x255b + 0x1 * -0xadf7c));
function a() {
    const N = [
        '4236786Pqwtmc',
        'TEXT',
        'sequelize',
        'CASCADE',
        'DataTypes',
        'CampaignCo',
        'EJqoW',
        'allowNull',
        'all',
        '1019678sqdIQv',
        'ent',
        'DATE',
        '__esModule',
        'value',
        'INTEGER',
        '16trwUuE',
        '310278TNuKQr',
        'exports',
        '2371754MFoobZ',
        '1280284kzuIuz',
        'autoIncrem',
        'primaryKey',
        'VShlG',
        '6PqtBQH',
        'LiUnN',
        'type',
        'Campaigns',
        'STRING',
        'defineProp',
        'erty',
        '1913352UiFgfF',
        'cQAtV',
        'xzNJt',
        'defaultVal',
        'ntacts',
        '2082995aOyxHn',
        'dropTable',
        'createTabl',
        'Contacts'
    ];
    a = function () {
        return N;
    };
    return a();
}
const E = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x120f + -0x5 * 0x267 + 0x2 * 0xf85);
        let h = e[f];
        return h;
    }, b(c, d);
}
E[H(0xff)] = !![], Object[H(0x10e) + I(0x10f)](exports, I(0xfe), E);
const sequelize_1 = require(H(0x11b));
module[I(0x103)] = {
    'up': l => {
        const J = H, K = I, m = {};
        m[J(0x112)] = J(0x11e) + K(0x114), m[K(0xf8)] = J(0x118), m[J(0x108)] = K(0x11c), m[J(0x10a)] = K(0x10c);
        const n = m, o = {};
        o[K(0x10b)] = sequelize_1[K(0x11d)][J(0x100)], o[J(0x107)] = !![], o[K(0x106) + J(0xfc)] = !![], o[J(0xf9)] = ![];
        const p = {};
        p[K(0x10b)] = sequelize_1[K(0x11d)][K(0x10d)], p[J(0xf9)] = ![];
        const q = {};
        q[K(0x10b)] = sequelize_1[J(0x11d)][K(0x11a)], q[K(0xf9)] = !![], q[J(0x113) + 'ue'] = null;
        const r = {};
        r[J(0x10b)] = sequelize_1[K(0x11d)][K(0x10d)], r[J(0xf9)] = !![], r[J(0x113) + 'ue'] = null;
        const s = {};
        s[K(0x10b)] = sequelize_1[K(0x11d)][K(0x10d)], s[J(0xf9)] = !![], s[J(0x113) + 'ue'] = null;
        const t = {};
        t[J(0x10b)] = sequelize_1[K(0x11d)][J(0x10d)], t[K(0xf9)] = !![], t[J(0x113) + 'ue'] = null;
        const u = {};
        u[J(0x10b)] = sequelize_1[J(0x11d)][K(0x100)], u[K(0xf9)] = ![], u[K(0x113) + 'ue'] = 0x0;
        const v = {};
        return v[K(0x10b)] = sequelize_1[K(0x11d)][J(0x100)], v[J(0xf9)] = !![], v[K(0x113) + 'ue'] = null, Promise[K(0xfa)]([l[J(0x117) + 'e'](n[J(0x112)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[J(0x11d)][K(0x100)],
                    'references': {
                        'model': n[J(0xf8)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x108)],
                    'onDelete': n[K(0x108)]
                },
                'campaignId': {
                    'type': sequelize_1[J(0x11d)][K(0x100)],
                    'references': {
                        'model': n[J(0x10a)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x108)],
                    'onDelete': n[J(0x108)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[K(0x11d)][K(0xfd)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x11d)][J(0xfd)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = I, e = {};
        e[L(0x111)] = M(0x11e) + M(0x114);
        const f = e;
        return Promise[L(0xfa)]([d[L(0x116)](f[L(0x111)])]);
    }
};