'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc08 + -0x417 + -0x6 * -0x2d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0xed)) / (-0x1 * 0x1a83 + -0x2 * 0xd69 + 0x3556) + -parseInt(B(0x128)) / (0x882 * 0x3 + -0xdb3 * 0x2 + 0x1e2) + -parseInt(A(0x110)) / (0x11e3 * 0x1 + -0xe * 0x86 + -0xa8c) + -parseInt(A(0xce)) / (-0x15d7 * 0x1 + -0x1 * 0x1e9b + 0x3476) + -parseInt(B(0xd7)) / (-0xd * -0x2f1 + -0x9c1 + 0x15b * -0x15) * (parseInt(B(0xf8)) / (0x26bf + -0x20f2 * -0x1 + -0x47ab * 0x1)) + -parseInt(A(0x10b)) / (-0xea3 + 0x14d1 + -0x627) * (-parseInt(A(0xc8)) / (0x2317 + -0xfd6 + -0x13 * 0x103)) + parseInt(B(0x106)) / (-0x1e2d + 0x192d + 0x509);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2d295 + -0x8e75 * -0xa + 0xa * 0x6ce9));
function a() {
    const H = [
        'erty',
        'rApxz',
        'length',
        't.id\x20=\x20m.\x22',
        'JTOSd',
        'ugdMW',
        'parse',
        '\x20\x20\x20\x20where\x20',
        'bot',
        'oWJrD',
        'businessHo',
        'Messages\x22\x20',
        'inessHours',
        'msg',
        'pending',
        '/ShowBusin',
        'fault',
        '\x22\x20=\x20true\x20\x0a',
        'hCfAc',
        'body',
        'dMessageSe',
        '2154528xOihPm',
        'date-fns',
        '../../Tena',
        'm.\x22created',
        'ticket',
        'type',
        'defineProp',
        'ticketId\x22\x20',
        'status',
        '33240MFHTKQ',
        's/CreateMe',
        '.\x22createdA',
        'd\x22\x20=\x20',
        'aUprH',
        '2.\x22ticketI',
        '3421524IwZDAs',
        'ntServices',
        '../../Mess',
        'mService',
        'FPQbX',
        'fromMe',
        'At\x22\x20=\x20(sel',
        'select\x20m.b',
        '\x22\x20m,\x20\x22Tick',
        '195iWIQuZ',
        'query',
        'default',
        '\x20m.\x22fromMe',
        'ageService',
        'ssageSyste',
        'dAt\x22\x20,\x20m.\x22',
        'tenantId',
        '\x20\x22Messages',
        'sendType',
        'ody,\x20m.\x22cr',
        'hr2',
        'HH:mm',
        'read',
        '\x0a\x20\x20\x20\x20\x20\x20and',
        'fromUnixTi',
        'BXGmq',
        'sequelize',
        '\x20\x20\x20\x20\x20\x20and\x20',
        'igrtb',
        '\x20t.id\x20=\x20',
        'atabase',
        '644605XRnjEV',
        'SELECT',
        'eatedAt\x22\x20,',
        'ect\x20max(m2',
        'estamp',
        'RvLVd',
        '../../../d',
        'rvice',
        'm2\x20where\x20m',
        'messageTim',
        'hr4',
        '206478HNnhFW',
        '__esModule',
        'getDay',
        'urs',
        '__importDe',
        'find',
        'Me\x22\x20=\x20true',
        'essHoursAn',
        'closed',
        'messageBus',
        'isGroup',
        'isWithinIn',
        '\x20and\x20\x22from',
        '\x20\x20\x20\x20\x20\x20from',
        '43427439fgxbKB',
        '\x20m.\x22update',
        'hr3',
        'hr1',
        'ets\x22\x20t\x20\x0a\x20\x20',
        '63aAWlcT',
        't\x22)\x20from\x20\x22',
        'ticketId\x22\x0a',
        'QueryTypes',
        'terval',
        '4212114TodxYF',
        'value',
        'day'
    ];
    a = function () {
        return H;
    };
    return a();
}
var __importDefault = this && this[C(0xfc) + D(0x123)] || function (c) {
    const E = C;
    return c && c[E(0xf9)] ? c : { 'default': c };
};
const k = {};
k[D(0x111)] = !![], Object[C(0x12e) + D(0x113)](exports, D(0xf9), k);
const date_fns_1 = require(C(0x129)), ShowBusinessHoursAndMessageService_1 = __importDefault(require(C(0x12a) + D(0xcf) + C(0x122) + D(0xff) + C(0x127) + D(0xf4))), CreateMessageSystemService_1 = __importDefault(require(D(0xd0) + C(0xdb) + C(0xc9) + D(0xdc) + D(0xd1))), database_1 = __importDefault(require(C(0xf3) + C(0xec))), sequelize_1 = require(C(0xe8)), verifyBusinessHours = async (h, i) => {
        const F = C, G = D, j = {};
        j[F(0x114)] = function (n, o) {
            return n !== o;
        }, j[F(0xe7)] = F(0x100), j[G(0x117)] = function (n, o) {
            return n === o;
        }, j[F(0x11c)] = F(0xe3), j[G(0xea)] = function (n, o) {
            return n && o;
        }, j[F(0xd2)] = function (n, o) {
            return n > o;
        }, j[G(0x118)] = function (n, o) {
            return n == o;
        }, j[F(0xf2)] = G(0x126), j[F(0xcc)] = F(0x11b), j[G(0x125)] = G(0x121);
        const l = j;
        let m = !![];
        if (l[G(0x114)](i[G(0xc7)], l[G(0xe7)]) && !h[G(0xd3)] && !i[G(0x102)]) {
            const n = {};
            n[F(0xde)] = i[F(0xde)];
            const o = await (-0x2 * -0x11c + -0xfc7 + 0xd8f, ShowBusinessHoursAndMessageService_1[F(0xd9)])(n), p = (-0x15fb + 0x71 * -0x43 + 0x338e, date_fns_1[F(0xe6) + 'me'])(h[F(0xf6) + F(0xf1)]), q = o[F(0x11d) + G(0xfb)][F(0xfd)](t => t[G(0x112)] === p[F(0xfa)]());
            if (!q)
                return m;
            if (l[F(0x117)](q[G(0x12d)], 'O'))
                return m;
            const r = (0x950 * -0x3 + 0x92 * 0x25 + 0x6d6, date_fns_1[F(0x103) + F(0x10f)])(p, {
                    'start': (-0x22ea + 0x1813 + 0xad7, date_fns_1[G(0x119)])(q[G(0x109)], l[F(0x11c)], new Date()),
                    'end': (0x221f + 0x1b90 + -0x3daf, date_fns_1[G(0x119)])(q[G(0xe2)], l[F(0x11c)], new Date())
                }), s = (-0x22de + -0x2470 + 0x474e, date_fns_1[F(0x103) + G(0x10f)])(p, {
                    'start': (0x177 * -0x1 + 0xd * -0x2a3 + -0x19 * -0x16e, date_fns_1[F(0x119)])(q[F(0x108)], l[F(0x11c)], new Date()),
                    'end': (-0x373 + -0x1ba3 + 0x1f16, date_fns_1[G(0x119)])(q[F(0xf7)], l[F(0x11c)], new Date())
                });
            if (l[G(0x117)](q[F(0x12d)], 'C') || l[G(0xea)](!r, !s)) {
                let t = F(0xd5) + F(0xe1) + F(0xef) + G(0x107) + F(0xdd) + F(0x10d) + F(0x105) + F(0xdf) + F(0xd6) + F(0x10a) + F(0x11a) + G(0x116) + G(0x12f) + G(0xe5) + G(0xeb) + i['id'] + (G(0xe5) + G(0xda) + F(0x124) + F(0xe9) + F(0x12b) + F(0xd4) + G(0xf0) + F(0xca) + F(0x10c) + G(0x11e) + F(0xf5) + G(0xcd) + F(0xcb)) + i['id'] + (G(0x104) + F(0xfe) + '\x20)');
                const u = {};
                u[F(0x12d)] = sequelize_1[G(0x10e)][F(0xee)];
                const v = await database_1[F(0xd9)][G(0xd8)](t, u), w = '' + o[F(0x101) + G(0x11f)];
                if (l[F(0xd2)](v[G(0x115)], -0x126c + 0xd5 * -0x1f + 0x2c37) && l[G(0x118)](v[0x161a + 0x1a70 + -0x6 * 0x817][l[G(0xf2)]], w))
                    return ![];
                m = ![];
                const x = {};
                x[G(0x126)] = o[F(0x101) + F(0x11f)], x[F(0xd3)] = !![], x[G(0xe4)] = !![], x[F(0xe0)] = l[F(0xcc)], x[G(0xde)] = i[F(0xde)];
                const y = x, z = {};
                z[G(0x120)] = y, z[G(0xde)] = i[G(0xde)], z[F(0x12c)] = i, z[F(0xe0)] = y[G(0xe0)], z[F(0xc7)] = l[G(0x125)], await (-0x17c5 + -0x121 * -0x11 + 0x125 * 0x4, CreateMessageSystemService_1[F(0xd9)])(z);
            }
        }
        return m;
    };
exports[C(0xd9)] = verifyBusinessHours;