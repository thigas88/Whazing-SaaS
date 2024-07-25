'use strict';
const a3 = b, a6 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a1(0x240)) / (0xb7 * 0x12 + 0x5 * -0x729 + 0x2de * 0x8) + -parseInt(a1(0x1f9)) / (0x19c0 + 0x2458 + -0x3 * 0x14b2) * (-parseInt(a2(0x259)) / (0x10a4 + -0x139b + 0x1 * 0x2fa)) + parseInt(a1(0x1f5)) / (-0x39a + -0x1920 + 0x1cbe) + parseInt(a2(0x257)) / (-0x3d + 0x26c3 + -0x2681 * 0x1) * (parseInt(a2(0x236)) / (-0x518 + -0x514 + 0xf * 0xae)) + parseInt(a2(0x22a)) / (-0x817 * -0x3 + -0x1a7f + 0x241 * 0x1) + parseInt(a2(0x214)) / (0x71 * 0x45 + -0x1f60 + -0x3 * -0x51) * (-parseInt(a1(0x200)) / (0x4 * -0x54b + 0x13ce + 0x1 * 0x167)) + parseInt(a2(0x225)) / (0x14e2 + 0x1763 + -0x2c3b) * (-parseInt(a1(0x21f)) / (-0xc25 * 0x1 + 0x1 * 0x1d + 0xc13));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x165 * 0x22c + -0x44769 + -0x6229 * -0xd));
var __decorate = this && this[a3(0x1fd)] || function (e, f, g, h) {
        const a4 = a3, a5 = a3, j = {
                'mMRAe': function (o, p) {
                    return o < p;
                },
                'BBniq': function (o, p) {
                    return o === p;
                },
                'bAYZC': a4(0x251),
                'GZZCo': function (o, p) {
                    return o === p;
                },
                'AcxNZ': a5(0x249),
                'LojDr': function (o, p) {
                    return o - p;
                },
                'VSlZF': function (o, p) {
                    return o >= p;
                },
                'eqVMM': function (o, p) {
                    return o(p);
                },
                'KuUJV': function (o, p) {
                    return o > p;
                },
                'pzGfJ': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'LUWEf': function (o, p, q) {
                    return o(p, q);
                },
                'zYdUH': function (o, p) {
                    return o > p;
                }
            };
        var k = arguments[a5(0x224)], l = j[a5(0x22d)](k, -0x71 * 0x14 + 0xc2d * -0x1 + 0x1504) ? f : j[a5(0x235)](h, null) ? h = Object[a4(0x216) + a4(0x21c) + a4(0x24b)](f, g) : h, m;
        if (j[a4(0x235)](typeof Reflect, j[a5(0x245)]) && j[a5(0x22e)](typeof Reflect[a4(0x219)], j[a5(0x1f4)]))
            l = Reflect[a5(0x219)](e, f, g, h);
        else {
            for (var n = j[a4(0x1f3)](e[a4(0x224)], -0x989 + -0x14f2 + -0x1 * -0x1e7c); j[a5(0x1ff)](n, 0x539 + 0x8 * -0x49e + 0x1fb7); n--)
                if (m = e[n])
                    l = (j[a5(0x22d)](k, 0x7 * 0x3fd + 0x116 + -0x1 * 0x1cfe) ? j[a5(0x1fe)](m, l) : j[a5(0x24a)](k, 0x1b56 + -0x1 * 0x24d7 + 0x1c * 0x57) ? j[a5(0x23d)](m, f, g, l) : j[a5(0x208)](m, f, g)) || l;
        }
        return j[a4(0x221)](k, -0x1c55 * 0x1 + -0x39e * 0x4 + 0x112 * 0x28) && l && Object[a5(0x230) + a5(0x217)](f, g, l), l;
    }, __metadata = this && this[a3(0x23a)] || function (d, e) {
        const a7 = a6, a8 = a3, f = {};
        f[a7(0x234)] = function (h, i) {
            return h === i;
        }, f[a8(0x1f6)] = a8(0x251), f[a7(0x22c)] = function (h, i) {
            return h === i;
        }, f[a7(0x229)] = a7(0x249);
        const g = f;
        if (g[a8(0x234)](typeof Reflect, g[a7(0x1f6)]) && g[a8(0x22c)](typeof Reflect[a7(0x21d)], g[a8(0x229)]))
            return Reflect[a7(0x21d)](d, e);
    }, __importDefault = this && this[a3(0x222) + a3(0x232)] || function (c) {
        const a9 = a6;
        return c && c[a9(0x1f2)] ? c : { 'default': c };
    };
