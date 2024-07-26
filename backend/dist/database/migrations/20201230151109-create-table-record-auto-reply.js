'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1af)) / (-0xcd4 + -0xdc5 + 0x1a9a) + parseInt(A(0x19e)) / (-0x19b * 0x5 + -0x2058 + 0x2861) + -parseInt(A(0x1a2)) / (0x1 * 0x24fd + -0xce6 * -0x1 + 0x8 * -0x63c) + parseInt(z(0x191)) / (-0x1d3c + -0x1 * -0x249a + 0x1 * -0x75a) + -parseInt(A(0x197)) / (0x20ca + -0x6c4 + 0x13d * -0x15) * (parseInt(z(0x196)) / (-0x17c4 + 0x1f0 * -0x9 + 0x293a)) + -parseInt(A(0x19a)) / (-0x24cb + -0x1c41 + -0x3 * -0x15b1) * (parseInt(A(0x1b3)) / (0x1d35 * -0x1 + 0xc7 * 0x2c + -0x1 * 0x4f7)) + -parseInt(A(0x190)) / (-0x1 * 0x7ab + -0x715 + 0xec9) * (parseInt(A(0x1a6)) / (-0x2 * -0xa21 + 0x1 * -0x863 + -0xbd5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe68d8 + 0xe7188 + 0xd5b40));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2653 + 0xad0 + 0x3 * 0x9b1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
function a() {
    const H = [
        'allowNull',
        'value',
        '__esModule',
        'erty',
        '12MNXqtf',
        '4179590nymYEO',
        'Tickets',
        'Owgit',
        '48839FpXhPk',
        'dropTable',
        'primaryKey',
        'DqbzW',
        '2139286xIbCKc',
        'autoIncrem',
        'sequelize',
        'Aykfw',
        '2893554kficRk',
        'Contacts',
        'eougf',
        'exports',
        '20vTWdEV',
        'ent',
        'STRING',
        'CASCADE',
        'DataTypes',
        'ogs',
        'DATE',
        'restrict',
        'defineProp',
        '1316727vpEhvY',
        'createTabl',
        'HISXT',
        'ekWLI',
        '248oiUCGK',
        'INTEGER',
        'AutoReplyL',
        'type',
        '1211472kbmYbV',
        '6452156AujZzT'
    ];
    a = function () {
        return H;
    };
    return a();
}
y[B(0x193)] = !![], Object[B(0x1ae) + B(0x195)](exports, C(0x194), y);
const sequelize_1 = require(B(0x1a0));
module[B(0x1a5)] = {
    'up': j => {
        const D = C, E = C, k = {};
        k[D(0x1a1)] = E(0x1b5) + D(0x1ab), k[D(0x19d)] = E(0x1a3), k[D(0x1b2)] = D(0x1a9), k[E(0x1b1)] = E(0x1ad), k[E(0x199)] = D(0x198);
        const l = k, m = {};
        m[D(0x1b6)] = sequelize_1[D(0x1aa)][E(0x1b4)], m[D(0x19f) + D(0x1a7)] = !![], m[E(0x19c)] = !![], m[E(0x192)] = ![];
        const n = {};
        n[E(0x1b6)] = sequelize_1[E(0x1aa)][E(0x1b4)], n[D(0x192)] = ![];
        const o = {};
        o[E(0x1b6)] = sequelize_1[E(0x1aa)][E(0x1a8)], o[E(0x192)] = ![];
        const p = {};
        p[D(0x1b6)] = sequelize_1[D(0x1aa)][D(0x1b4)], p[D(0x192)] = ![];
        const q = {};
        q[D(0x1b6)] = sequelize_1[D(0x1aa)][D(0x1a8)], q[D(0x192)] = ![];
        const r = {};
        return r[D(0x1b6)] = sequelize_1[E(0x1aa)][E(0x1a8)], r[D(0x192)] = ![], j[E(0x1b0) + 'e'](l[D(0x1a1)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[E(0x1aa)][D(0x1b4)],
                'references': {
                    'model': l[E(0x19d)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x1b2)],
                'onDelete': l[D(0x1b1)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x1aa)][E(0x1b4)],
                'references': {
                    'model': l[E(0x199)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1b2)],
                'onDelete': l[D(0x1b1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0x1aa)][D(0x1ac)](0x35c * 0x2 + -0x1c74 + 0x15c2),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x1aa)][D(0x1ac)](-0xc95 * -0x1 + 0x104b + 0x4cf * -0x6),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0x1a4)] = F(0x1b5) + G(0x1ab);
        const f = e;
        return d[F(0x19b)](f[F(0x1a4)]);
    }
};