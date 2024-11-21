'use strict';
function a() {
    const F = [
        '274328uKUtfc',
        'value',
        'yIGej',
        'dropTable',
        '30aMeCVt',
        'DATE',
        'sequelize',
        '1853722cRYkkE',
        'primaryKey',
        'RITsp',
        'Contacts',
        '909814zzPPuZ',
        'NHIGZ',
        '1405825vVKSdM',
        'Tenants',
        '2151905lnZLtI',
        'Tickets',
        'UserRating',
        '198DhpiIr',
        'jFJsP',
        '15893340ndBxSq',
        'Users',
        'SET\x20NULL',
        '6msDDtZ',
        'DataTypes',
        'autoIncrem',
        'JFuFo',
        'createTabl',
        'type',
        'allowNull',
        'INTEGER',
        '__esModule',
        '5872132DojmjT',
        'ent',
        'Whatsapps',
        'DSTws',
        'erty',
        'exports',
        'crjJV',
        'jIRPd',
        'defineProp'
    ];
    a = function () {
        return F;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x11f)) / (0x1f5b + 0x2319 * 0x1 + -0x1 * 0x4273) + parseInt(x(0x123)) / (-0x15b4 + -0x3c0 + 0x2 * 0xcbb) * (parseInt(x(0x12f)) / (-0x1c02 + -0x487 * 0x7 + -0x2 * -0x1ddb)) + parseInt(y(0x10f)) / (-0x2397 + 0x222d * 0x1 + 0x16e) + -parseInt(y(0x125)) / (0x1 * 0x1b9f + 0x1 * 0x1b8f + -0x1263 * 0x3) + -parseInt(x(0x11c)) / (-0x18fd + -0x137f + 0x2c82) * (-parseInt(x(0x127)) / (-0x13bd * -0x1 + 0x1a09 + -0x2dbf)) + -parseInt(y(0x118)) / (-0x234e + -0xb73 + 0x6af * 0x7) * (-parseInt(x(0x12a)) / (-0x1d14 + -0xc7 * 0xe + 0x1 * 0x27ff)) + -parseInt(x(0x12c)) / (0x869 * -0x1 + -0x19bf + -0x5b3 * -0x6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c679 * 0x4 + 0x3a769 + -0x45 * -0xd9a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x54 * 0x28 + -0x2c8 * 0x7 + -0x1 * -0x761);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[z(0x119)] = !![], Object[z(0x117) + z(0x113)](exports, z(0x10e), w);
const sequelize_1 = require(A(0x11e));
module[A(0x114)] = {
    'up': e => {
        const B = A, C = A, f = {};
        f[B(0x115)] = C(0x129) + 's', f[B(0x116)] = C(0x128), f[C(0x112)] = B(0x12e), f[B(0x11a)] = C(0x126), f[C(0x121)] = B(0x12d), f[C(0x12b)] = C(0x122), f[B(0x124)] = B(0x111);
        const g = f, h = {};
        return h[B(0x10b)] = sequelize_1[B(0x130)][C(0x10d)], h[B(0x131) + B(0x110)] = !![], h[C(0x120)] = !![], h[B(0x10c)] = ![], e[C(0x10a) + 'e'](g[B(0x115)], {
            'id': h,
            'ticketId': {
                'type': sequelize_1[C(0x130)][B(0x10d)],
                'references': {
                    'model': g[B(0x116)],
                    'key': 'id'
                },
                'onDelete': g[B(0x112)]
            },
            'tenantId': {
                'type': sequelize_1[B(0x130)][B(0x10d)],
                'references': {
                    'model': g[B(0x11a)],
                    'key': 'id'
                },
                'onDelete': g[C(0x112)]
            },
            'userId': {
                'type': sequelize_1[C(0x130)][B(0x10d)],
                'references': {
                    'model': g[B(0x121)],
                    'key': 'id'
                },
                'onDelete': g[C(0x112)],
                'allowNull': !![]
            },
            'contactId': {
                'type': sequelize_1[C(0x130)][B(0x10d)],
                'references': {
                    'model': g[B(0x12b)],
                    'key': 'id'
                },
                'onDelete': g[C(0x112)],
                'allowNull': !![]
            },
            'whatsappId': {
                'type': sequelize_1[B(0x130)][C(0x10d)],
                'references': {
                    'model': g[B(0x124)],
                    'key': 'id'
                },
                'onDelete': g[B(0x112)],
                'allowNull': !![]
            },
            'rate': {
                'type': sequelize_1[B(0x130)][C(0x10d)],
                'defaultValue': 0x0
            },
            'createdAt': {
                'type': sequelize_1[C(0x130)][C(0x11d)],
                'allowNull': !![]
            },
            'updatedAt': {
                'type': sequelize_1[B(0x130)][B(0x11d)],
                'allowNull': !![]
            }
        });
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x109)] = D(0x129) + 's';
        const f = e;
        return d[D(0x11b)](f[E(0x109)]);
    }
};