'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x125)) / (-0x1f * 0x43 + 0x85e + 0x2 * -0x20) * (-parseInt(G(0x128)) / (-0x2 * -0x10cf + 0x247b + -0x4617)) + -parseInt(F(0x106)) / (0xf42 + 0x246d + -0x33ac * 0x1) * (parseInt(F(0x123)) / (0x1ad8 + 0x1 * -0x1d0e + 0x39 * 0xa)) + -parseInt(F(0x10a)) / (0xce * -0x4 + 0x2313 + -0x1fd6 * 0x1) + -parseInt(G(0x107)) / (-0x1021 + 0xca9 * 0x3 + -0x2c * 0x7f) * (-parseInt(G(0x103)) / (-0x15ba + 0x3 * -0x916 + 0x3103)) + parseInt(G(0x126)) / (0x1 * -0x23dd + 0x3f * 0xe + 0x1 * 0x2073) + parseInt(F(0x11b)) / (-0x457 + -0x1 * 0xc62 + -0x1 * -0x10c2) * (-parseInt(F(0x104)) / (-0x15df * 0x1 + 0x263c + 0x571 * -0x3)) + -parseInt(F(0x12a)) / (0x1 * 0xf35 + 0x70c + -0x1636) * (-parseInt(G(0x109)) / (0x4 * 0x5ea + 0x301 * 0x9 + 0x5 * -0xa21));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x66f0d + -0xef * -0x162 + -0x567 * 0xb7));
function a() {
    const N = [
        'DfUwd',
        'exports',
        'STRING',
        'ent',
        'sequelize',
        'dropTable',
        'allowNull',
        '4764qlRtMl',
        'primaryKey',
        '1123EWaVud',
        '332840zbweCr',
        'defaultVal',
        '540DsYUNT',
        'autoIncrem',
        '484319GGDUgI',
        'epiWO',
        'value',
        '1151899uAxLFu',
        '590wrMxxk',
        '__esModule',
        '36KNzDNe',
        '18JXWPUf',
        'INTEGER',
        '48VpiTdT',
        '267335JYNeGt',
        'TEXT',
        'ntacts',
        'type',
        'createTabl',
        'erty',
        'all',
        'Campaigns',
        'CampaignCo',
        'DATE',
        'LbBal',
        'kjMNC',
        'CASCADE',
        'DataTypes',
        'defineProp',
        'Contacts',
        'XaUiF',
        '13311mFskhW'
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
        f = f - (-0x1669 * -0x1 + 0x11b + -0x1683);
        let h = e[f];
        return h;
    }, b(c, d);
}
E[H(0x102)] = !![], Object[I(0x118) + H(0x10f)](exports, I(0x105), E);
const sequelize_1 = require(H(0x120));
module[I(0x11d)] = {
    'up': l => {
        const J = I, K = I, m = {};
        m[J(0x11c)] = K(0x112) + J(0x10c), m[J(0x115)] = J(0x119), m[K(0x101)] = K(0x116), m[J(0x114)] = K(0x111);
        const n = m, o = {};
        o[J(0x10d)] = sequelize_1[J(0x117)][K(0x108)], o[J(0x124)] = !![], o[K(0x129) + J(0x11f)] = !![], o[J(0x122)] = ![];
        const p = {};
        p[J(0x10d)] = sequelize_1[K(0x117)][J(0x11e)], p[K(0x122)] = ![];
        const q = {};
        q[K(0x10d)] = sequelize_1[K(0x117)][J(0x10b)], q[K(0x122)] = !![], q[J(0x127) + 'ue'] = null;
        const r = {};
        r[J(0x10d)] = sequelize_1[J(0x117)][K(0x11e)], r[K(0x122)] = !![], r[J(0x127) + 'ue'] = null;
        const s = {};
        s[K(0x10d)] = sequelize_1[K(0x117)][K(0x11e)], s[J(0x122)] = !![], s[J(0x127) + 'ue'] = null;
        const t = {};
        t[J(0x10d)] = sequelize_1[J(0x117)][K(0x11e)], t[K(0x122)] = !![], t[J(0x127) + 'ue'] = null;
        const u = {};
        u[K(0x10d)] = sequelize_1[K(0x117)][J(0x108)], u[K(0x122)] = ![], u[J(0x127) + 'ue'] = 0x0;
        const v = {};
        return v[J(0x10d)] = sequelize_1[J(0x117)][J(0x108)], v[J(0x122)] = !![], v[K(0x127) + 'ue'] = null, Promise[J(0x110)]([l[J(0x10e) + 'e'](n[K(0x11c)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[J(0x117)][K(0x108)],
                    'references': {
                        'model': n[K(0x115)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x101)],
                    'onDelete': n[J(0x101)]
                },
                'campaignId': {
                    'type': sequelize_1[K(0x117)][J(0x108)],
                    'references': {
                        'model': n[J(0x114)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x101)],
                    'onDelete': n[J(0x101)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[J(0x117)][J(0x113)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x117)][J(0x113)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = H, e = {};
        e[L(0x11a)] = L(0x112) + M(0x10c);
        const f = e;
        return Promise[M(0x110)]([d[L(0x121)](f[M(0x11a)])]);
    }
};