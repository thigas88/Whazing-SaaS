'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1b9)) / (-0x332 + 0x22a5 * 0x1 + -0x15e * 0x17) * (-parseInt(m(0x1ca)) / (0x1747 + -0x31c * -0x5 + -0x26d1)) + -parseInt(m(0x1be)) / (-0x5d * -0x21 + 0x23ba * 0x1 + 0x47 * -0xac) * (parseInt(l(0x1c0)) / (-0x2 * 0x3d5 + 0xc01 + -0x453)) + parseInt(l(0x1ab)) / (-0x5 * -0x271 + 0x3f + -0x3 * 0x425) + -parseInt(m(0x1bb)) / (-0x2605 + 0xe33 * 0x2 + 0x9a5 * 0x1) * (parseInt(m(0x1b3)) / (-0xb5b + -0x2617 + -0x2e9 * -0x11)) + -parseInt(l(0x1cb)) / (0x1 * -0x13a0 + 0x5cf * -0x1 + 0x1977) + -parseInt(m(0x1ac)) / (-0x20c0 + 0x472 + 0x1c57) * (parseInt(m(0x1c6)) / (-0x1daa + -0xe1e + 0x4f * 0x8e)) + parseInt(l(0x1c8)) / (-0xbea + 0xdf4 + -0x1ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * 0x3b5f + 0xa14 * 0x36 + 0x44be9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x3fd + -0x6b6 * -0x1 + -0x6 * 0x2d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'tWbotBaile',
        '0\x20last\x20mes',
        'Cannot\x20fou',
        '256590IhcNZU',
        's/Message',
        '8971875ZBbhFs',
        'erty',
        '20ZcRWal',
        '585352aerhmA',
        'log',
        'default',
        '../errors/',
        'findByPk',
        'value',
        '1794535YdujPG',
        '108ZkWOUV',
        './../model',
        'defineProp',
        'ERR_FETCH_',
        '__importDe',
        'RlTbW',
        '__esModule',
        '21XUDIqB',
        'sages',
        '\x20within\x2010',
        './GetTicke',
        'sage',
        'GetWbotMes',
        '36035wDFPfJ',
        'CjUAs',
        '835134AKgVbU',
        'WAPP_MSG',
        'nd\x20message',
        '33mpBRPH',
        'AppError',
        '142304hUqXaL',
        'uYVhL',
        'fault'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x1b0) + n(0x1c2)] || function (c) {
    const p = o;
    return c && c[p(0x1b2)] ? c : { 'default': c };
};
const k = {};
k[n(0x1d0)] = !![], Object[n(0x1ae) + n(0x1c9)](exports, n(0x1b2), k), exports[o(0x1b8) + n(0x1b7)] = void (0x9f0 + -0x261b + -0x1 * -0x1c2b);
const AppError_1 = __importDefault(require(o(0x1ce) + n(0x1bf))), GetTicketWbotBaileys_1 = __importDefault(require(o(0x1b6) + o(0x1c3) + 'ys')), Message_1 = __importDefault(require(o(0x1ad) + o(0x1c7))), GetWbotMessage = async (c, d) => {
        const q = o, r = o, e = {
                'uYVhL': function (i) {
                    return i();
                },
                'CjUAs': q(0x1c5) + q(0x1bd) + q(0x1b5) + r(0x1c4) + r(0x1b4),
                'RlTbW': r(0x1af) + r(0x1bc)
            }, f = await (-0x2242 + -0x117d * 0x1 + 0x33bf, GetTicketWbotBaileys_1[q(0x1cd)])(c);
        let g = 0x195 + 0x1887 + -0x1dc * 0xe;
        const h = async () => {
            const s = q, t = q, i = await Message_1[s(0x1cd)][s(0x1cf)](d);
            return i;
        };
        try {
            const i = await e[r(0x1c1)](h);
            if (!i)
                throw new Error(e[r(0x1ba)]);
            return i;
        } catch (j) {
            console[q(0x1cc)](j);
            throw new AppError_1[(q(0x1cd))](e[q(0x1b1)]);
        }
    };
exports[o(0x1b8) + o(0x1b7)] = GetWbotMessage, exports[n(0x1cd)] = exports[o(0x1b8) + o(0x1b7)];