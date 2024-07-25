'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1cc)) / (0x2578 + -0x19f5 + 0x2 * -0x5c1) + -parseInt(n(0x1ba)) / (0x177 * 0x3 + -0x7a * 0x2f + 0x1203) * (-parseInt(m(0x1c0)) / (-0x1 * -0xa8c + -0x1d6b + 0x1 * 0x12e2)) + parseInt(m(0x1aa)) / (0x2294 * -0x1 + -0x7f * 0x3 + 0x2415) + -parseInt(n(0x1a7)) / (0x105f + 0x920 + -0x197a) + -parseInt(n(0x1ae)) / (0x1 * 0x221f + -0x13 * -0x191 + -0x2 * 0x1fee) * (parseInt(m(0x1b5)) / (-0x635 + -0xb26 + 0x1162)) + -parseInt(n(0x1bd)) / (-0x5b * -0x47 + -0x1 * -0x1ec2 + -0x1 * 0x37f7) + parseInt(m(0x1a9)) / (-0x1 * -0xf7f + 0x1110 + -0x2086);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xec474 + 0x38be7 * -0x1 + 0x10c3c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x153d + -0x1247 * 0x1 + -0xb * 0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1a4) + p(0x1b3)] || function (c) {
    const q = o;
    return c && c[q(0x1c7)] ? c : { 'default': c };
};
const k = {};
k[p(0x1a5)] = !![], Object[p(0x1b2) + o(0x1c9)](exports, o(0x1c7), k);
function a() {
    const v = [
        'lte',
        'ls/Ticket',
        'findAll',
        'sender',
        '__esModule',
        'payload',
        'erty',
        'all',
        'timestamp',
        '1386328adMhRI',
        '../../mode',
        'chat:ack',
        'type',
        'sequelize',
        '__importDe',
        'value',
        'mediaUrl',
        '6640695ohxWGZ',
        'IZrQj',
        '5552640deYRlZ',
        '3351828OZuRsr',
        'MqEQu',
        'Emit',
        'default',
        '180SJTNDe',
        'watermark',
        'tenantId',
        'dataValues',
        'defineProp',
        'fault',
        'ack',
        '14623awqsAb',
        'map',
        'ls/Contact',
        'messageId',
        'read',
        '221418GqmwIm',
        'status',
        '../../help',
        '6056832YpJeqH',
        'sended',
        'ls/Message',
        '3ageQtf',
        'update',
        'ers/socket'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x1a3)), socketEmit_1 = __importDefault(require(p(0x1bc) + p(0x1c2) + p(0x1ac))), Contact_1 = __importDefault(require(p(0x1cd) + p(0x1b7))), Message_1 = __importDefault(require(o(0x1cd) + p(0x1bf))), Ticket_1 = __importDefault(require(p(0x1cd) + o(0x1c4))), MessengerMarkRead = async (d, e) => {
        const r = p, s = o, f = {};
        f[r(0x1a8)] = r(0x1a1), f[s(0x1ab)] = s(0x1be);
        const g = f, h = await Message_1[r(0x1ad)][r(0x1c5)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][r(0x1c3)]]: new Date(d[r(0x1b9)][s(0x1af)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0x1722 + 0x986 + -0x20a7,
                            -0x101 * -0xb + 0x12e2 + -0x1deb
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x1ad)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x1ad)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1c6)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1ca)](h[s(0x1b6)](async i => {
            const t = r, u = s, j = {};
            j[t(0x1b4)] = 0x3, await i[t(0x1c1)](j);
            const l = {};
            l[u(0x1b0)] = e, l[t(0x1a2)] = g[u(0x1a8)], l[t(0x1c8)] = { ...i[t(0x1b1)] }, l[t(0x1c8)][t(0x1a6)] = i[t(0x1a6)], l[t(0x1c8)]['id'] = i['id'], l[t(0x1c8)][t(0x1cb)] = i[t(0x1cb)], l[t(0x1c8)][u(0x1b8)] = i[u(0x1b8)], l[t(0x1c8)][t(0x1bb)] = g[u(0x1ab)], l[t(0x1c8)][u(0x1b4)] = 0x3, (0x3ac + -0x1b56 * 0x1 + -0x17aa * -0x1, socketEmit_1[u(0x1ad)])(l);
        }));
    };
exports[o(0x1ad)] = MessengerMarkRead;