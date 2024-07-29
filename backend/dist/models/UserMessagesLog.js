'use strict';
var a4 = b, a7 = b;
(function (c, d) {
    var a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(a2(0xe1)) / (0x12b5 + -0x4 * -0x28e + -0x6 * 0x4d2) * (-parseInt(a3(0xa6)) / (-0xd93 + 0x1c03 + 0x1 * -0xe6e)) + parseInt(a3(0xa9)) / (0x9db + -0x1 * 0x333 + 0x6a5 * -0x1) * (-parseInt(a3(0xc2)) / (0x3 * 0x883 + 0x9ae * 0x2 + -0x2ce1)) + parseInt(a2(0xda)) / (-0x1928 + -0x1cb2 * 0x1 + 0x3 * 0x11f5) * (parseInt(a3(0xc9)) / (-0x151 * -0x1a + 0x16fd + -0x3931)) + parseInt(a3(0xac)) / (0x1 * 0x20be + -0x14bf + 0x2fe * -0x4) + -parseInt(a2(0xd1)) / (0x781 + -0x1d6a + 0x15f1) + parseInt(a2(0xa8)) / (-0x67 * -0x3d + -0xd30 + -0xb52) * (parseInt(a3(0xce)) / (-0x22bb + 0x1930 + 0xb * 0xdf)) + parseInt(a2(0xbe)) / (-0x5c5 * -0x5 + 0xd8a + 0x878 * -0x5) * (parseInt(a3(0xc7)) / (-0x748 + -0xa * 0x1a5 + 0x11 * 0x166));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x57ab1 * 0x1 + 0x2bfd * -0x1c + 0xf8057));
var __decorate = this && this[a4(0xa3)] || function (e, f, g, h) {
        var a5 = a4, a6 = a4, j = {
                'JsanS': function (o, p) {
                    return o < p;
                },
                'fRHaM': function (o, p) {
                    return o === p;
                },
                'vNEKm': function (o, p) {
                    return o === p;
                },
                'ctbBb': a5(0xb9),
                'fTUJg': function (o, p) {
                    return o === p;
                },
                'DWSbO': a6(0xcb),
                'oxktk': function (o, p) {
                    return o - p;
                },
                'mhCHo': function (o, p) {
                    return o >= p;
                },
                'gfdDK': function (o, p) {
                    return o(p);
                },
                'oyESf': function (o, p) {
                    return o > p;
                },
                'ATkzX': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'oxNIt': function (o, p, q) {
                    return o(p, q);
                }
            }, k = arguments[a5(0xb5)], l = j[a5(0xd6)](k, 0x1938 + -0x3b0 + -0x7 * 0x313) ? f : j[a5(0xb0)](h, null) ? h = Object[a5(0xd5) + a5(0xb8) + a6(0xb2)](f, g) : h, m;
        if (j[a6(0xb6)](typeof Reflect, j[a6(0xe4)]) && j[a5(0xd7)](typeof Reflect[a5(0xb4)], j[a5(0xaf)]))
            l = Reflect[a6(0xb4)](e, f, g, h);
        else {
            for (var n = j[a6(0xa4)](e[a6(0xb5)], -0x1625 + 0x1160 + 0x4c6); j[a5(0xd8)](n, -0x2329 + -0x6d6 + 0x29ff * 0x1); n--)
                if (m = e[n])
                    l = (j[a5(0xd6)](k, -0x1fb2 + 0x1 * -0x1abb + -0x2 * -0x1d38) ? j[a6(0xdb)](m, l) : j[a6(0xde)](k, -0xa9a + 0x306 + -0x1d * -0x43) ? j[a6(0xe5)](m, f, g, l) : j[a6(0xec)](m, f, g)) || l;
        }
        return j[a6(0xde)](k, 0xa * 0x23 + -0xed2 + -0x3 * -0x47d) && l && Object[a5(0xc8) + a5(0xca)](f, g, l), l;
    }, __metadata = this && this[a7(0xa1)] || function (d, e) {
        var a8 = a7, a9 = a4, f = {};
        f[a8(0xe3)] = function (h, i) {
            return h === i;
        }, f[a9(0xdf)] = a8(0xb9), f[a9(0xab)] = function (h, i) {
            return h === i;
        }, f[a9(0xe6)] = a9(0xcb);
        var g = f;
        if (g[a9(0xe3)](typeof Reflect, g[a9(0xdf)]) && g[a9(0xab)](typeof Reflect[a9(0xb7)], g[a9(0xe6)]))
            return Reflect[a8(0xb7)](d, e);
    }, __importDefault = this && this[a7(0xa7) + a7(0xad)] || function (c) {
        var aa = a7;
        return c && c[aa(0xdc)] ? c : { 'default': c };
    }, a0 = {};
