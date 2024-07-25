'use strict';
function a() {
    const N = [
        '117pQHNFr',
        'wAcIf',
        'exports',
        '__esModule',
        'Campaigns',
        '4991248TFNXvF',
        'autoIncrem',
        'createTabl',
        '2044165WvPAnB',
        'INTEGER',
        'STRING',
        'primaryKey',
        'DATE',
        '1IlLXZG',
        'tsUwG',
        'defineProp',
        'TEXT',
        '2912441bKwKKd',
        'erty',
        'type',
        'pGpKz',
        '1039755AgdIOL',
        '1874962qOASVP',
        'DhjPX',
        'value',
        'Contacts',
        'ent',
        'ntacts',
        '12FEDsGv',
        '19439000wEsKGn',
        'uqdnu',
        'CASCADE',
        'dropTable',
        'allowNull',
        'all',
        'defaultVal',
        'sequelize',
        'DataTypes',
        '143048ZmXATg',
        'CampaignCo'
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
            const f = parseInt(F(0x1f8)) / (0xda * -0x14 + 0x6 * 0x101 + 0xb03) * (-parseInt(F(0x201)) / (-0x1 * 0x23ab + 0xf58 + 0x1455)) + -parseInt(F(0x200)) / (0x888 + -0x9d3 + 0x14e) + parseInt(F(0x1f0)) / (0x4 * 0xfa + -0xcfa + 0x916) + -parseInt(G(0x1f3)) / (-0x57f + 0xd * -0x10b + 0x1 * 0x1313) * (parseInt(F(0x207)) / (0x1ee5 * -0x1 + -0x12d1 * 0x1 + -0x84a * -0x6)) + -parseInt(G(0x1fc)) / (0x25dd + 0x1699 + -0x1425 * 0x3) + -parseInt(F(0x211)) / (-0x26b6 * 0x1 + -0xf85 + 0x1df * 0x1d) * (-parseInt(G(0x1eb)) / (-0x2436 + 0x39d + 0x20a2)) + parseInt(G(0x208)) / (-0xe91 + 0x2b * 0x66 + -0x287 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2c0 * -0x466 + 0x96e4f + 0x1d * -0x43f1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x12 + 0x17 * -0x133 + 0x1d6e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = {};
E[H(0x203)] = !![], Object[H(0x1fa) + I(0x1fd)](exports, H(0x1ee), E);
const sequelize_1 = require(I(0x20f));
module[I(0x1ed)] = {
    'up': l => {
        const J = H, K = I, m = {};
        m[J(0x202)] = J(0x212) + J(0x206), m[J(0x1ff)] = J(0x204), m[K(0x1ec)] = K(0x20a), m[J(0x209)] = K(0x1ef);
        const n = m, o = {};
        o[K(0x1fe)] = sequelize_1[K(0x210)][K(0x1f4)], o[K(0x1f6)] = !![], o[K(0x1f1) + J(0x205)] = !![], o[J(0x20c)] = ![];
        const p = {};
        p[J(0x1fe)] = sequelize_1[K(0x210)][J(0x1f5)], p[J(0x20c)] = ![];
        const q = {};
        q[J(0x1fe)] = sequelize_1[J(0x210)][J(0x1fb)], q[K(0x20c)] = !![], q[J(0x20e) + 'ue'] = null;
        const r = {};
        r[J(0x1fe)] = sequelize_1[J(0x210)][J(0x1f5)], r[K(0x20c)] = !![], r[K(0x20e) + 'ue'] = null;
        const s = {};
        s[K(0x1fe)] = sequelize_1[K(0x210)][K(0x1f5)], s[J(0x20c)] = !![], s[K(0x20e) + 'ue'] = null;
        const t = {};
        t[K(0x1fe)] = sequelize_1[J(0x210)][K(0x1f5)], t[K(0x20c)] = !![], t[J(0x20e) + 'ue'] = null;
        const u = {};
        u[K(0x1fe)] = sequelize_1[K(0x210)][K(0x1f4)], u[K(0x20c)] = ![], u[J(0x20e) + 'ue'] = 0x0;
        const v = {};
        return v[J(0x1fe)] = sequelize_1[J(0x210)][K(0x1f4)], v[K(0x20c)] = !![], v[K(0x20e) + 'ue'] = null, Promise[K(0x20d)]([l[J(0x1f2) + 'e'](n[K(0x202)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[J(0x210)][J(0x1f4)],
                    'references': {
                        'model': n[J(0x1ff)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x1ec)],
                    'onDelete': n[J(0x1ec)]
                },
                'campaignId': {
                    'type': sequelize_1[K(0x210)][J(0x1f4)],
                    'references': {
                        'model': n[K(0x209)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x1ec)],
                    'onDelete': n[K(0x1ec)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[J(0x210)][J(0x1f7)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x210)][J(0x1f7)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = H, e = {};
        e[L(0x1f9)] = M(0x212) + L(0x206);
        const f = e;
        return Promise[L(0x20d)]([d[M(0x20b)](f[L(0x1f9)])]);
    }
};