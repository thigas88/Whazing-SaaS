'use strict';
var a4 = b, a7 = b;
(function (c, d) {
    var a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(a2(0xa3)) / (0x257c * 0x1 + 0x824 + -0x2d9f) + -parseInt(a3(0xaa)) / (-0x1b1f + -0x15 + -0x1b * -0x102) * (parseInt(a3(0xc3)) / (0x1d99 + -0x2 * 0xd06 + -0x38a)) + -parseInt(a2(0xc5)) / (0xef1 * -0x1 + -0x4a * -0x18 + 0x805) * (-parseInt(a3(0xcd)) / (0xe28 + 0x2 * 0xc37 + -0x2691)) + -parseInt(a2(0x89)) / (0x2323 + 0x5 * -0x18e + -0x1b57) + parseInt(a3(0xc0)) / (0x1c02 + 0x6 * -0xad + -0x17ed) * (parseInt(a3(0xae)) / (0x15 * 0xe3 + -0x11b * 0x1b + 0xb42 * 0x1)) + parseInt(a2(0x8d)) / (-0x1 * 0x713 + -0x1 * 0x1af5 + 0x13 * 0x1cb) * (-parseInt(a2(0xc8)) / (0x6 * -0x1d5 + -0x220c + 0x2d14)) + parseInt(a2(0xbf)) / (-0x15a * 0x2 + -0xebb + -0x117a * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b7dcd * -0x1 + 0x10b7a0 + -0x5884 * -0x4b));
var __decorate = this && this[a4(0xa5)] || function (e, f, g, h) {
        var a5 = a4, a6 = a4, j = {
                'PSaRa': function (o, p) {
                    return o < p;
                },
                'hugft': function (o, p) {
                    return o === p;
                },
                'WiUqU': function (o, p) {
                    return o === p;
                },
                'mXeTS': a5(0xbb),
                'inmKT': function (o, p) {
                    return o === p;
                },
                'Csyhh': a6(0x9a),
                'aXOua': function (o, p) {
                    return o - p;
                },
                'lvJzb': function (o, p) {
                    return o >= p;
                },
                'xGPXf': function (o, p) {
                    return o < p;
                },
                'htOzE': function (o, p) {
                    return o(p);
                },
                'adPHd': function (o, p) {
                    return o > p;
                },
                'PkNrQ': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'VGRNe': function (o, p, q) {
                    return o(p, q);
                },
                'RtqKU': function (o, p) {
                    return o > p;
                }
            }, k = arguments[a6(0x8f)], l = j[a5(0xb7)](k, 0x9ce * -0x2 + 0x13 * -0xb2 + 0x20d5) ? f : j[a5(0xac)](h, null) ? h = Object[a5(0xa1) + a5(0x8b) + a6(0xb1)](f, g) : h, m;
        if (j[a6(0x93)](typeof Reflect, j[a5(0x94)]) && j[a6(0xb8)](typeof Reflect[a6(0xc7)], j[a5(0xc6)]))
            l = Reflect[a5(0xc7)](e, f, g, h);
        else {
            for (var n = j[a5(0x8c)](e[a6(0x8f)], -0xeae * -0x1 + -0x3d4 + -0xad9); j[a6(0xbc)](n, 0x9f * 0x33 + 0xe2 * -0x3 + -0x1d07 * 0x1); n--)
                if (m = e[n])
                    l = (j[a6(0xcc)](k, 0x1e74 * 0x1 + 0x6f6 + -0x2567) ? j[a6(0x95)](m, l) : j[a6(0xa6)](k, 0x56 * -0x50 + 0x23c + 0x18a7) ? j[a5(0xb2)](m, f, g, l) : j[a5(0xab)](m, f, g)) || l;
        }
        return j[a5(0x9c)](k, -0x1385 + -0x135c + 0x26e4) && l && Object[a5(0xa7) + a5(0xb5)](f, g, l), l;
    }, __metadata = this && this[a7(0xc1)] || function (d, e) {
        var a8 = a4, a9 = a4, f = {};
        f[a8(0x96)] = function (h, i) {
            return h === i;
        }, f[a8(0xbe)] = a8(0xbb), f[a9(0xaf)] = function (h, i) {
            return h === i;
        }, f[a9(0x8e)] = a8(0x9a);
        var g = f;
        if (g[a8(0x96)](typeof Reflect, g[a8(0xbe)]) && g[a9(0xaf)](typeof Reflect[a9(0xbd)], g[a9(0x8e)]))
            return Reflect[a9(0xbd)](d, e);
    }, __importDefault = this && this[a7(0xcb) + a7(0xb9)] || function (c) {
        var aa = a4;
        return c && c[aa(0xc2)] ? c : { 'default': c };
    }, a0 = {};
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1304 + 0x72f + 0x1 * -0x19ab);
        var h = e[f];
        return h;
    }, b(c, d);
}
a0[a7(0xba)] = !![], Object[a7(0xa7) + a4(0xb5)](exports, a7(0xc2), a0);
const sequelize_typescript_1 = require(a4(0xb3) + a4(0xc9)), User_1 = __importDefault(require(a4(0xca))), Queue_1 = __importDefault(require(a4(0xad)));
let UsersQueues = class UsersQueues extends sequelize_typescript_1[a4(0x92)] {
};
__decorate([
    sequelize_typescript_1[a4(0xa4)],
    sequelize_typescript_1[a7(0x9f) + a7(0xa2)],
    sequelize_typescript_1[a4(0xc4)],
    __metadata(a7(0x9e) + 'e', Number)
], UsersQueues[a4(0x90)], 'id', void (0xac7 + -0x134c + 0x885)), __decorate([
    (0x29a + 0x1152 + -0x13ec, sequelize_typescript_1[a7(0x98)])(() => Queue_1[a4(0xb4)]),
    sequelize_typescript_1[a4(0xc4)],
    __metadata(a7(0x9e) + 'e', Number)
], UsersQueues[a7(0x90)], a4(0x99), void (-0x2610 + -0x991 + 0x2fa1)), __decorate([
    (-0x16 * 0x139 + -0x1157 + 0x2c3d, sequelize_typescript_1[a4(0xb0)])(() => Queue_1[a4(0xb4)]),
    __metadata(a4(0x9e) + 'e', Queue_1[a4(0xb4)])
], UsersQueues[a4(0x90)], a4(0xb6), void (-0x4 * 0x2cf + -0x1e4b + -0x1 * -0x2987)), __decorate([
    (-0x1a09 + 0x2 * 0xe24 + -0x19 * 0x17, sequelize_typescript_1[a7(0x98)])(() => User_1[a7(0xb4)]),
    sequelize_typescript_1[a7(0xc4)],
    __metadata(a7(0x9e) + 'e', Number)
], UsersQueues[a7(0x90)], a7(0x91), void (-0x638 * -0x1 + 0x1 * -0x13d + -0x4fb)), __decorate([
    (-0xde1 * 0x1 + -0x24f * -0x3 + 0x6f4, sequelize_typescript_1[a7(0xb0)])(() => User_1[a4(0xb4)]),
    __metadata(a7(0x9e) + 'e', User_1[a4(0xb4)])
], UsersQueues[a7(0x90)], a4(0x88), void (0x203 * -0xb + -0x90f + 0x1f30)), __decorate([
    sequelize_typescript_1[a7(0x9b)],
    __metadata(a4(0x9e) + 'e', Date)
], UsersQueues[a4(0x90)], a7(0x97), void (-0x1e0a + -0x18c2 + -0x1 * -0x36cc)), __decorate([
    sequelize_typescript_1[a4(0xa0)],
    __metadata(a4(0x9e) + 'e', Date)
], UsersQueues[a4(0x90)], a7(0x8a), void (-0x2 * -0xe2f + -0x23e + -0x1a20));
var a1 = {};
function a() {
    var ab = [
        '12ZfQpWX',
        'Column',
        '5941336fDEzRb',
        'Csyhh',
        'decorate',
        '49130KoLCsA',
        'typescript',
        './User',
        '__importDe',
        'xGPXf',
        '5muyXLO',
        'user',
        '7695126gNHrxb',
        'updatedAt',
        'ertyDescri',
        'aXOua',
        '1629cTgQVu',
        'oEPJq',
        'length',
        'prototype',
        'userId',
        'Model',
        'WiUqU',
        'mXeTS',
        'htOzE',
        'SbWNO',
        'createdAt',
        'ForeignKey',
        'queueId',
        'function',
        'CreatedAt',
        'RtqKU',
        'freezeTabl',
        'design:typ',
        'AutoIncrem',
        'UpdatedAt',
        'getOwnProp',
        'ent',
        '415052RpTqyp',
        'PrimaryKey',
        '__decorate',
        'adPHd',
        'defineProp',
        'eName',
        'Table',
        '698384UkqxMp',
        'VGRNe',
        'hugft',
        './Queue',
        '320AryzbQ',
        'cIwLA',
        'BelongsTo',
        'ptor',
        'PkNrQ',
        'sequelize-',
        'default',
        'erty',
        'queue',
        'PSaRa',
        'inmKT',
        'fault',
        'value',
        'object',
        'lvJzb',
        'metadata',
        'gpdxq',
        '15944753taXNAw',
        '212107fQHkvO',
        '__metadata',
        '__esModule'
    ];
    a = function () {
        return ab;
    };
    return a();
}
a1[a4(0x9d) + a7(0xa8)] = !![], UsersQueues = __decorate([(-0x11dd + -0x448 * -0x5 + -0x38b * 0x1, sequelize_typescript_1[a4(0xa9)])(a1)], UsersQueues), exports[a4(0xb4)] = UsersQueues;