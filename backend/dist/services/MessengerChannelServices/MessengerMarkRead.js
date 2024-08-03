'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1ac)) / (-0x1 * -0x1706 + 0x705 + -0x2 * 0xf05) + -parseInt(n(0x19e)) / (0x16d5 + -0x164d + -0x86) + -parseInt(m(0x1af)) / (0xc01 + 0x177 * -0xb + 0x5 * 0xd3) + -parseInt(n(0x1b2)) / (-0x101 * 0x8 + 0x1197 + -0x98b) * (-parseInt(m(0x1ad)) / (0xa3a + 0x7 * 0xf5 + 0x10e8 * -0x1)) + parseInt(n(0x1b4)) / (-0x1 * -0x1af8 + -0xcc2 + -0x1c6 * 0x8) + parseInt(n(0x19b)) / (-0xcc3 + -0x1 * -0x20bc + -0x13f2) * (-parseInt(n(0x1b0)) / (-0xd76 + -0x4 * -0x1df + 0x1 * 0x602)) + -parseInt(m(0x197)) / (0x1ccf + -0x1eb * -0x11 + -0x3d61);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2df89 * 0x2 + 0x37a14 * -0x1 + 0xc7160));
function a() {
    const v = [
        'ack',
        '__esModule',
        '__importDe',
        'sequelize',
        'map',
        'chat:ack',
        'ls/Ticket',
        'dataValues',
        'Emit',
        'fault',
        '421460lwpuKx',
        '1099635StuGMH',
        'messageId',
        '671520qNWvse',
        '8muiALA',
        'default',
        '4FaFsOA',
        'defineProp',
        '574140Soyelt',
        'value',
        'ers/socket',
        'HvKRA',
        '../../mode',
        'erty',
        'all',
        'findAll',
        'tenantId',
        'status',
        'uRfqV',
        'ls/Contact',
        'update',
        'watermark',
        'ls/Message',
        'timestamp',
        '925524lPYFOm',
        'lte',
        'sended',
        'mediaUrl',
        '940583UAtRLl',
        'type',
        'read',
        '130060MdHEWo',
        '../../help',
        'sender',
        'payload'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[o(0x1a4) + p(0x1ab)] || function (c) {
    const q = o;
    return c && c[q(0x1a3)] ? c : { 'default': c };
};
const k = {};
k[o(0x1b5)] = !![], Object[p(0x1b3) + o(0x1b9)](exports, o(0x1a3), k);
const sequelize_1 = require(p(0x1a5)), socketEmit_1 = __importDefault(require(o(0x19f) + p(0x1b6) + p(0x1aa))), Contact_1 = __importDefault(require(p(0x1b8) + o(0x1bf))), Message_1 = __importDefault(require(o(0x1b8) + o(0x1c2))), Ticket_1 = __importDefault(require(p(0x1b8) + o(0x1a8))), MessengerMarkRead = async (d, e) => {
        const r = p, s = o, f = {};
        f[r(0x1be)] = s(0x1a7), f[r(0x1b7)] = s(0x199);
        const g = f, h = await Message_1[s(0x1b1)][r(0x1bb)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x198)]]: new Date(d[s(0x19d)][r(0x1c1)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            -0x21a3 + 0x1eb3 + -0x3 * -0xfb,
                            -0x25 * -0x31 + 0x47 * -0x1f + 0x1a * 0xf
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[s(0x1b1)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[r(0x1b1)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1a0)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1ba)](h[s(0x1a6)](async i => {
            const t = r, u = s, j = {};
            j[t(0x1a2)] = 0x3, await i[u(0x1c0)](j);
            const l = {};
            l[t(0x1bc)] = e, l[u(0x19c)] = g[u(0x1be)], l[t(0x1a1)] = { ...i[u(0x1a9)] }, l[t(0x1a1)][t(0x19a)] = i[u(0x19a)], l[t(0x1a1)]['id'] = i['id'], l[t(0x1a1)][t(0x196)] = i[t(0x196)], l[t(0x1a1)][t(0x1ae)] = i[u(0x1ae)], l[t(0x1a1)][t(0x1bd)] = g[u(0x1b7)], l[t(0x1a1)][t(0x1a2)] = 0x3, (-0xc8b + 0x11ec + -0x1 * 0x561, socketEmit_1[t(0x1b1)])(l);
        }));
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21d * -0x12 + 0xaea + 0x62 * 0x4b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x1b1)] = MessengerMarkRead;