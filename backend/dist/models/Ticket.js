'use strict';
const a4 = b, a7 = b;
(function (c, d) {
    const a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a2(0x1c4)) / (0xf9e + -0x2514 + -0x44b * -0x5) + -parseInt(a2(0x1cc)) / (-0x474 + 0x179 * -0x4 + 0xa5a) + parseInt(a3(0x19a)) / (-0x1a5 * -0x15 + -0x1342 * -0x2 + -0x490a) + parseInt(a2(0x18f)) / (-0x179a + -0x157e + 0x2d1c) * (parseInt(a3(0x18c)) / (0x1d86 + -0x1f07 * 0x1 + 0xd * 0x1e)) + -parseInt(a3(0x18e)) / (-0x23ba + -0x20 * -0x4 + 0x2340) * (parseInt(a3(0x1bb)) / (-0x17c + -0x59 * -0x41 + -0x1516)) + parseInt(a2(0x1b9)) / (0x2 * -0x3a1 + -0xbf6 * -0x3 + -0x16e * 0x14) * (parseInt(a2(0x1d3)) / (0x80 * 0x2b + 0x7d + 0x5 * -0x464)) + -parseInt(a2(0x1a1)) / (0x95 * 0x7 + -0xa7 * 0x5 + -0xc6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8c1eb + -0x19da * -0x97 + -0x1 * -0x49fb7));
var __decorate = this && this[a4(0x1d9)] || function (e, f, g, h) {
        const a5 = a4, a6 = a4, j = {
                'TRaos': function (o, p) {
                    return o < p;
                },
                'ygXOr': function (o, p) {
                    return o === p;
                },
                'bhTcb': a5(0x1db),
                'yVeWT': a6(0x1c9),
                'mJUyW': function (o, p) {
                    return o - p;
                },
                'Syuyc': function (o, p) {
                    return o >= p;
                },
                'zLiCM': function (o, p) {
                    return o < p;
                },
                'Tywmk': function (o, p) {
                    return o(p);
                },
                'PJstk': function (o, p) {
                    return o > p;
                },
                'XrKGB': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'UavsM': function (o, p, q) {
                    return o(p, q);
                }
            };
        var k = arguments[a6(0x1f1)], l = j[a6(0x1bd)](k, 0xdc + 0x8b7 + -0x990) ? f : j[a6(0x196)](h, null) ? h = Object[a6(0x19c) + a5(0x181) + a6(0x1da)](f, g) : h, m;
        if (j[a5(0x196)](typeof Reflect, j[a6(0x1d1)]) && j[a5(0x196)](typeof Reflect[a5(0x1e2)], j[a6(0x1c5)]))
            l = Reflect[a6(0x1e2)](e, f, g, h);
        else {
            for (var n = j[a6(0x1e4)](e[a5(0x1f1)], 0x1 * -0x1daa + -0x13e8 + 0x715 * 0x7); j[a5(0x1af)](n, -0x1fa1 + -0x703 * 0x3 + 0x34aa); n--)
                if (m = e[n])
                    l = (j[a6(0x1b3)](k, 0x1108 + 0xb4a + -0x1c4f) ? j[a5(0x187)](m, l) : j[a6(0x1b0)](k, -0x57d + 0xa9 + 0x4d7) ? j[a6(0x1c1)](m, f, g, l) : j[a6(0x192)](m, f, g)) || l;
        }
        return j[a6(0x1b0)](k, -0x1a26 * 0x1 + 0x11b * -0xc + 0x276d) && l && Object[a5(0x1a4) + a5(0x17c)](f, g, l), l;
    }, __metadata = this && this[a4(0x1e8)] || function (d, e) {
        const a8 = a7, a9 = a4, f = {};
        f[a8(0x1ec)] = function (h, i) {
            return h === i;
        }, f[a9(0x1f0)] = a8(0x1db), f[a8(0x1f8)] = a8(0x1c9);
        const g = f;
        if (g[a9(0x1ec)](typeof Reflect, g[a9(0x1f0)]) && g[a9(0x1ec)](typeof Reflect[a9(0x177)], g[a9(0x1f8)]))
            return Reflect[a9(0x177)](d, e);
    }, __importDefault = this && this[a4(0x1b7) + a7(0x1ad)] || function (c) {
        const aa = a7;
        return c && c[aa(0x1e1)] ? c : { 'default': c };
    }, Ticket_1;
