'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x71)) / (0x3 * 0x135 + 0xe2a + 0x239 * -0x8) + parseInt(l(0x79)) / (0x1fd3 + 0x1 * -0x63 + 0x1f6e * -0x1) + parseInt(l(0x75)) / (0x1220 + -0x2c * 0x97 + 0x7d7) * (-parseInt(l(0x8b)) / (-0x59f * 0x2 + -0xf06 + -0x74 * -0x3a)) + -parseInt(l(0x6b)) / (0xee1 + 0x10 * -0x232 + -0x511 * -0x4) + -parseInt(m(0x8a)) / (0x5ab + -0x1f * -0x4a + -0xe9b) * (parseInt(l(0x7d)) / (-0x33 * -0x8e + -0x20fa + 0x4b7)) + -parseInt(l(0x76)) / (0xb3e + -0x45 * -0x62 + -0x25a0) * (-parseInt(m(0x81)) / (-0xd7a + 0x1 * 0x20d9 + -0x1e * 0xa5)) + parseInt(m(0x68)) / (-0x61 * 0x17 + 0x525 * 0x3 + -0x6ae);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18d73 + -0x55104 + 0x9556b));
function a() {
    const u = [
        '148638SKQCQM',
        '224gjElAX',
        './../model',
        'tWbotBaile',
        '328950mFqzyO',
        'WAPP_MSG',
        'sages',
        'ERR_FETCH_',
        '28UgbOET',
        '0\x20last\x20mes',
        'value',
        'default',
        '121221fhmZLJ',
        'Cannot\x20fou',
        'AppError',
        'VNhlQ',
        'findByPk',
        'GetWbotMes',
        'mjAul',
        'log',
        'nd\x20message',
        '1035156dVEmec',
        '20NeRSKH',
        '__esModule',
        '15142650qrvPzf',
        'sage',
        '\x20within\x2010',
        '731895CjGwLz',
        's/Message',
        'MRjCc',
        '__importDe',
        '../errors/',
        './GetTicke',
        '606641wkPtsS',
        'defineProp',
        'fault',
        'erty'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x6e) + o(0x73)] || function (c) {
    const p = n;
    return c && c[p(0x67)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb * -0x2 + -0x1ab + 0x228);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x7f)] = !![], Object[n(0x72) + n(0x74)](exports, n(0x67), k), exports[o(0x86) + n(0x69)] = void (-0x1 * -0x66e + -0x1c5 * -0xd + -0x1d6f);
const AppError_1 = __importDefault(require(o(0x6f) + n(0x83))), GetTicketWbotBaileys_1 = __importDefault(require(n(0x70) + n(0x78) + 'ys')), Message_1 = __importDefault(require(n(0x77) + n(0x6c))), GetWbotMessage = async (c, d) => {
        const q = o, r = o, e = {
                'mjAul': function (i) {
                    return i();
                },
                'VNhlQ': q(0x82) + r(0x89) + r(0x6a) + q(0x7e) + r(0x7b),
                'MRjCc': q(0x7c) + q(0x7a)
            }, f = await (-0x68e + -0x10cd + 0x3 * 0x7c9, GetTicketWbotBaileys_1[q(0x80)])(c);
        let g = 0x3ca + 0x3 * 0x72b + -0x1937;
        const h = async () => {
            const s = q, t = r, i = await Message_1[s(0x80)][s(0x85)](d);
            return i;
        };
        try {
            const i = await e[r(0x87)](h);
            if (!i)
                throw new Error(e[q(0x84)]);
            return i;
        } catch (j) {
            console[q(0x88)](j);
            throw new AppError_1[(q(0x80))](e[q(0x6d)]);
        }
    };
exports[n(0x86) + o(0x69)] = GetWbotMessage, exports[o(0x80)] = exports[o(0x86) + o(0x69)];