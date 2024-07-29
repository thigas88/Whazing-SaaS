'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x14d + 0x519 + -0xcc);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x88)) / (-0x7 * -0x52c + -0x1533 + -0xf00) * (parseInt(n(0x89)) / (0x1 * 0xd1f + 0x4c7 + -0x11e4)) + parseInt(n(0x67)) / (-0xe3a + 0x2 * 0xa5a + -0x1 * 0x677) * (parseInt(n(0x79)) / (0x2 * -0x58c + 0x7e * -0x47 + 0xa * 0x49b)) + parseInt(n(0x7f)) / (-0x13b6 + 0xe * 0x15b + 0xc1) + parseInt(m(0x8f)) / (-0x251f + 0x79 * -0x25 + 0x36a2) + parseInt(n(0x75)) / (-0x2307 + 0x9 * 0x1e7 + 0x11ef) * (parseInt(n(0x8e)) / (-0xa31 * 0x1 + -0x1191 + -0xde5 * -0x2)) + -parseInt(n(0x7c)) / (-0x17f7 + -0xda + 0x18da) + -parseInt(n(0x77)) / (-0x1d53 + -0x7 * 0xab + 0x220a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39be * 0x10 + 0x5ba62 + -0x63011));
var __importDefault = this && this[o(0x81) + o(0x8a)] || function (c) {
    const q = o;
    return c && c[q(0x78)] ? c : { 'default': c };
};
function a() {
    const v = [
        'value',
        'sequelize',
        '../../mode',
        'type',
        'EAtCT',
        'payload',
        'ers/socket',
        'read',
        'ls/Ticket',
        'map',
        'tenantId',
        '7fJRKMj',
        'ls/Message',
        '3288720yJIWPt',
        '__esModule',
        '169976uFCugb',
        '../../help',
        'lte',
        '2128095TeLhRp',
        'watermark',
        'findAll',
        '1675030vSuHhY',
        'defineProp',
        '__importDe',
        'status',
        'ls/Contact',
        'Emit',
        'default',
        'ack',
        'chat:ack',
        '15927HpyWnc',
        '6HGQbjL',
        'fault',
        'sender',
        'update',
        'TpXVW',
        '408568mdamBK',
        '242376YJUsrJ',
        'messageId',
        'timestamp',
        'dataValues',
        'sended',
        'erty',
        '21VQklQR',
        'all',
        'mediaUrl'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[o(0x6a)] = !![], Object[o(0x80) + o(0x66)](exports, o(0x78), k);
const sequelize_1 = require(p(0x6b)), socketEmit_1 = __importDefault(require(p(0x7a) + p(0x70) + p(0x84))), Contact_1 = __importDefault(require(p(0x6c) + o(0x83))), Message_1 = __importDefault(require(o(0x6c) + o(0x76))), Ticket_1 = __importDefault(require(p(0x6c) + p(0x72))), MessengerMarkRead = async (d, e) => {
        const r = o, s = o, f = {};
        f[r(0x6e)] = r(0x87), f[s(0x8d)] = s(0x93);
        const g = f, h = await Message_1[s(0x85)][r(0x7e)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][r(0x7b)]]: new Date(d[s(0x71)][r(0x7d)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            -0x3 * 0x6aa + -0x5 * -0x62b + -0xad8,
                            -0x249b + 0x506 + 0x1f97
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x85)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x85)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x8b)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x68)](h[r(0x73)](async i => {
            const t = r, u = s, j = {};
            j[t(0x86)] = 0x3, await i[u(0x8c)](j);
            const l = {};
            l[u(0x74)] = e, l[u(0x6d)] = g[t(0x6e)], l[t(0x6f)] = { ...i[t(0x92)] }, l[t(0x6f)][t(0x69)] = i[t(0x69)], l[t(0x6f)]['id'] = i['id'], l[t(0x6f)][u(0x91)] = i[u(0x91)], l[t(0x6f)][u(0x90)] = i[t(0x90)], l[t(0x6f)][t(0x82)] = g[u(0x8d)], l[t(0x6f)][u(0x86)] = 0x3, (-0x4b4 + 0x24c + 0x2c * 0xe, socketEmit_1[t(0x85)])(l);
        }));
    };
exports[o(0x85)] = MessengerMarkRead;