const a0 = {};
a0[a4(0x173)] = !![], Object[a7(0x1a4) + a4(0x17c)](exports, a4(0x1e1), a0);
const sequelize_typescript_1 = require(a7(0x1e9) + a4(0x1a9)), date_fns_1 = require(a4(0x1e6)), Contact_1 = __importDefault(require(a7(0x1f2))), Message_1 = __importDefault(require(a4(0x1ab))), User_1 = __importDefault(require(a4(0x1ca))), Whatsapp_1 = __importDefault(require(a7(0x1cd))), AutoReply_1 = __importDefault(require(a7(0x1cf) + 'y')), StepsReply_1 = __importDefault(require(a7(0x1b5) + 'ly')), Queue_1 = __importDefault(require(a7(0x188))), Tenant_1 = __importDefault(require(a7(0x1a3))), MessageOffLine_1 = __importDefault(require(a4(0x1c0) + a7(0x1f5))), ChatFlow_1 = __importDefault(require(a7(0x1c8)));
let Ticket = Ticket_1 = class Ticket extends sequelize_typescript_1[a7(0x1d6)] {
    static [a7(0x1a0) + a7(0x193)](d, e) {
        const ab = a4, ac = a7, f = {};
        f[ab(0x1aa)] = ab(0x1c7) + ab(0x1df);
        const g = f, h = (-0x173b + 0x1 * 0x2441 + -0xd06 * 0x1, date_fns_1[ac(0x1dd)])(d, g[ac(0x1aa)]);
        return '' + h + e;
    }
    async [a4(0x1ac) + a4(0x183)]() {
        const ad = a4, ae = a4;
        return !this[ad(0x1b1)] && (this[ad(0x1b1)] = Ticket_1[ae(0x1a0) + ae(0x193)](this[ad(0x172)], this['id']), await this[ad(0x1d8)]()), this[ae(0x1b1)];
    }
};
function a() {
    const af = [
        '2661294zpRHQI',
        'CreatedAt',
        'getOwnProp',
        'HasMany',
        'default',
        'AutoIncrem',
        'generatePr',
        '26220900mCNlaw',
        'answered',
        './Tenant',
        'defineProp',
        'pending',
        'BelongsTo',
        'fLine',
        'messagesOf',
        'typescript',
        'hNBYi',
        './Message',
        'ensureProt',
        'fault',
        'tenant',
        'Syuyc',
        'PJstk',
        'protocol',
        'chatFlow',
        'zLiCM',
        'closedAt',
        './StepsRep',
        'PrimaryKey',
        '__importDe',
        'updatedAt',
        '4488MBMhFH',
        'DATE',
        '12621luMmdB',
        'status',
        'TRaos',
        'essages',
        'apiConfig',
        './MessageO',
        'XrKGB',
        'BIGINT',
        'startedAtt',
        '846416lbUCCI',
        'yVeWT',
        'ence',
        'yyyyMMddHH',
        './ChatFlow',
        'function',
        './User',
        'messages',
        '2076498ucmvjA',
        './Whatsapp',
        'Column',
        './AutoRepl',
        'ctionBot',
        'bhTcb',
        'isCreated',
        '21510npBzKi',
        'autoReply',
        'whatsapp',
        'Model',
        'Message',
        'save',
        '__decorate',
        'ptor',
        'object',
        'STRING',
        'format',
        'endanceAt',
        'mmss',
        'ages',
        '__esModule',
        'decorate',
        'Table',
        'mJUyW',
        'VIRTUAL',
        'date-fns',
        'stepsReply',
        '__metadata',
        'sequelize-',
        'scheduledM',
        'botRetries',
        'SqQnG',
        'stepChatFl',
        'mand',
        'prototype',
        'oFVzK',
        'length',
        './Contact',
        'plyId',
        'defaultVal',
        'ffLine',
        'lastMessag',
        'AllowNull',
        'eTAZM',
        'isGroup',
        'createdAt',
        'value',
        'queueId',
        'isTransfer',
        'userId',
        'metadata',
        'user',
        'DataType',
        'contact',
        'JSONB',
        'erty',
        'chatFlowId',
        'stepAutoRe',
        'whatsappId',
        'ForeignKey',
        'ertyDescri',
        'autoReplyI',
        'ocol',
        'contactId',
        'eAt',
        'UpdatedAt',
        'Tywmk',
        './Queue',
        'isActiveDe',
        'queue',
        'lastIntera',
        '6755nMeeuK',
        'unreadMess',
        '252VIMjRM',
        '4116FIbZBg',
        'channel',
        'design:typ',
        'UavsM',
        'otocol',
        'Default',
        'isFarewell',
        'ygXOr',
        'INTEGER',
        'tenantId',
        'ent'
    ];
    a = function () {
        return af;
    };
    return a();
}
__decorate([
    sequelize_typescript_1[a4(0x1b6)],
    sequelize_typescript_1[a4(0x19f) + a7(0x199)],
    sequelize_typescript_1[a4(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], 'id', void (-0x15f6 * -0x1 + -0x1c4b + 0x655));
const a1 = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3e0 + 0x1cae + -0x1f1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
a1[a4(0x1f4) + 'ue'] = a4(0x1a5), __decorate([
    (0x51 * -0x1d + -0x106b + -0x3 * -0x888, sequelize_typescript_1[a4(0x1ce)])(a1),
    __metadata(a7(0x191) + 'e', String)
], Ticket[a4(0x1ef)], a7(0x1bc), void (0xc * -0x2ea + 0x11a + -0x5 * -0x6c6)), __decorate([
    sequelize_typescript_1[a4(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a4(0x18d) + a7(0x1e0), void (-0x17c5 + -0x1 * 0x1d5c + 0x3521)), __decorate([
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a7(0x191) + 'e', String)
], Ticket[a4(0x1ef)], a4(0x1f6) + 'e', void (-0x3 * -0x78b + 0x1c76 + -0x3317)), __decorate([
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', String)
], Ticket[a4(0x1ef)], a4(0x190), void (0x1c90 + 0x1 * 0x2156 + -0x3de6)), __decorate([
    (0x15 * -0x10f + 0x2310 + -0xcd5 * 0x1, sequelize_typescript_1[a7(0x194)])(!![]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Boolean)
], Ticket[a4(0x1ef)], a7(0x1a2), void (-0x1f9e + 0x25d9 + -0x63b)), __decorate([
    (-0x1664 + 0x6f * 0x33 + -0x1 * -0x47, sequelize_typescript_1[a7(0x194)])(![]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Boolean)
], Ticket[a7(0x1ef)], a7(0x171), void (0x4a7 * 0x5 + -0x1 * 0x871 + 0x21e * -0x7)), __decorate([
    (-0x4f * -0x75 + 0x1cb8 + -0xcf7 * 0x5, sequelize_typescript_1[a7(0x194)])(![]),
    sequelize_typescript_1[a4(0x1ce)],
    __metadata(a7(0x191) + 'e', Boolean)
], Ticket[a7(0x1ef)], a7(0x189) + a4(0x1ee), void (-0x1bff + 0xa02 + 0x11fd)), __decorate([
    (0x3 * -0x3ba + -0x1b * 0x15a + 0x2fac, sequelize_typescript_1[a7(0x194)])(![]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Boolean)
], Ticket[a7(0x1ef)], a4(0x195) + a4(0x1d7), void (0x87f + -0x26 * -0x6f + -0x18f9)), __decorate([
    sequelize_typescript_1[a4(0x19b)],
    __metadata(a4(0x191) + 'e', Date)
], Ticket[a7(0x1ef)], a7(0x172), void (-0x14b * 0xd + -0x3d5 + 0x4 * 0x529)), __decorate([
    sequelize_typescript_1[a7(0x186)],
    __metadata(a7(0x191) + 'e', Date)
], Ticket[a7(0x1ef)], a4(0x1b8), void (0x2604 + -0x14d7 + -0x112d)), __decorate([
    (0x1 * -0xc23 + 0x1ca3 + -0x420 * 0x4, sequelize_typescript_1[a4(0x1ce)])(sequelize_typescript_1[a4(0x179)][a7(0x1ba)]),
    __metadata(a4(0x191) + 'e', Date)
], Ticket[a4(0x1ef)], a7(0x18b) + a4(0x1d0), void (0x131c + 0x1 * -0x2093 + 0x9 * 0x17f)), __decorate([
    (0x403 * -0x5 + -0x2b * 0x21 + 0x199a, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a7(0x179)][a7(0x197)]),
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a4(0x1eb), void (-0x2 * 0xc74 + 0x2253 + -0x96b)), __decorate([
    (-0x1b66 + 0x300 * 0x6 + 0x966, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a4(0x179)][a4(0x1c2)]),
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a4(0x1b4), void (0xa1 + -0xc08 * -0x2 + 0x93 * -0x2b)), __decorate([
    (-0x1e1d + 0x349 * 0x2 + -0x35d * -0x7, sequelize_typescript_1[a4(0x1ce)])(sequelize_typescript_1[a7(0x179)][a4(0x1c2)]),
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x1f6) + a7(0x185), void (-0x10bb + -0x179c + -0x17 * -0x1c1)), __decorate([
    (0x189f + -0xfa3 + -0x8fc, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a7(0x179)][a7(0x1c2)]),
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a4(0x1c3) + a7(0x1de), void (-0x2 * -0x10f6 + 0xd68 + 0x1 * -0x2f54)), __decorate([
    (-0x840 * -0x3 + 0xab + -0xf1 * 0x1b, sequelize_typescript_1[a7(0x180)])(() => User_1[a7(0x19e)]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x176), void (-0x2f4 + 0x233 * 0x2 + -0x172)), __decorate([
    (0x607 + -0x11 + -0x5f6, sequelize_typescript_1[a4(0x1a6)])(() => User_1[a4(0x19e)]),
    __metadata(a7(0x191) + 'e', User_1[a4(0x19e)])
], Ticket[a7(0x1ef)], a4(0x178), void (0x241 * -0x3 + 0xe8c + -0x1 * 0x7c9)), __decorate([
    (-0x1058 + -0x1ced + -0x1 * -0x2d45, sequelize_typescript_1[a7(0x180)])(() => Contact_1[a4(0x19e)]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x184), void (-0x1df3 + 0xa90 + 0x7 * 0x2c5)), __decorate([
    (0x1 * 0x22b2 + 0x1076 + -0x3328, sequelize_typescript_1[a7(0x1a6)])(() => Contact_1[a4(0x19e)]),
    __metadata(a7(0x191) + 'e', Contact_1[a7(0x19e)])
], Ticket[a4(0x1ef)], a7(0x17a), void (-0x1 * 0x7c4 + -0xbb8 + -0x4df * -0x4)), __decorate([
    (0x22f * -0x1 + 0x24b9 + -0x228a, sequelize_typescript_1[a4(0x180)])(() => Whatsapp_1[a7(0x19e)]),
    sequelize_typescript_1[a4(0x1ce)],
    __metadata(a4(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x17f), void (0x1 * 0x191f + -0x6c1 + -0x125e)), __decorate([
    (-0x3 * 0xe5 + 0x168f + -0x13e0, sequelize_typescript_1[a7(0x1a6)])(() => Whatsapp_1[a4(0x19e)]),
    __metadata(a4(0x191) + 'e', Whatsapp_1[a4(0x19e)])
], Ticket[a7(0x1ef)], a7(0x1d5), void (0x12e0 + 0x19 * -0xff + 0x607)), __decorate([
    (-0x1ba6 + 0x10 * -0xc0 + 0x196 * 0x19, sequelize_typescript_1[a4(0x19d)])(() => Message_1[a7(0x19e)]),
    __metadata(a4(0x191) + 'e', Array)
], Ticket[a4(0x1ef)], a4(0x1cb), void (-0x531 * -0x2 + 0x5e * -0x61 + 0x193c)), __decorate([
    (0x2 * 0x2a1 + 0x1f54 + -0x2496, sequelize_typescript_1[a7(0x180)])(() => AutoReply_1[a4(0x19e)]),
    sequelize_typescript_1[a4(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a7(0x182) + 'd', void (0xee3 + 0xb50 + -0x1a33)), __decorate([
    (0x1 * -0x184d + -0x38f * 0x8 + 0x3 * 0x1197, sequelize_typescript_1[a7(0x1a6)])(() => AutoReply_1[a7(0x19e)]),
    __metadata(a4(0x191) + 'e', AutoReply_1[a4(0x19e)])
], Ticket[a7(0x1ef)], a7(0x1d4), void (0x990 + -0x414 + -0x34 * 0x1b)), __decorate([
    (-0x1898 + -0xb29 + -0x23c1 * -0x1, sequelize_typescript_1[a7(0x180)])(() => StepsReply_1[a4(0x19e)]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a4(0x17e) + a4(0x1f3), void (-0x1441 + -0x2b3 * 0x5 + 0x21c0)), __decorate([
    (0x1186 + -0x27 * 0xe5 + 0x115d, sequelize_typescript_1[a7(0x1a6)])(() => StepsReply_1[a7(0x19e)]),
    __metadata(a7(0x191) + 'e', StepsReply_1[a7(0x19e)])
], Ticket[a4(0x1ef)], a7(0x1e7), void (-0x307 + 0x11cc + 0xec5 * -0x1)), __decorate([
    (0x67 * 0xd + -0x189c + -0x1c3 * -0xb, sequelize_typescript_1[a7(0x180)])(() => ChatFlow_1[a4(0x19e)]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a7(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a7(0x17d), void (0x1 * 0xfd3 + 0x1 * -0x22a + -0x1 * 0xda9)), __decorate([
    (0x18c1 + 0x5db * -0x5 + 0x2 * 0x243, sequelize_typescript_1[a4(0x1a6)])(() => ChatFlow_1[a4(0x19e)]),
    __metadata(a7(0x191) + 'e', ChatFlow_1[a7(0x19e)])
], Ticket[a4(0x1ef)], a4(0x1b2), void (-0x1 * 0x261a + 0x6 * 0x2c4 + 0x2 * 0xac1)), __decorate([
    (-0x246 + -0x21b5 + 0x23fb, sequelize_typescript_1[a7(0x194)])(null),
    sequelize_typescript_1[a7(0x1f7)],
    (-0xa53 + 0xec * 0x1 + 0x967, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a4(0x179)][a7(0x197)]),
    __metadata(a4(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x1ed) + 'ow', void (0x739 * 0x2 + 0x8f3 + -0x35 * 0x71)), __decorate([
    (-0x15f1 * -0x1 + -0x20f1 + 0xb00, sequelize_typescript_1[a4(0x180)])(() => Queue_1[a4(0x19e)]),
    (0x1bbd * -0x1 + 0x8fa + 0x12c3, sequelize_typescript_1[a7(0x194)])(null),
    sequelize_typescript_1[a7(0x1f7)],
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Number)
], Ticket[a7(0x1ef)], a7(0x174), void (-0x1bce + -0x202 + 0x1a8 * 0x12)), __decorate([
    (0x33 * -0x48 + -0xec5 + 0x1d1d, sequelize_typescript_1[a7(0x1a6)])(() => Queue_1[a7(0x19e)]),
    __metadata(a4(0x191) + 'e', Queue_1[a7(0x19e)])
], Ticket[a4(0x1ef)], a4(0x18a), void (-0x728 + -0x6cb + 0xdf3 * 0x1)), __decorate([
    (0xf62 + -0x2409 + 0x137 * 0x11, sequelize_typescript_1[a7(0x180)])(() => Tenant_1[a4(0x19e)]),
    sequelize_typescript_1[a7(0x1ce)],
    __metadata(a4(0x191) + 'e', Number)
], Ticket[a4(0x1ef)], a4(0x198), void (0xc8e + -0x88a * 0x2 + 0x486)), __decorate([
    (0xf * -0x15b + 0x2 * 0xec0 + -0x92b, sequelize_typescript_1[a7(0x194)])(null),
    (-0x1f3 + 0x2 * 0x11cb + -0x21a3, sequelize_typescript_1[a4(0x1ce)])(sequelize_typescript_1[a4(0x179)][a7(0x1e5)]),
    __metadata(a7(0x191) + 'e', Object)
], Ticket[a7(0x1ef)], a7(0x175) + a7(0x1c6), void (-0x22 * -0x95 + 0x1eca + -0xc * 0x437)), __decorate([
    (0x5 * 0x751 + 0x1471 * 0x1 + -0x981 * 0x6, sequelize_typescript_1[a4(0x194)])(null),
    (0xb7a + -0x3 * -0x545 + -0x1b49, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a4(0x179)][a4(0x1e5)]),
    __metadata(a7(0x191) + 'e', Boolean)
], Ticket[a4(0x1ef)], a4(0x1d2), void (0x1649 * 0x1 + -0x10d5 * -0x2 + 0x1 * -0x37f3)), __decorate([
    (-0x25a3 + -0x1 * -0x1685 + 0xf1e, sequelize_typescript_1[a4(0x194)])([]),
    (0x1 * -0x3 + -0xdf6 + 0xdf9, sequelize_typescript_1[a4(0x1ce)])(sequelize_typescript_1[a7(0x179)][a4(0x1e5)]),
    __metadata(a7(0x191) + 'e', Array)
], Ticket[a4(0x1ef)], a7(0x1ea) + a4(0x1be), void (0x1bd2 + 0x1 * -0x1783 + -0x44f)), __decorate([
    (-0x7 * 0x195 + 0x327 + 0x7ec, sequelize_typescript_1[a7(0x1a6)])(() => Tenant_1[a4(0x19e)]),
    __metadata(a7(0x191) + 'e', Tenant_1[a4(0x19e)])
], Ticket[a7(0x1ef)], a7(0x1ae), void (-0x208c + 0x25d9 + 0x3b * -0x17)), __decorate([
    (-0x1 * 0x1aa3 + -0x36d + 0x1e10, sequelize_typescript_1[a7(0x19d)])(() => MessageOffLine_1[a4(0x19e)]),
    __metadata(a7(0x191) + 'e', Array)
], Ticket[a4(0x1ef)], a4(0x1a8) + a7(0x1a7), void (0x1cca + -0xe7b + 0x4c5 * -0x3)), __decorate([
    (-0xf7b + -0x3 * 0x3a5 + -0xd35 * -0x2, sequelize_typescript_1[a4(0x194)])(null),
    sequelize_typescript_1[a4(0x1f7)],
    (0x938 * 0x4 + -0x1 * -0xe8f + -0x336f, sequelize_typescript_1[a7(0x1ce)])(sequelize_typescript_1[a4(0x179)][a4(0x17b)]),
    __metadata(a7(0x191) + 'e', Object)
], Ticket[a7(0x1ef)], a7(0x1bf), void (-0x2164 + 0x1 * 0x1168 + 0xffc)), __decorate([
    (-0x1 * -0x1ea1 + -0x35 * -0x26 + -0x7b3 * 0x5, sequelize_typescript_1[a4(0x194)])(null),
    sequelize_typescript_1[a4(0x1f7)],
    (-0x1e * 0x3a + 0x16 * 0xbf + -0x99e * 0x1, sequelize_typescript_1[a4(0x1ce)])(sequelize_typescript_1[a4(0x179)][a7(0x1dc)]),
    __metadata(a4(0x191) + 'e', String)
], Ticket[a7(0x1ef)], a7(0x1b1), void (-0xe * -0x123 + -0x8fc + -0x6ee)), Ticket = Ticket_1 = __decorate([sequelize_typescript_1[a4(0x1e3)]], Ticket), exports[a7(0x19e)] = Ticket;