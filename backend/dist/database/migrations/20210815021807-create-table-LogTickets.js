'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe1a + 0x1d3 * -0x1 + 0x11a6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1c0)) / (-0x2325 + 0x1410 * -0x1 + 0x3736) + parseInt(u(0x1db)) / (0x8f * -0x1 + -0xb4 + -0x41 * -0x5) + parseInt(u(0x1d9)) / (-0x1f2f + 0x18be + 0xe * 0x76) + parseInt(t(0x1bb)) / (0xa90 + 0x2 * 0xfbc + -0x4 * 0xa81) + parseInt(t(0x1c9)) / (-0x9dc + -0x1435 + -0x2 * -0xf0b) + -parseInt(t(0x1cf)) / (0x1 * 0xd72 + 0x11bf * -0x2 + 0x1612) * (parseInt(t(0x1ce)) / (-0x16 * -0x1bb + 0x2 * -0x1181 + -0x309)) + parseInt(u(0x1bc)) / (-0x1197 + -0x8e1 * 0x2 + 0x2361) * (-parseInt(u(0x1d7)) / (-0x8e1 + 0x1 * 0x14a9 + -0xbbf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4d161 + -0x72e * -0x2d1 + -0x1a1a7));
const s = {};
s[v(0x1ca)] = !![], Object[w(0x1c4) + w(0x1d8)](exports, w(0x1c5), s);
const sequelize_1 = require(w(0x1da));
function a() {
    const B = [
        'HHoFW',
        'CASCADE',
        '3362989epcdAp',
        '18xaoerA',
        'exports',
        'Queues',
        'primaryKey',
        'allowNull',
        'autoIncrem',
        'xRVwt',
        'IFIbF',
        '90CRTTpC',
        'erty',
        '3552612KMqxKY',
        'sequelize',
        '1911492TMmqbk',
        'ent',
        'WWXbW',
        'Users',
        'dropTable',
        '5276720KfLSWK',
        '361288BcuPFI',
        'INTEGER',
        'LogTickets',
        'DATE',
        '1632939rYULbO',
        'STRING',
        'createTabl',
        'JcOwD',
        'defineProp',
        '__esModule',
        'ffMAl',
        'DataTypes',
        'Tickets',
        '4846170SxuGGs',
        'value',
        'type'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x1d0)] = {
    'up': e => {
        const x = v, y = v, f = {};
        f[x(0x1d6)] = y(0x1be), f[y(0x1c3)] = x(0x1b9), f[x(0x1cc)] = x(0x1cd), f[x(0x1d5)] = y(0x1c8), f[x(0x1dd)] = y(0x1d1);
        const g = f, h = {};
        return h[x(0x1cb)] = sequelize_1[y(0x1c7)][y(0x1bd)], h[y(0x1d4) + x(0x1dc)] = !![], h[x(0x1d2)] = !![], h[x(0x1d3)] = ![], e[y(0x1c2) + 'e'](g[y(0x1d6)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0x1c7)][x(0x1bd)],
                'references': {
                    'model': g[y(0x1c3)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x1cc)],
                'onDelete': g[y(0x1cc)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[x(0x1c7)][x(0x1bd)],
                'references': {
                    'model': g[y(0x1d5)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1cc)],
                'onDelete': g[y(0x1cc)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0x1c7)][y(0x1bd)],
                'references': {
                    'model': g[x(0x1dd)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x1cc)],
                'onDelete': g[y(0x1cc)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x1c7)][x(0x1c1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x1c7)][x(0x1bf)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1c7)][x(0x1bf)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x1c6)] = z(0x1be);
        const f = e;
        return d[A(0x1ba)](f[A(0x1c6)]);
    }
};