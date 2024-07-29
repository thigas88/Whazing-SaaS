'use strict';
function a() {
    const N = [
        'erty',
        'DiGVZ',
        'CampaignCo',
        'INTEGER',
        'RDRnH',
        'mHNdr',
        '275580KLPmdU',
        '13919103xHrElN',
        'defaultVal',
        'ent',
        'autoIncrem',
        'oKvWM',
        'dropTable',
        'TEXT',
        'CASCADE',
        'DATE',
        'sequelize',
        'vSnQi',
        '388YjtUkn',
        'defineProp',
        '326408BBwmHE',
        'createTabl',
        '266699FWbtju',
        '143950JASbuj',
        'Contacts',
        'all',
        '4377vXVFgN',
        '__esModule',
        'exports',
        'ntacts',
        'value',
        'Campaigns',
        'primaryKey',
        'type',
        '7cZOhaL',
        '225eQSOoH',
        'STRING',
        '2640075njfmyc',
        'allowNull',
        '4cAvaJd',
        'DataTypes'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x159)) / (0xcc2 + -0x16dc + 0xd * 0xc7) * (-parseInt(F(0x141)) / (0x1 * -0xa9e + -0xd0 * 0x8 + 0x112 * 0x10)) + -parseInt(G(0x15d)) / (0x865 * -0x2 + 0x180b * -0x1 + 0x28d8) * (-parseInt(F(0x155)) / (-0x2 * -0x100d + 0x2d0 + -0x22e6)) + parseInt(G(0x13f)) / (0x39f * 0x7 + -0x1992 + 0x3e) + -parseInt(F(0x149)) / (0x266c + -0x2f8 * 0x9 + 0x12b * -0xa) + parseInt(F(0x13c)) / (0x1e6f + 0x11ee + 0x2e * -0x10d) * (parseInt(F(0x157)) / (0x1 * 0x536 + 0xd4f * -0x1 + -0x821 * -0x1)) + -parseInt(F(0x13d)) / (-0x3fd * 0x1 + 0x297 + 0x1 * 0x16f) * (-parseInt(G(0x15a)) / (-0x3 * 0x396 + 0x10e3 + -0x617 * 0x1)) + -parseInt(G(0x14a)) / (-0x1156 + 0x1 * 0x2563 + -0x1402);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5c9bc + -0x5ba52 + 0x4666b));
const E = {};
E[H(0x138)] = !![], Object[H(0x156) + I(0x143)](exports, H(0x135), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22 * 0xb + -0x24a * 0x2 + -0x109 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(I(0x153));
module[I(0x136)] = {
    'up': l => {
        const J = H, K = I, m = {};
        m[J(0x14e)] = J(0x145) + K(0x137), m[J(0x147)] = J(0x15b), m[K(0x144)] = J(0x151), m[K(0x148)] = J(0x139);
        const n = m, o = {};
        o[K(0x13b)] = sequelize_1[J(0x142)][J(0x146)], o[K(0x13a)] = !![], o[J(0x14d) + J(0x14c)] = !![], o[K(0x140)] = ![];
        const p = {};
        p[J(0x13b)] = sequelize_1[J(0x142)][K(0x13e)], p[J(0x140)] = ![];
        const q = {};
        q[J(0x13b)] = sequelize_1[J(0x142)][K(0x150)], q[J(0x140)] = !![], q[K(0x14b) + 'ue'] = null;
        const r = {};
        r[K(0x13b)] = sequelize_1[K(0x142)][K(0x13e)], r[K(0x140)] = !![], r[J(0x14b) + 'ue'] = null;
        const s = {};
        s[K(0x13b)] = sequelize_1[K(0x142)][J(0x13e)], s[K(0x140)] = !![], s[K(0x14b) + 'ue'] = null;
        const t = {};
        t[K(0x13b)] = sequelize_1[K(0x142)][K(0x13e)], t[K(0x140)] = !![], t[K(0x14b) + 'ue'] = null;
        const u = {};
        u[J(0x13b)] = sequelize_1[K(0x142)][K(0x146)], u[J(0x140)] = ![], u[J(0x14b) + 'ue'] = 0x0;
        const v = {};
        return v[J(0x13b)] = sequelize_1[J(0x142)][J(0x146)], v[J(0x140)] = !![], v[J(0x14b) + 'ue'] = null, Promise[K(0x15c)]([l[K(0x158) + 'e'](n[K(0x14e)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[K(0x142)][K(0x146)],
                    'references': {
                        'model': n[J(0x147)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x144)],
                    'onDelete': n[J(0x144)]
                },
                'campaignId': {
                    'type': sequelize_1[J(0x142)][J(0x146)],
                    'references': {
                        'model': n[J(0x148)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x144)],
                    'onDelete': n[K(0x144)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[K(0x142)][K(0x152)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x142)][J(0x152)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = H, e = {};
        e[L(0x154)] = M(0x145) + L(0x137);
        const f = e;
        return Promise[M(0x15c)]([d[L(0x14f)](f[L(0x154)])]);
    }
};