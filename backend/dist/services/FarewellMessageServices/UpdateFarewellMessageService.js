'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xd5)) / (-0x363 + 0x1da4 + -0x28 * 0xa8) * (parseInt(r(0xe2)) / (0x207c + 0x365 * 0x2 + -0x2 * 0x13a2)) + -parseInt(q(0xe0)) / (0x82e * 0x4 + -0x8eb + -0x17ca) * (parseInt(q(0xd6)) / (0x19de + 0x13e6 + 0x8 * -0x5b8)) + -parseInt(r(0xd0)) / (0xa63 * 0x1 + 0x63d * -0x6 + -0x362 * -0x8) * (-parseInt(r(0xc7)) / (-0x391 * 0x1 + 0x22ee + 0x1 * -0x1f57)) + -parseInt(q(0xcb)) / (-0x437 * -0x1 + 0x1fa0 + -0x23d0) + parseInt(r(0xc6)) / (0x26e4 + 0x1750 + 0x1 * -0x3e2c) * (-parseInt(q(0xc5)) / (-0x2523 + 0x10f + -0x1 * -0x241d)) + parseInt(r(0xce)) / (0x2342 + -0x13f0 * 0x1 + -0x2 * 0x7a4) * (-parseInt(q(0xca)) / (-0x33b * 0xc + 0x3d4 + 0x2d * 0xc7)) + parseInt(q(0xcc)) / (-0xe3e + -0xb0 * 0x1f + 0x239a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7466d * -0x3 + -0x8 * 0x3c4c + 0x242bc8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ae5 + 0x13 * 0x18f + -0x1bdf * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xcf) + s(0xd9)] || function (c) {
    const u = s;
    return c && c[u(0xd2)] ? c : { 'default': c };
};
function a() {
    const x = [
        'save',
        'ls/Farewel',
        'Mensagem\x20d',
        'a\x20não\x20enco',
        '3559224gWZlZr',
        'value',
        '5144LMOThW',
        'erty',
        'tenantId',
        'INLMd',
        '9PELleQ',
        '6161896hgbLtJ',
        '708wqekVZ',
        '../../mode',
        'e\x20despedid',
        '2164866WSYlrI',
        '10680817sNLmGw',
        '48787980lnxOfy',
        'where',
        '10sPDRDB',
        '__importDe',
        '54415mJhyYf',
        'ntrada.',
        '__esModule',
        'lMessage',
        'defineProp',
        '332nsGsTX',
        '4cqQJrs',
        'global',
        'message',
        'fault',
        'findOne',
        'default'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
k[t(0xe1)] = !![], Object[t(0xd4) + s(0xe3)](exports, t(0xd2), k);
const FarewellMessage_1 = __importDefault(require(s(0xc8) + t(0xdd) + t(0xd3))), UpdateFarewellMessageService = async ({
        id: f,
        tenantId: g,
        userId: h,
        message: i,
        global: j
    }) => {
        const v = t, w = t, l = {};
        l[v(0xc4)] = v(0xde) + v(0xc9) + w(0xdf) + w(0xd1);
        const m = l, n = {};
        n['id'] = f, n[w(0xe4)] = g;
        const o = {};
        o[v(0xcd)] = n;
        const p = await FarewellMessage_1[w(0xdb)][v(0xda)](o);
        if (!p)
            throw new Error(m[v(0xc4)]);
        return p[v(0xd8)] = i, p[v(0xd7)] = j, await p[w(0xdc)](), p;
    };
exports[s(0xdb)] = UpdateFarewellMessageService;