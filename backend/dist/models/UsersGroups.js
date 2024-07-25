'use strict';
var a4 = b, a7 = b;
(function (c, d) {
    var a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(a2(0x8a)) / (0x17b * 0x2 + -0x8 * 0x3d9 + 0x1 * 0x1bd3) * (parseInt(a2(0xb1)) / (0x12cd + 0x3d9 + 0x54 * -0x45)) + parseInt(a3(0xaf)) / (0xd4e + 0x20d0 + -0x13f * 0x25) * (-parseInt(a2(0xb9)) / (-0x1662 + -0x53c + -0x1ba2 * -0x1)) + -parseInt(a3(0x9a)) / (0x10 * 0x21d + -0x1b * -0xad + -0x340a) * (-parseInt(a2(0x9f)) / (-0x3 * -0x855 + 0x1e7 * 0x2 + -0x1cc7)) + parseInt(a3(0x87)) / (0x1ff0 + -0xb77 + -0x1472) + -parseInt(a3(0xba)) / (-0x4b * 0x79 + -0x2 * -0x4fa + 0x5 * 0x51b) * (parseInt(a2(0x94)) / (0x9 * -0x25 + 0x2 * -0x86b + 0x122c)) + parseInt(a2(0x8c)) / (0xf25 + 0x211 * -0x5 + -0xd * 0x5e) + parseInt(a2(0xca)) / (0x2605 + 0xf58 + 0x28a * -0x15);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x28e75 + 0x371 * -0x2b1 + 0xc0e7b));
var __decorate = this && this[a4(0xc5)] || function (e, f, g, h) {
        var a5 = a4, a6 = a4, j = {
                'LPoKl': function (o, p) {
                    return o < p;
                },
                'uOCvb': function (o, p) {
                    return o === p;
                },
                'Fpkdt': function (o, p) {
                    return o === p;
                },
                'Fwhpi': a5(0x9b),
                'lDTcb': a6(0xb3),
                'pjwaL': function (o, p) {
                    return o - p;
                },
                'BqHLo': function (o, p) {
                    return o >= p;
                },
                'ZxKWf': function (o, p) {
                    return o < p;
                },
                'ltQcX': function (o, p) {
                    return o(p);
                },
                'dkimJ': function (o, p) {
                    return o > p;
                },
                'bOkYf': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'AfdXz': function (o, p, q) {
                    return o(p, q);
                }
            }, k = arguments[a5(0xc4)], l = j[a5(0xc8)](k, -0xcd2 + -0x2106 + 0x2ddb) ? f : j[a5(0x89)](h, null) ? h = Object[a5(0xbe) + a6(0xbb) + a5(0xad)](f, g) : h, m;
        if (j[a6(0xa9)](typeof Reflect, j[a5(0xc1)]) && j[a5(0xa9)](typeof Reflect[a5(0xb4)], j[a5(0xbf)]))
            l = Reflect[a5(0xb4)](e, f, g, h);
        else {
            for (var n = j[a6(0xb6)](e[a6(0xc4)], 0x66e + -0x13fb + -0xd8e * -0x1); j[a5(0x9c)](n, 0xcec + -0x1 * 0x1139 + 0x44d); n--)
                if (m = e[n])
                    l = (j[a6(0xc2)](k, 0x156 * -0x13 + -0x1 * -0x311 + 0x1654) ? j[a6(0xa3)](m, l) : j[a5(0x8b)](k, 0x5e * -0x68 + 0xaa1 * -0x1 + 0x30d4) ? j[a6(0xa8)](m, f, g, l) : j[a6(0xa6)](m, f, g)) || l;
        }
        return j[a6(0x8b)](k, -0xe6 * 0x7 + 0x2 * 0x58b + -0x4c9) && l && Object[a5(0xa4) + a5(0xc7)](f, g, l), l;
    }, __metadata = this && this[a7(0x99)] || function (d, e) {
        var a8 = a4, a9 = a4, f = {};
        f[a8(0xa5)] = function (h, i) {
            return h === i;
        }, f[a8(0xa2)] = a8(0x9b), f[a9(0xb0)] = function (h, i) {
            return h === i;
        }, f[a8(0xa0)] = a9(0xb3);
        var g = f;
        if (g[a9(0xa5)](typeof Reflect, g[a9(0xa2)]) && g[a8(0xb0)](typeof Reflect[a8(0x90)], g[a8(0xa0)]))
            return Reflect[a8(0x90)](d, e);
    }, __importDefault = this && this[a7(0xb2) + a4(0xbc)] || function (c) {
        var aa = a7;
        return c && c[aa(0x8d)] ? c : { 'default': c };
    }, a0 = {};