a0[a7(0xe8)] = !![], Object[a4(0xc8) + a4(0xca)](exports, a7(0xdc), a0);
const sequelize_typescript_1 = require(a4(0xd3) + a7(0xd0)), Message_1 = __importDefault(require(a4(0xc6))), Ticket_1 = __importDefault(require(a7(0xba))), User_1 = __importDefault(require(a4(0xc5)));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0xcc7 + -0x2481 + -0x1 * -0x4b77);
        var h = e[f];
        return h;
    }, b(c, d);
}
let UserMessagesLog = class UserMessagesLog extends sequelize_typescript_1[a7(0xe0)] {
};
__decorate([
    sequelize_typescript_1[a7(0xae)],
    sequelize_typescript_1[a7(0xa2) + a4(0xb1)],
    sequelize_typescript_1[a7(0xcd)],
    __metadata(a4(0xd4) + 'e', Number)
], UserMessagesLog[a4(0xd9)], 'id', void (-0x167 * -0x6 + 0x259 + -0xac3)), __decorate([
    (-0x1d7c + -0x209f * 0x1 + 0x3e1b, sequelize_typescript_1[a7(0xc3)])(() => User_1[a4(0xe9)]),
    sequelize_typescript_1[a7(0xcd)],
    __metadata(a4(0xd4) + 'e', Number)
], UserMessagesLog[a7(0xd9)], a4(0xbd), void (-0x4 * -0x61f + -0x24cc + 0xc50)), __decorate([
    (-0x64d + 0x4 * 0x3f3 + -0x11 * 0x8f, sequelize_typescript_1[a4(0xcc)])(() => User_1[a7(0xe9)]),
    __metadata(a7(0xd4) + 'e', User_1[a4(0xe9)])
], UserMessagesLog[a7(0xd9)], a4(0xb3), void (-0x2f * 0xa9 + -0x10d * -0x1 + 0x1dfa * 0x1)), __decorate([
    (0x115 * -0xd + -0xe5d * 0x2 + 0x2acb, sequelize_typescript_1[a7(0xc3)])(() => Message_1[a7(0xe9)]),
    (-0x2551 * 0x1 + 0x77 * 0x54 + 0x1bb * -0x1, sequelize_typescript_1[a7(0xbb)])(null),
    sequelize_typescript_1[a7(0xc0)],
    sequelize_typescript_1[a4(0xcd)],
    __metadata(a4(0xd4) + 'e', String)
], UserMessagesLog[a7(0xd9)], a7(0xeb), void (0x1 * 0xb12 + 0x2 * 0x1313 + -0x3138)), __decorate([
    (0x129c + 0x66d + 0xd * -0x1ed, sequelize_typescript_1[a4(0xcc)])(() => Message_1[a4(0xe9)], a4(0xeb)),
    __metadata(a7(0xd4) + 'e', Message_1[a4(0xe9)])
], UserMessagesLog[a7(0xd9)], a4(0xa5), void (0x1 * 0x2691 + 0x1b6 + -0x2847)), __decorate([
    (0x921 + 0x1471 * 0x1 + -0x5 * 0x5ea, sequelize_typescript_1[a4(0xc3)])(() => Ticket_1[a7(0xe9)]),
    (-0x221 * 0x5 + 0x0 + 0xaa5, sequelize_typescript_1[a7(0xbb)])(null),
    sequelize_typescript_1[a7(0xc0)],
    sequelize_typescript_1[a4(0xcd)],
    __metadata(a4(0xd4) + 'e', Number)
], UserMessagesLog[a4(0xd9)], a7(0xc1), void (-0x1f7c + -0x2 * 0x532 + 0x29e0)), __decorate([
    (0x25bd + 0x6 * 0x146 + 0x1 * -0x2d61, sequelize_typescript_1[a7(0xcc)])(() => Ticket_1[a4(0xe9)]),
    __metadata(a4(0xd4) + 'e', Ticket_1[a7(0xe9)])
], UserMessagesLog[a4(0xd9)], a7(0xbc), void (-0x1cfe + 0x356 * -0x2 + -0x33e * -0xb)), __decorate([
    sequelize_typescript_1[a4(0xcf)],
    (0xf78 + -0x14f * -0x11 + -0x25b7 * 0x1, sequelize_typescript_1[a4(0xcd)])(sequelize_typescript_1[a4(0xaa)][a4(0xdd)](-0xc40 + 0x83 * 0x1 + 0xbc3)),
    __metadata(a4(0xd4) + 'e', Date)
], UserMessagesLog[a4(0xd9)], a7(0xd2), void (0xf97 * 0x2 + 0x2 * -0x3c6 + 0x6e * -0x37)), __decorate([
    sequelize_typescript_1[a7(0xea)],
    (-0x11 * 0x96 + 0x1f0d + -0x1517, sequelize_typescript_1[a7(0xcd)])(sequelize_typescript_1[a7(0xaa)][a4(0xdd)](-0x1f5b + -0xff + 0x2060)),
    __metadata(a7(0xd4) + 'e', Date)
], UserMessagesLog[a4(0xd9)], a7(0xc4), void (0x17e1 * -0x1 + -0x1e84 + 0xae1 * 0x5));
var a1 = {};
a1[a4(0xbf) + a7(0xe2)] = !![], UserMessagesLog = __decorate([(0xbb5 + 0x1b7 * 0x5 + -0x1448, sequelize_typescript_1[a4(0xe7)])(a1)], UserMessagesLog), exports[a4(0xe9)] = UserMessagesLog;
function a() {
    var ab = [
        'ticketId',
        '4KNoVXP',
        'ForeignKey',
        'updatedAt',
        './User',
        './Message',
        '18720BxAldH',
        'defineProp',
        '6KJIqFF',
        'erty',
        'function',
        'BelongsTo',
        'Column',
        '10TayXof',
        'CreatedAt',
        'typescript',
        '2860128riudit',
        'createdAt',
        'sequelize-',
        'design:typ',
        'getOwnProp',
        'JsanS',
        'fTUJg',
        'mhCHo',
        'prototype',
        '2891750nyNEQc',
        'gfdDK',
        '__esModule',
        'DATE',
        'oyESf',
        'ezakh',
        'Model',
        '56471mbBQqG',
        'eName',
        'aCjVU',
        'ctbBb',
        'ATkzX',
        'lEaBM',
        'Table',
        'value',
        'default',
        'UpdatedAt',
        'messageId',
        'oxNIt',
        '__metadata',
        'AutoIncrem',
        '__decorate',
        'oxktk',
        'message',
        '22jHNrxM',
        '__importDe',
        '1091106NOJBrM',
        '2014314QPLaCO',
        'DataType',
        'Ynhnb',
        '2732583NUTpFD',
        'fault',
        'PrimaryKey',
        'DWSbO',
        'fRHaM',
        'ent',
        'ptor',
        'user',
        'decorate',
        'length',
        'vNEKm',
        'metadata',
        'ertyDescri',
        'object',
        './Ticket',
        'Default',
        'ticket',
        'userId',
        '6358ojamxR',
        'freezeTabl',
        'AllowNull'
    ];
    a = function () {
        return ab;
    };
    return a();
}