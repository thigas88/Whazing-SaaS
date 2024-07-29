'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xc2)) / (0x7c2 * 0x4 + 0x15bf + -0x2 * 0x1a63) + parseInt(m(0xcd)) / (-0x4f * -0x1f + -0x614 + -0x37b) + -parseInt(l(0xbb)) / (0x15bc + 0x1194 + -0x274d * 0x1) * (-parseInt(l(0xda)) / (0x1 * 0x219a + -0x18b8 + -0x8de)) + -parseInt(l(0xba)) / (0x1df7 + 0x24e6 + -0x42d8) + parseInt(l(0xc3)) / (-0xa6 + 0x1 * -0x11bb + 0x1267) * (parseInt(l(0xca)) / (0x7a + 0x1c4d + -0x1cc0)) + parseInt(m(0xde)) / (0x125 * -0x1 + -0x2572 + 0x1 * 0x269f) * (parseInt(m(0xc4)) / (-0x1a6a + 0x89b + 0x476 * 0x4)) + -parseInt(m(0xcb)) / (0x11a2 + -0x14ed + 0x355) * (parseInt(l(0xd4)) / (0x1be * 0x15 + 0x543 + -0x2 * 0x14e7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4dd8 + 0x461 * 0x3ae + -0x44c0a));
var __importDefault = this && this[n(0xd1) + n(0xc8)] || function (c) {
    const p = n;
    return c && c[p(0xc7)] ? c : { 'default': c };
};
const k = {};
k[n(0xc1)] = !![], Object[o(0xe5) + n(0xe0)](exports, o(0xc7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x138 * -0x16 + 0x13e2 + 0x7a5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0xce)), Queue_1 = __importDefault(require(o(0xbd) + n(0xbe))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0xbf) + r(0xcc) + q(0xd5) + q(0xc6) + r(0xe2) + q(0xd6) + r(0xbc) + r(0xe6) + r(0xb7) + r(0xb8) + r(0xdf) + r(0xc5) + q(0xd9) + q(0xe3) + q(0xe4) + q(0xe7) + q(0xd3) + q(0xd7) + q(0xc9) + r(0xdb), h = {};
        h[r(0xcf)] = e, h[r(0xe1)] = f;
        const i = {};
        i[q(0xc0) + 'ts'] = h, i[r(0xdc)] = sequelize_1[r(0xb9)][q(0xd2)], i[r(0xd8)] = !![];
        const j = await Queue_1[q(0xd0)][q(0xce)]?.[r(0xdd)](g, i);
        return j;
    };
exports[n(0xd0)] = ListUserQueueService;
function a() {
    const s = [
        '1330938ahLAVg',
        'sequelize',
        'tenantId',
        'default',
        '__importDe',
        'SELECT',
        '\x0a\x20\x20\x20\x20and\x20q',
        '154RuELAL',
        '\x20from\x20\x22Que',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '.\x22tenantId',
        'nest',
        '\x22userId\x22\x20=',
        '124kNkqrC',
        'tId\x0a\x20\x20\x20\x20',
        'type',
        'query',
        '3877880hVVllj',
        '\x20=\x20q.id\x20\x0a\x20',
        'erty',
        'userId',
        '\x20,\x20\x22Users\x22',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '\x20and\x20u.id\x20',
        'defineProp',
        'es\x22\x20uq\x20\x0a\x20\x20',
        '=\x20:userId\x20',
        '\x20\x20where\x20uq',
        '.\x22queueId\x22',
        'QueryTypes',
        '3101500aNYFCb',
        '37794tnNZID',
        '\x22UsersQueu',
        '../../mode',
        'ls/Queue',
        '\x0a\x20\x20\x20\x20selec',
        'replacemen',
        'value',
        '428143zdglhR',
        '4938rEEVyV',
        '27GMmcWb',
        '\x20\x20\x20and\x20uq.',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '__esModule',
        'fault',
        '\x22\x20=\x20:tenan',
        '1841WnASpr',
        '631370WEkgQT',
        't\x20q.*\x20\x0a\x20\x20\x20'
    ];
    a = function () {
        return s;
    };
    return a();
}