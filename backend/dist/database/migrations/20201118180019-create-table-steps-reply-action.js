'use strict';
const x = b, y = b;
function a() {
    const D = [
        'autoIncrem',
        'DATE',
        'erty',
        'allowNull',
        'defineProp',
        'ent',
        'Users',
        '1805923LHJRQw',
        '2815240Dupbff',
        'SET\x20NULL',
        '4681lINixm',
        '1055396UzLbyI',
        'Xxgrz',
        'INTEGER',
        '__esModule',
        'CASCADE',
        'Actions',
        '16ARApaH',
        'exports',
        'value',
        'StepsReply',
        'deFvC',
        'dropTable',
        '9ArDsVH',
        '5KGaaUS',
        'STRING',
        'type',
        'KJJsr',
        '439407LvhZKF',
        'sequelize',
        'HrSgS',
        'voiAd',
        '699736ITgKmD',
        'primaryKey',
        '873096GlnSbh',
        'XmcMn',
        'createTabl',
        'DataTypes'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x201)) / (0x967 * 0x2 + -0x2 * -0x671 + 0x1faf * -0x1) * (parseInt(v(0x208)) / (0x1bdb + -0x83 + -0x1b56)) + -parseInt(v(0x213)) / (-0x3eb + -0x5 * -0x33d + -0xc43) + -parseInt(v(0x202)) / (-0x2198 + -0x1644 + 0x37e0) * (parseInt(w(0x20f)) / (-0x2 * 0x5d1 + -0xd * 0xfe + 0x188d)) + parseInt(w(0x1f3)) / (0x551 + -0x1831 + 0x12e6) + parseInt(v(0x1fe)) / (0x14db * -0x1 + -0x2062 + 0x3544) + parseInt(w(0x1f1)) / (0x15b1 * -0x1 + -0x1875 + 0x2e2e) * (-parseInt(w(0x20e)) / (-0x10d2 * 0x1 + -0x494 + 0x156f)) + parseInt(v(0x1ff)) / (0x2a5 * -0x3 + -0x4 * 0x617 + 0x1f * 0x10b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x156e2 + -0x56 * -0x5b3 + -0x24ec2));
const u = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1bf1 * 0x1 + 0x1 * 0x54b + 0x1894);
        let h = e[f];
        return h;
    }, b(c, d);
}
u[x(0x20a)] = !![], Object[x(0x1fb) + x(0x1f9)](exports, y(0x205), u);
const sequelize_1 = require(x(0x1ee));
module[x(0x209)] = {
    'up': e => {
        const z = x, A = x, f = {};
        f[z(0x1ef)] = z(0x20b) + z(0x207), f[A(0x212)] = z(0x20b), f[A(0x1f4)] = z(0x206), f[A(0x1f0)] = z(0x1fd), f[A(0x20c)] = A(0x200);
        const g = f, h = {};
        return h[z(0x211)] = sequelize_1[A(0x1f6)][A(0x204)], h[z(0x1f7) + z(0x1fc)] = !![], h[A(0x1f2)] = !![], h[z(0x1fa)] = ![], e[A(0x1f5) + 'e'](g[A(0x1ef)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[z(0x1f6)][A(0x204)],
                'references': {
                    'model': g[z(0x212)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x1f4)],
                'onDelete': g[z(0x1f4)]
            },
            'words': {
                'type': sequelize_1[z(0x1f6)][A(0x210)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[A(0x1f6)][z(0x204)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0x1f6)][z(0x210)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[z(0x1f6)][A(0x204)],
                'references': {
                    'model': g[A(0x1f0)],
                    'key': 'id'
                },
                'onUpdate': g[z(0x1f4)],
                'onDelete': g[A(0x20c)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x1f6)][A(0x1f8)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x1f6)][A(0x1f8)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0x203)] = C(0x20b) + C(0x207);
        const f = e;
        return d[C(0x20d)](f[C(0x203)]);
    }
};