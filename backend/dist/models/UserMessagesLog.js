'use strict';
var a4 = b, a7 = b;
(function (c, d) {
    var a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(a2(0x10e)) / (-0x17dd + -0xf82 + 0x2760 * 0x1) + -parseInt(a3(0x11a)) / (0x1a56 + -0x1d63 + 0x1d * 0x1b) + parseInt(a3(0x13e)) / (-0x10f * 0x1f + 0x460 + -0x71d * -0x4) * (-parseInt(a3(0x109)) / (-0x1e98 + 0x1cf9 * -0x1 + -0x883 * -0x7)) + parseInt(a3(0x112)) / (0x1 * -0x634 + 0xa27 + 0x3ee * -0x1) * (-parseInt(a2(0x127)) / (-0x32 * -0x25 + 0x125a + -0x198e)) + -parseInt(a2(0x12f)) / (-0xf7a + -0x3 * -0x3a9 + 0x486) * (parseInt(a3(0x132)) / (0x1fe7 + -0x2 * 0x4e4 + 0x179 * -0xf)) + parseInt(a3(0x106)) / (-0x183f + 0x1c53 + -0x17 * 0x2d) + parseInt(a2(0x104)) / (0xe9b * -0x1 + 0x9 * -0x433 + 0x2 * 0x1a38) * (parseInt(a2(0x12a)) / (-0x13 * -0x55 + 0x7a5 * 0x1 + -0xde9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x69fc7 + -0x2 * -0x6ad69 + 0xe * 0x27ac));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0xb1d * 0x2 + 0x4 * 0x2cc + 0x156 * 0x9);
        var h = e[f];
        return h;
    }, b(c, d);
}
var __decorate = this && this[a4(0x146)] || function (e, f, g, h) {
        var a5 = a4, a6 = a4, j = {
                'KInHE': function (o, p) {
                    return o < p;
                },
                'tWXYq': function (o, p) {
                    return o === p;
                },
                'JSqMO': a5(0x123),
                'uTkPS': function (o, p) {
                    return o === p;
                },
                'wszQo': a5(0x114),
                'TAAzp': function (o, p) {
                    return o - p;
                },
                'PAyLN': function (o, p) {
                    return o >= p;
                },
                'RbTIi': function (o, p) {
                    return o(p);
                },
                'JBuVQ': function (o, p) {
                    return o > p;
                },
                'JcXzf': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'RbWmB': function (o, p, q) {
                    return o(p, q);
                },
                'wryUK': function (o, p) {
                    return o > p;
                }
            }, k = arguments[a5(0x101)], l = j[a6(0x13f)](k, 0x1 * -0x93f + 0xf63 + -0x621) ? f : j[a6(0x124)](h, null) ? h = Object[a6(0x13d) + a6(0x125) + a5(0x113)](f, g) : h, m;
        if (j[a5(0x124)](typeof Reflect, j[a6(0x144)]) && j[a6(0x10f)](typeof Reflect[a5(0x10d)], j[a5(0x131)]))
            l = Reflect[a5(0x10d)](e, f, g, h);
        else {
            for (var n = j[a5(0xff)](e[a5(0x101)], 0xb8b * -0x3 + 0x3fa + 0x6d * 0x48); j[a5(0x102)](n, 0x11ec + -0x141c + 0x230); n--)
                if (m = e[n])
                    l = (j[a5(0x13f)](k, 0x4c * 0x43 + 0x1cdd + 0x30be * -0x1) ? j[a5(0x129)](m, l) : j[a6(0x10b)](k, 0x1f5a + -0x1ac0 + -0x497 * 0x1) ? j[a5(0x13c)](m, f, g, l) : j[a5(0x13b)](m, f, g)) || l;
        }
        return j[a5(0x137)](k, -0xdf7 * -0x1 + -0x12ef + -0x55 * -0xf) && l && Object[a5(0x143) + a5(0x12d)](f, g, l), l;
    }, __metadata = this && this[a4(0x115)] || function (d, e) {
        var a8 = a7, a9 = a4, f = {};
        f[a8(0x118)] = function (h, i) {
            return h === i;
        }, f[a9(0x12e)] = a9(0x123), f[a8(0x105)] = function (h, i) {
            return h === i;
        }, f[a9(0x11e)] = a9(0x114);
        var g = f;
        if (g[a9(0x118)](typeof Reflect, g[a9(0x12e)]) && g[a9(0x105)](typeof Reflect[a9(0xfc)], g[a8(0x11e)]))
            return Reflect[a8(0xfc)](d, e);
    }, __importDefault = this && this[a7(0x126) + a7(0x108)] || function (c) {
        var aa = a7;
        return c && c[aa(0x122)] ? c : { 'default': c };
    }, a0 = {};
