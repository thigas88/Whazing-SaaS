'use strict';
const B = b, C = b;
function a() {
    const H = [
        'RcXJs',
        'sequelize',
        'INTEGER',
        '27cASsoi',
        'dropTable',
        '__esModule',
        '6cxaynR',
        'ent',
        'allowNull',
        'restrict',
        'DATE',
        '30aIBIWy',
        '364036gBBhEY',
        'AutoReplyL',
        'HedPK',
        '5123700szaqdE',
        'rfXsC',
        'createTabl',
        'Tickets',
        'QlMPV',
        'DataTypes',
        '7818877bkVjCS',
        'iYQqy',
        'value',
        'erty',
        '483432TJoptX',
        'Contacts',
        'autoIncrem',
        'ogs',
        '6tiYIyl',
        'CASCADE',
        '274019HxHqkB',
        'defineProp',
        'exports',
        '909585xLmDsn',
        'type',
        'primaryKey',
        'dQwHo',
        '4427521CYZUXs',
        'STRING'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xb0)) / (-0x1 * -0x3c4 + -0xfda + 0xc17) * (parseInt(z(0xae)) / (-0x1 * 0x699 + 0x2 * 0xe81 + -0x1667)) + parseInt(A(0x9c)) / (-0xd36 + 0x201b + -0x2 * 0x971) * (-parseInt(z(0x9d)) / (0x2e * -0xb2 + 0x1 * 0x1dc5 + 0x23b)) + parseInt(A(0x8b)) / (0xd88 * -0x2 + 0x2411 + -0x8fc) + -parseInt(z(0x97)) / (0xff9 + -0x26dd * 0x1 + 0x16ea) * (-parseInt(A(0x8f)) / (-0x1d06 + 0x2 * -0xa23 + 0x3153)) + -parseInt(z(0xaa)) / (0x19ef + 0x1494 + -0x2e7b) * (-parseInt(z(0x94)) / (0x110e + 0x1 * -0xb85 + -0x580)) + parseInt(z(0xa0)) / (0x1d09 + -0x1 * -0x2208 + -0x3f07) + parseInt(z(0xa6)) / (-0x1 * 0x184 + -0x1 * -0x50d + 0x6 * -0x95);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf * -0x7867 + -0x20fea * 0x1 + -0x422d1 * -0x4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x632 * -0x4 + 0x2 * 0x76c + 0x1 * 0xa7a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
y[B(0xa8)] = !![], Object[C(0xb1) + B(0xa9)](exports, B(0x96), y);
const sequelize_1 = require(B(0x92));
module[C(0x8a)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x91)] = E(0x9e) + E(0xad), k[E(0xa7)] = E(0xab), k[E(0xa4)] = E(0xaf), k[D(0xa1)] = D(0x9a), k[D(0x8e)] = E(0xa3);
        const l = k, m = {};
        m[D(0x8c)] = sequelize_1[D(0xa5)][D(0x93)], m[E(0xac) + D(0x98)] = !![], m[D(0x8d)] = !![], m[D(0x99)] = ![];
        const n = {};
        n[E(0x8c)] = sequelize_1[D(0xa5)][D(0x93)], n[E(0x99)] = ![];
        const o = {};
        o[D(0x8c)] = sequelize_1[D(0xa5)][E(0x90)], o[D(0x99)] = ![];
        const p = {};
        p[E(0x8c)] = sequelize_1[D(0xa5)][E(0x93)], p[E(0x99)] = ![];
        const q = {};
        q[E(0x8c)] = sequelize_1[D(0xa5)][D(0x90)], q[D(0x99)] = ![];
        const r = {};
        return r[E(0x8c)] = sequelize_1[D(0xa5)][D(0x90)], r[D(0x99)] = ![], j[E(0xa2) + 'e'](l[E(0x91)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[D(0xa5)][D(0x93)],
                'references': {
                    'model': l[E(0xa7)],
                    'key': 'id'
                },
                'onUpdate': l[E(0xa4)],
                'onDelete': l[E(0xa1)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xa5)][D(0x93)],
                'references': {
                    'model': l[E(0x8e)],
                    'key': 'id'
                },
                'onUpdate': l[D(0xa4)],
                'onDelete': l[D(0xa1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xa5)][D(0x9b)](-0x245c + 0x7eb * -0x1 + -0x1 * -0x2c4d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0xa5)][E(0x9b)](0x4c * -0x83 + 0xf6a + 0x1780),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0x9f)] = F(0x9e) + G(0xad);
        const f = e;
        return d[G(0x95)](f[F(0x9f)]);
    }
};