a0[a7(0x9e)] = !![], Object[a7(0xa4) + a7(0xc7)](exports, a4(0x8d), a0);
const sequelize_typescript_1 = require(a7(0xa7) + a4(0xa1)), User_1 = __importDefault(require(a4(0xbd))), Group_1 = __importDefault(require(a7(0xc0)));
let UsersGroups = class UsersGroups extends sequelize_typescript_1[a4(0xaa)] {
};
__decorate([
    sequelize_typescript_1[a4(0x93)],
    sequelize_typescript_1[a7(0x88) + a7(0xb7)],
    sequelize_typescript_1[a7(0x8f)],
    __metadata(a4(0xab) + 'e', Number)
], UsersGroups[a4(0x97)], 'id', void (0x69a * -0x1 + -0x8e + -0x2 * -0x394)), __decorate([
    (0x180f * -0x1 + 0x1d3 * 0x12 + -0x2ed * 0x3, sequelize_typescript_1[a7(0x91)])(() => Group_1[a7(0xc3)]),
    sequelize_typescript_1[a7(0x8f)],
    __metadata(a4(0xab) + 'e', Number)
], UsersGroups[a4(0x97)], a7(0x98), void (0x1 * 0x3e3 + -0x4 * -0x1cd + -0xb17 * 0x1)), __decorate([
    (0xbf * -0x29 + 0x5 * -0x3ff + -0x1949 * -0x2, sequelize_typescript_1[a7(0xb5)])(() => Group_1[a7(0xc3)]),
    __metadata(a4(0xab) + 'e', Group_1[a4(0xc3)])
], UsersGroups[a4(0x97)], a4(0xc9), void (-0x769 * -0x5 + 0x108d + -0x359a)), __decorate([
    (0x222 + 0xce3 * -0x3 + 0x2487, sequelize_typescript_1[a7(0x91)])(() => User_1[a4(0xc3)]),
    sequelize_typescript_1[a7(0x8f)],
    __metadata(a4(0xab) + 'e', Number)
], UsersGroups[a4(0x97)], a4(0x9d), void (0xdd4 + 0x2e * 0xd4 + -0x33ec)), __decorate([
    (-0x375 + 0x5b * -0x5e + -0x24df * -0x1, sequelize_typescript_1[a7(0xb5)])(() => User_1[a4(0xc3)]),
    __metadata(a7(0xab) + 'e', User_1[a4(0xc3)])
], UsersGroups[a4(0x97)], a4(0xae), void (0x1374 + 0x61b * -0x1 + -0xd59)), __decorate([
    sequelize_typescript_1[a4(0xc6)],
    __metadata(a7(0xab) + 'e', Date)
], UsersGroups[a4(0x97)], a4(0x95), void (-0x1 * 0x1158 + 0xadd + 0x67b)), __decorate([
    sequelize_typescript_1[a4(0x8e)],
    __metadata(a7(0xab) + 'e', Date)
], UsersGroups[a4(0x97)], a7(0x92), void (-0x1f7 * 0xf + 0x1 * -0x24c3 + 0x423c));
var a1 = {};
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1435 + -0x836 + 0x5bc * -0x2);
        var h = e[f];
        return h;
    }, b(c, d);
}
a1[a7(0xac) + a7(0xb8)] = !![], UsersGroups = __decorate([(-0xf5f * -0x2 + -0x25a1 + 0x6e3, sequelize_typescript_1[a7(0x96)])(a1)], UsersGroups), exports[a7(0xc3)] = UsersGroups;
function a() {
    var ab = [
        '180912IwPfQa',
        'ertyDescri',
        'fault',
        './User',
        'getOwnProp',
        'lDTcb',
        './Group',
        'Fwhpi',
        'ZxKWf',
        'default',
        'length',
        '__decorate',
        'CreatedAt',
        'erty',
        'LPoKl',
        'group',
        '20924299WbfRgE',
        '330806iyOrJk',
        'AutoIncrem',
        'uOCvb',
        '609473HoSXfQ',
        'dkimJ',
        '1016480vLomrW',
        '__esModule',
        'UpdatedAt',
        'Column',
        'metadata',
        'ForeignKey',
        'updatedAt',
        'PrimaryKey',
        '261TriOqV',
        'createdAt',
        'Table',
        'prototype',
        'groupId',
        '__metadata',
        '4835yBQtrD',
        'object',
        'BqHLo',
        'userId',
        'value',
        '498dKySBl',
        'PSWtM',
        'typescript',
        'KJLlC',
        'ltQcX',
        'defineProp',
        'Ztozd',
        'AfdXz',
        'sequelize-',
        'bOkYf',
        'Fpkdt',
        'Model',
        'design:typ',
        'freezeTabl',
        'ptor',
        'user',
        '773139bJJShl',
        'yBuCi',
        '2bdtpih',
        '__importDe',
        'function',
        'decorate',
        'BelongsTo',
        'pjwaL',
        'ent',
        'eName',
        '8CuMqwP'
    ];
    a = function () {
        return ab;
    };
    return a();
}