const a0 = {};
a0[a3(0x1f7)] = !![], Object[a6(0x230) + a3(0x217)](exports, a3(0x1f2), a0);
const sequelize_typescript_1 = require(a3(0x243) + a6(0x201)), bcryptjs_1 = require(a6(0x213)), Ticket_1 = __importDefault(require(a3(0x242))), Queue_1 = __importDefault(require(a6(0x22b))), UsersQueues_1 = __importDefault(require(a6(0x207) + a3(0x258))), Tenant_1 = __importDefault(require(a6(0x1f1))), Contact_1 = __importDefault(require(a3(0x210)));
let User = class User extends sequelize_typescript_1[a6(0x24c)] {
    constructor() {
        const aa = a6, ab = a3, d = {};
        d[aa(0x1fc)] = aa(0x205) + 'sh';
        const e = d;
        super(...arguments), this[aa(0x237) + aa(0x227)] = async f => {
            const ac = aa, ad = ab;
            return (0xe8b + 0x2689 + -0x3514, bcryptjs_1[ac(0x206)])(f, this[ad(0x253) + 'ue'](e[ad(0x1fc)]));
        };
    }
};
User[a3(0x23b) + 'rd'] = async c => {
    const ae = a3, af = a3;
    c[ae(0x20d)] && (c[ae(0x205) + 'sh'] = await (0x1971 + -0x1 * 0xbcf + -0xda2, bcryptjs_1[ae(0x21e)])(c[af(0x20d)], 0x25ae * -0x1 + 0x119c + 0x141a));
}, __decorate([
    sequelize_typescript_1[a6(0x254)],
    sequelize_typescript_1[a6(0x252) + a6(0x233)],
    sequelize_typescript_1[a6(0x239)],
    __metadata(a3(0x202) + 'e', Number)
], User[a6(0x24d)], 'id', void (-0x26c0 + -0x1 * -0xbc1 + 0x1aff)), __decorate([
    sequelize_typescript_1[a6(0x239)],
    __metadata(a6(0x202) + 'e', String)
], User[a6(0x24d)], a6(0x238), void (-0x1 * 0x24fd + -0x1c3 * 0x3 + 0x2a46)), __decorate([
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', String)
], User[a6(0x24d)], a3(0x20b), void (-0xe74 + 0xb0f * 0x1 + -0x1 * -0x365)), __decorate([
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', String)
], User[a3(0x24d)], a6(0x1f8), void (-0x128b + -0x155c + 0x27e7)), __decorate([
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', String)
], User[a6(0x24d)], a6(0x223) + a6(0x227), void (-0x3 * -0xa06 + 0xaf1 * -0x3 + 0x2f * 0xf)), __decorate([
    (-0x164b + -0x45e * -0x1 + -0x11ed * -0x1, sequelize_typescript_1[a3(0x239)])(sequelize_typescript_1[a6(0x256)][a3(0x20e)]),
    __metadata(a6(0x202) + 'e', String)
], User[a6(0x24d)], a3(0x20d), void (0x4 * 0x53f + 0x1 * -0x1405 + -0xf7)), __decorate([
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', String)
], User[a3(0x24d)], a3(0x205) + 'sh', void (-0xb * 0x12d + 0x438 + 0x8b7)), __decorate([
    (0x75e + 0x2 * -0x7b + -0x668, sequelize_typescript_1[a6(0x244)])(-0x259 * -0x9 + -0x422 * -0x2 + -0x1d65),
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', Number)
], User[a6(0x24d)], a3(0x248) + 'on', void (-0x14d2 + 0x22fd + -0xe2b)), __decorate([
    (0x16 * 0xb3 + 0x247b + 0x30d * -0x11, sequelize_typescript_1[a6(0x244)])(a3(0x211)),
    sequelize_typescript_1[a6(0x239)],
    __metadata(a3(0x202) + 'e', String)
], User[a6(0x24d)], a6(0x23c), void (0x2170 + 0x1e7 * 0x3 + -0x2725)), __decorate([
    sequelize_typescript_1[a6(0x231)],
    __metadata(a6(0x202) + 'e', Date)
], User[a3(0x24d)], a3(0x20f), void (-0xb97 + 0xb7b * -0x3 + 0x2e08)), __decorate([
    sequelize_typescript_1[a3(0x203)],
    __metadata(a6(0x202) + 'e', Date)
], User[a3(0x24d)], a6(0x215), void (-0x600 + -0x10dc + 0x4 * 0x5b7)), __decorate([
    (-0x121d * 0x2 + -0xe2c + 0x3266, sequelize_typescript_1[a3(0x25a)])(() => Ticket_1[a6(0x24f)]),
    __metadata(a6(0x202) + 'e', Array)
], User[a6(0x24d)], a3(0x22f), void (-0x5ab * 0x4 + 0xf88 + -0x724 * -0x1)), __decorate([
    (0x1 * 0x1f6a + 0x9 * -0xd + 0x13d * -0x19, sequelize_typescript_1[a3(0x247) + a6(0x20c)])(() => Queue_1[a3(0x24f)], () => UsersQueues_1[a3(0x24f)], a3(0x21a), a6(0x20a)),
    __metadata(a6(0x202) + 'e', Array)
], User[a3(0x24d)], a6(0x228), void (0x1e8 + 0x239f + -0x2587)), __decorate([
    (0x2 * 0xf69 + 0x12cb + 0xd * -0x3d1, sequelize_typescript_1[a3(0x247) + a6(0x20c)])(() => Contact_1[a6(0x24f)], () => Ticket_1[a6(0x24f)], a6(0x21a), a6(0x209)),
    __metadata(a3(0x202) + 'e', Array)
], User[a3(0x24d)], a3(0x1fa), void (-0x9 * 0x21e + -0x287 * 0xe + -0xd9c * -0x4)), __decorate([
    (0x74f + -0x1ed2 + 0x1783, sequelize_typescript_1[a6(0x220)])(() => Tenant_1[a6(0x24f)]),
    sequelize_typescript_1[a6(0x239)],
    __metadata(a6(0x202) + 'e', Number)
], User[a3(0x24d)], a3(0x241), void (-0x2 * 0x41b + -0x1 * 0x19a5 + 0x6b * 0x51)), __decorate([
    (0x13fc + 0x1 * 0x199f + 0x1d3 * -0x19, sequelize_typescript_1[a6(0x204)])(() => Tenant_1[a6(0x24f)]),
    __metadata(a3(0x202) + 'e', Tenant_1[a3(0x24f)])
], User[a3(0x24d)], a6(0x226), void (0x10e4 + -0x560 + 0x4 * -0x2e1)), __decorate([
    sequelize_typescript_1[a6(0x239)],
    __metadata(a6(0x202) + 'e', Date)
], User[a3(0x24d)], a6(0x1fb), void (0x21d7 + 0x2f * -0xc + -0x485 * 0x7)), __decorate([
    sequelize_typescript_1[a3(0x239)],
    __metadata(a3(0x202) + 'e', Date)
], User[a3(0x24d)], a3(0x23e), void (-0x2154 + 0x2359 + -0x205)), __decorate([
    sequelize_typescript_1[a6(0x239)],
    __metadata(a3(0x202) + 'e', Date)
], User[a3(0x24d)], a6(0x21b), void (0x10b5 + -0x1e6b * -0x1 + -0x2f20)), __decorate([
    sequelize_typescript_1[a6(0x239)],
    __metadata(a3(0x202) + 'e', Boolean)
], User[a6(0x24d)], a6(0x24e), void (0x2a7 + 0x1e6 + -0x48d)), __decorate([
    (0x2c * -0x7f + -0x19fb + 0x2fcf, sequelize_typescript_1[a6(0x244)])({}),
    sequelize_typescript_1[a3(0x218)],
    (-0x2623 + 0x24a + 0x17 * 0x18f, sequelize_typescript_1[a6(0x239)])(sequelize_typescript_1[a3(0x256)][a3(0x246)]),
    __metadata(a3(0x202) + 'e', Object)
], User[a6(0x24d)], a6(0x212), void (-0x4 * -0x904 + 0x1b7 * -0x5 + -0x1b7d)), __decorate([
    sequelize_typescript_1[a6(0x255) + 'te'],
    sequelize_typescript_1[a3(0x23f) + 'te'],
    __metadata(a6(0x202) + 'e', Object)
], User, a3(0x23b) + 'rd', void (-0x823 * 0x2 + 0x2597 + -0x1551)), User = __decorate([sequelize_typescript_1[a6(0x250)]], User), exports[a3(0x24f)] = User;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x95 * -0x3 + -0xaec + 0xb1e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const ag = [
        '3uCtsXt',
        'HasMany',
        './Tenant',
        '__esModule',
        'LojDr',
        'AcxNZ',
        '1243444fvSVnC',
        'TPTim',
        'value',
        'status',
        '782788VAUqck',
        'Contact',
        'lastLogin',
        'Uuydy',
        '__decorate',
        'eqVMM',
        'VSlZF',
        '1231209NiVvUs',
        'typescript',
        'design:typ',
        'UpdatedAt',
        'BelongsTo',
        'passwordHa',
        'compare',
        './UsersQue',
        'LUWEf',
        'contactId',
        'queueId',
        'email',
        'any',
        'password',
        'VIRTUAL',
        'createdAt',
        './Contact',
        'admin',
        'configs',
        'bcryptjs',
        '16KWeVCP',
        'updatedAt',
        'getOwnProp',
        'erty',
        'AllowNull',
        'decorate',
        'userId',
        'lastLogout',
        'ertyDescri',
        'metadata',
        'hash',
        '2236355CGdgsT',
        'ForeignKey',
        'zYdUH',
        '__importDe',
        'resetPassw',
        'length',
        '50oJwdZC',
        'tenant',
        'ord',
        'queues',
        'cGEwZ',
        '980910RMTPfk',
        './Queue',
        'rLEeU',
        'mMRAe',
        'GZZCo',
        'tickets',
        'defineProp',
        'CreatedAt',
        'fault',
        'ent',
        'zsjWk',
        'BBniq',
        '6wEyfUa',
        'checkPassw',
        'name',
        'Column',
        '__metadata',
        'hashPasswo',
        'profile',
        'pzGfJ',
        'lastOnline',
        'BeforeCrea',
        '413227CAeYKd',
        'tenantId',
        './Ticket',
        'sequelize-',
        'Default',
        'bAYZC',
        'JSON',
        'BelongsToM',
        'tokenVersi',
        'function',
        'KuUJV',
        'ptor',
        'Model',
        'prototype',
        'isOnline',
        'default',
        'Table',
        'object',
        'AutoIncrem',
        'getDataVal',
        'PrimaryKey',
        'BeforeUpda',
        'DataType',
        '1396295SAUYWP',
        'ues'
    ];
    a = function () {
        return ag;
    };
    return a();
}