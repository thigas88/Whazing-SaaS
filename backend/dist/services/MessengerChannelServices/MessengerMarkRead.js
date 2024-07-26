'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xa0)) / (-0x196c + 0xe0d + -0xe0 * -0xd) * (-parseInt(m(0xae)) / (0xe3 * 0x7 + -0xdb * 0x29 + 0x1ce0)) + parseInt(m(0x90)) / (-0x22 * -0x35 + -0x7a * -0x35 + 0xac3 * -0x3) + -parseInt(n(0xa4)) / (0x1768 + -0x19 * 0x12d + 0x35 * 0x1d) + -parseInt(n(0xa3)) / (-0x12dd + -0x258d + 0x386f) * (-parseInt(m(0x8b)) / (0x1 * -0x14d5 + -0x4 * -0xbc + -0x8b * -0x21)) + parseInt(m(0xa1)) / (0x29 * 0x93 + 0x2c3 * 0x4 + -0x1 * 0x2290) + parseInt(m(0x9c)) / (0x729 + -0x1efe * -0x1 + -0xcb5 * 0x3) + parseInt(n(0xb0)) / (0x6d * -0x29 + 0x16ec + -0x5 * 0x116) * (-parseInt(m(0xb3)) / (-0x2f3 + -0x2 * 0xcac + -0x1c55 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x99 * -0x399 + -0x1 * -0xcc3e + 0x9e73 * 0x6));
var __importDefault = this && this[o(0x9f) + o(0x97)] || function (c) {
    const q = p;
    return c && c[q(0x9e)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'chat:ack',
        'tenantId',
        '../../mode',
        '79521tYrwzW',
        'lte',
        'all',
        'defineProp',
        'value',
        'timestamp',
        'ONQxV',
        'fault',
        '../../help',
        'read',
        'messageId',
        'map',
        '1925848kYPESt',
        'update',
        '__esModule',
        '__importDe',
        '1589MSMrYt',
        '2045841orVFvs',
        'dataValues',
        '160sMJVfh',
        '810048kKpDGf',
        'watermark',
        'mediaUrl',
        'ls/Message',
        'ers/socket',
        'sequelize',
        'default',
        'ack',
        'ONivf',
        'Emit',
        '294LklXKY',
        'erty',
        '29313xvXcvJ',
        'sender',
        'status',
        '1810toZldo',
        'ls/Contact',
        'type',
        'payload',
        'findAll',
        'ls/Ticket',
        '28818IzMSQW',
        'sended'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xebf + 0x10 * 0x11f + -0x2027 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x94)] = !![], Object[o(0x93) + p(0xaf)](exports, o(0x9e), k);
const sequelize_1 = require(o(0xa9)), socketEmit_1 = __importDefault(require(o(0x98) + p(0xa8) + p(0xad))), Contact_1 = __importDefault(require(o(0x8f) + o(0xb4))), Message_1 = __importDefault(require(p(0x8f) + o(0xa7))), Ticket_1 = __importDefault(require(p(0x8f) + p(0x8a))), MessengerMarkRead = async (d, e) => {
        const r = o, s = p, f = {};
        f[r(0x96)] = s(0x8d), f[r(0xac)] = s(0x8c);
        const g = f, h = await Message_1[r(0xaa)][s(0x89)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][r(0x91)]]: new Date(d[s(0x99)][s(0xa5)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0x35 * 0x45 + -0xc84 + -0x1c4,
                            -0x1158 + 0xf36 + 0x224
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[s(0xaa)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0xaa)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0xb1)]['id']
                                }
                            }]
                    }]
            });
        await Promise[r(0x92)](h[s(0x9b)](async i => {
            const t = s, u = r, j = {};
            j[t(0xab)] = 0x3, await i[t(0x9d)](j);
            const l = {};
            l[t(0x8e)] = e, l[t(0xb5)] = g[u(0x96)], l[t(0x88)] = { ...i[t(0xa2)] }, l[t(0x88)][t(0xa6)] = i[t(0xa6)], l[t(0x88)]['id'] = i['id'], l[t(0x88)][u(0x95)] = i[t(0x95)], l[t(0x88)][u(0x9a)] = i[u(0x9a)], l[t(0x88)][u(0xb2)] = g[u(0xac)], l[t(0x88)][t(0xab)] = 0x3, (0x3 * -0xb8d + 0x5 * 0x33 + 0x21a8, socketEmit_1[u(0xaa)])(l);
        }));
    };
exports[p(0xaa)] = MessengerMarkRead;