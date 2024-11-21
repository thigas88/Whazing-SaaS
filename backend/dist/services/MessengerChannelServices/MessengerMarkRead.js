'use strict';
function a() {
    const v = [
        'ers/socket',
        '1348116yfMWFS',
        '__esModule',
        'default',
        'sended',
        'read',
        'ls/Message',
        'map',
        'timestamp',
        'watermark',
        '__importDe',
        'tenantId',
        'ack',
        'update',
        '24mYTILJ',
        '280225jwCWqS',
        'ls/Contact',
        'type',
        'mLtJw',
        'messageId',
        'Emit',
        'all',
        'fault',
        'sender',
        '89683ZIBlok',
        'sequelize',
        'lte',
        '309801wvPOjM',
        '2ksMbSo',
        '4660407bPBMqi',
        'mQmAV',
        'defineProp',
        'value',
        '170dwJUTm',
        'mediaUrl',
        '798848CDRtbt',
        'chat:ack',
        '../../help',
        'status',
        'dataValues',
        '80314yoSOPG',
        'payload',
        '78MNmBYb',
        'ls/Ticket',
        'erty',
        '../../mode',
        'findAll'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x69a + 0x3 * 0x821 + -0xfe3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1ed)) / (0x1235 + -0x24db + 0x12a7) * (parseInt(m(0x1f9)) / (0x79b + -0x2191 + 0x19f8)) + -parseInt(m(0x1ec)) / (-0x53e + -0x2598 + -0x1 * -0x2ad9) + -parseInt(m(0x1f4)) / (0x7 * -0x237 + 0x2144 * 0x1 + -0x11bf) + -parseInt(m(0x20f)) / (-0x22a7 + 0x2605 + 0x359 * -0x1) * (-parseInt(n(0x1fb)) / (-0x2684 + 0x2a1 + -0x23e9 * -0x1)) + parseInt(m(0x201)) / (0x6 * -0x624 + 0x2d + -0x1259 * -0x2) * (-parseInt(n(0x20e)) / (-0x2508 * -0x1 + -0x169 * 0x1 + -0x2397)) + parseInt(m(0x1ee)) / (0xb54 + 0x6 * -0x65a + 0x1ad1) + -parseInt(m(0x1f2)) / (0x1def + -0x117d * 0x1 + 0x2 * -0x634) * (-parseInt(n(0x1e9)) / (0x3 * 0xb61 + 0x1 * -0x68c + -0x56 * 0x52));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x90cea + 0x416d5 + 0x89 * -0xc77));
var __importDefault = this && this[o(0x20a) + o(0x1e7)] || function (c) {
    const q = o;
    return c && c[q(0x202)] ? c : { 'default': c };
};
const k = {};
k[p(0x1f1)] = !![], Object[o(0x1f0) + o(0x1fd)](exports, p(0x202), k);
const sequelize_1 = require(o(0x1ea)), socketEmit_1 = __importDefault(require(o(0x1f6) + p(0x200) + o(0x214))), Contact_1 = __importDefault(require(p(0x1fe) + o(0x210))), Message_1 = __importDefault(require(o(0x1fe) + p(0x206))), Ticket_1 = __importDefault(require(p(0x1fe) + p(0x1fc))), MessengerMarkRead = async (d, e) => {
        const r = p, s = p, f = {};
        f[r(0x212)] = s(0x1f5), f[r(0x1ef)] = r(0x204);
        const g = f, h = await Message_1[s(0x203)][r(0x1ff)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x1eb)]]: new Date(d[r(0x205)][s(0x209)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            -0x13a6 + -0x1 * -0xbed + -0x2e * -0x2b,
                            0x10 * -0xfe + 0x2213 + 0x1 * -0x1231
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x203)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x203)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1e8)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1e6)](h[s(0x207)](async i => {
            const t = s, u = r, j = {};
            j[t(0x20c)] = 0x3, await i[u(0x20d)](j);
            const l = {};
            l[u(0x20b)] = e, l[u(0x211)] = g[t(0x212)], l[u(0x1fa)] = { ...i[t(0x1f8)] }, l[u(0x1fa)][t(0x1f3)] = i[u(0x1f3)], l[u(0x1fa)]['id'] = i['id'], l[u(0x1fa)][u(0x208)] = i[u(0x208)], l[u(0x1fa)][t(0x213)] = i[t(0x213)], l[u(0x1fa)][t(0x1f7)] = g[t(0x1ef)], l[u(0x1fa)][u(0x20c)] = 0x3, (-0x21a2 + 0xfb * -0xd + 0x2e61, socketEmit_1[t(0x203)])(l);
        }));
    };
exports[p(0x203)] = MessengerMarkRead;