a0[a7(0x10c)] = !![], Object[a4(0x143) + a4(0x12d)](exports, a4(0x122), a0);
const sequelize_typescript_1 = require(a4(0x13a) + a4(0x11d)), Message_1 = __importDefault(require(a7(0x100))), Ticket_1 = __importDefault(require(a7(0x121))), User_1 = __importDefault(require(a7(0x139)));
let UserMessagesLog = class UserMessagesLog extends sequelize_typescript_1[a7(0x120)] {
};
__decorate([
    sequelize_typescript_1[a7(0x138)],
    sequelize_typescript_1[a7(0x111) + a7(0x11b)],
    sequelize_typescript_1[a7(0x107)],
    __metadata(a4(0x116) + 'e', Number)
], UserMessagesLog[a7(0x133)], 'id', void (-0x63 * 0x2e + -0x3d4 + -0xacf * -0x2)), __decorate([
    (-0x56d + -0x9 * 0xb3 + -0x5dc * -0x2, sequelize_typescript_1[a4(0x110)])(() => User_1[a4(0xfd)]),
    sequelize_typescript_1[a4(0x107)],
    __metadata(a4(0x116) + 'e', Number)
], UserMessagesLog[a7(0x133)], a4(0x135), void (-0x1 * 0x1a26 + -0x12c0 + -0x1673 * -0x2)), __decorate([
    (-0x2b * -0x95 + 0x1 * 0x116 + -0x539 * 0x5, sequelize_typescript_1[a4(0x11c)])(() => User_1[a7(0xfd)]),
    __metadata(a4(0x116) + 'e', User_1[a7(0xfd)])
], UserMessagesLog[a7(0x133)], a4(0xfe), void (-0x1870 + 0x1ad1 + -0x261)), __decorate([
    (-0xa0 * 0x18 + -0xc2 * -0xc + 0x1 * 0x5e8, sequelize_typescript_1[a7(0x110)])(() => Message_1[a4(0xfd)]),
    (-0x1ccd + -0x2367 + -0x201a * -0x2, sequelize_typescript_1[a7(0x142)])(null),
    sequelize_typescript_1[a7(0x12b)],
    sequelize_typescript_1[a4(0x107)],
    __metadata(a4(0x116) + 'e', String)
], UserMessagesLog[a4(0x133)], a7(0x10a), void (-0x221c * -0x1 + -0x6 * -0x4cd + -0x3eea)), __decorate([
    (-0x1d69 * 0x1 + 0x2131 + -0x3c8, sequelize_typescript_1[a4(0x11c)])(() => Message_1[a4(0xfd)], a4(0x10a)),
    __metadata(a4(0x116) + 'e', Message_1[a4(0xfd)])
], UserMessagesLog[a4(0x133)], a4(0x12c), void (0x1ea + 0xf27 * 0x2 + -0x2038 * 0x1)), __decorate([
    (-0x5e3 + -0xf3 * -0x18 + -0x10e5, sequelize_typescript_1[a7(0x110)])(() => Ticket_1[a4(0xfd)]),
    (0xd9f + -0x1 * -0x3fa + -0x1199, sequelize_typescript_1[a7(0x142)])(null),
    sequelize_typescript_1[a7(0x12b)],
    sequelize_typescript_1[a4(0x107)],
    __metadata(a7(0x116) + 'e', Number)
], UserMessagesLog[a7(0x133)], a7(0x141), void (-0x1e2 * 0x6 + 0x1 * -0x56e + 0x10ba)), __decorate([
    (0x1001 + -0x14ee + 0x4ed, sequelize_typescript_1[a7(0x11c)])(() => Ticket_1[a4(0xfd)]),
    __metadata(a4(0x116) + 'e', Ticket_1[a4(0xfd)])
], UserMessagesLog[a7(0x133)], a4(0x140), void (0x1a * 0xc8 + 0x25c * -0x8 + -0x10 * 0x17)), __decorate([
    sequelize_typescript_1[a4(0x117)],
    (-0x23b2 + -0x1996 + 0x3d48, sequelize_typescript_1[a4(0x107)])(sequelize_typescript_1[a4(0x130)][a7(0x136)](0x123a + 0x1adb + -0x5 * 0x903)),
    __metadata(a4(0x116) + 'e', Date)
], UserMessagesLog[a4(0x133)], a7(0x145), void (-0xa2a + -0xd * 0x2bb + 0x2da9)), __decorate([
    sequelize_typescript_1[a7(0x103)],
    (-0x4d * -0x79 + -0x463 * -0x5 + -0x1d2a * 0x2, sequelize_typescript_1[a4(0x107)])(sequelize_typescript_1[a4(0x130)][a7(0x136)](0x25 * 0x1 + 0x1ae1 + -0x1b00)),
    __metadata(a7(0x116) + 'e', Date)
], UserMessagesLog[a7(0x133)], a7(0x134), void (-0x43 * -0x60 + 0xe55 + 0x25 * -0x111));
var a1 = {};
function a() {
    var ab = [
        'RbWmB',
        'JcXzf',
        'getOwnProp',
        '329100IVdxwz',
        'KInHE',
        'ticket',
        'ticketId',
        'Default',
        'defineProp',
        'JSqMO',
        'createdAt',
        '__decorate',
        'metadata',
        'default',
        'user',
        'TAAzp',
        './Message',
        'length',
        'PAyLN',
        'UpdatedAt',
        '206360eZgXvr',
        'eoTmO',
        '5656716MMtvqq',
        'Column',
        'fault',
        '24VRbbbN',
        'messageId',
        'JBuVQ',
        'value',
        'decorate',
        '957158RkAtKs',
        'uTkPS',
        'ForeignKey',
        'AutoIncrem',
        '9310yyDQAw',
        'ptor',
        'function',
        '__metadata',
        'design:typ',
        'CreatedAt',
        'LqOIv',
        'eName',
        '2141656gIslJG',
        'ent',
        'BelongsTo',
        'typescript',
        'ODfUh',
        'freezeTabl',
        'Model',
        './Ticket',
        '__esModule',
        'object',
        'tWXYq',
        'ertyDescri',
        '__importDe',
        '2922HQggjt',
        'Table',
        'RbTIi',
        '990VZwyvc',
        'AllowNull',
        'message',
        'erty',
        'gpVOe',
        '1566719LxzTmV',
        'DataType',
        'wszQo',
        '8ARXcpV',
        'prototype',
        'updatedAt',
        'userId',
        'DATE',
        'wryUK',
        'PrimaryKey',
        './User',
        'sequelize-'
    ];
    a = function () {
        return ab;
    };
    return a();
}
a1[a4(0x11f) + a4(0x119)] = !![], UserMessagesLog = __decorate([(-0x3 * -0xa42 + 0x22 * -0x34 + -0x17de, sequelize_typescript_1[a7(0x128)])(a1)], UserMessagesLog), exports[a4(0xfd)] = UserMessagesLog;