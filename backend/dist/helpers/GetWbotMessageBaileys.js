'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x166)) / (0x61 * -0x5b + 0x6b * 0x5d + -0x463) + parseInt(m(0x168)) / (-0xf1f * -0x1 + -0x11e6 + 0x1 * 0x2c9) + parseInt(m(0x180)) / (-0x7b * -0x41 + -0x1a4e + -0x4ea) + parseInt(l(0x164)) / (0x2 * 0x5ea + -0x13f4 + 0x824) * (parseInt(l(0x17c)) / (-0x16a6 + -0x6a9 * -0x3 + -0x4 * -0xac)) + -parseInt(l(0x162)) / (-0x4 * 0x5b6 + 0x923 + 0x13 * 0xb9) + parseInt(m(0x16e)) / (-0x24fd + -0x3 * -0x239 + 0x1c9 * 0x11) * (parseInt(m(0x171)) / (-0x89b * 0x3 + 0x18b7 + -0x1d * -0xa)) + -parseInt(l(0x182)) / (-0xb14 * 0x1 + -0x1 * -0xb1e + -0x1 * 0x1) * (parseInt(l(0x16b)) / (0xa1 * 0x33 + 0x1f23 + 0x1a * -0x26e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x1741a + 0x24c43 * 0x5 + -0x524de));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb * 0x323 + -0x1e76 + -0x9 * 0x4c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x17e) + o(0x175)] || function (c) {
    const p = n;
    return c && c[p(0x15f)] ? c : { 'default': c };
};
const k = {};
k[n(0x17a)] = !![], Object[o(0x16a) + n(0x173)](exports, o(0x15f), k), exports[o(0x161) + n(0x16c)] = void (0xbb1 + 0x1422 + -0x1fd3);
function a() {
    const u = [
        'ERR_FETCH_',
        '126DYJXlE',
        'tWbotBaile',
        '__esModule',
        'sages',
        'GetWbotMes',
        '4253598xhxQjQ',
        'WAPP_MSG',
        '12cGWphJ',
        'default',
        '496931kdFIip',
        'oHIJi',
        '22392UqoClE',
        'nd\x20message',
        'defineProp',
        '412680iGIVsk',
        'sage',
        './GetTicke',
        '33845haPuWo',
        'log',
        '../errors/',
        '1904IILQgY',
        'FkkSA',
        'erty',
        'Cannot\x20fou',
        'fault',
        'findByPk',
        's/Message',
        '0\x20last\x20mes',
        'dGQfy',
        'value',
        '\x20within\x2010',
        '1043845SxFBUP',
        './../model',
        '__importDe',
        'AppError',
        '1805268MIWowO'
    ];
    a = function () {
        return u;
    };
    return a();
}
const AppError_1 = __importDefault(require(o(0x170) + o(0x17f))), GetTicketWbotBaileys_1 = __importDefault(require(o(0x16d) + o(0x183) + 'ys')), Message_1 = __importDefault(require(o(0x17d) + o(0x177))), GetWbotMessage = async (c, d) => {
        const q = n, r = n, e = {
                'FkkSA': function (i) {
                    return i();
                },
                'oHIJi': q(0x174) + r(0x169) + q(0x17b) + q(0x178) + r(0x160),
                'dGQfy': r(0x181) + r(0x163)
            }, f = await (0x99b + -0x3 * 0x7de + 0xdff, GetTicketWbotBaileys_1[q(0x165)])(c);
        let g = -0x14 * -0x5b + 0xe20 + -0x1528;
        const h = async () => {
            const s = r, t = q, i = await Message_1[s(0x165)][t(0x176)](d);
            return i;
        };
        try {
            const i = await e[r(0x172)](h);
            if (!i)
                throw new Error(e[r(0x167)]);
            return i;
        } catch (j) {
            console[r(0x16f)](j);
            throw new AppError_1[(r(0x165))](e[q(0x179)]);
        }
    };
exports[n(0x161) + o(0x16c)] = GetWbotMessage, exports[o(0x165)] = exports[o(0x161) + n(0x16c)];