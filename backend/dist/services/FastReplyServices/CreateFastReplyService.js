'use strict';
const n = b, o = b;
function a() {
    const s = [
        '7894530eizcIo',
        '9LhwBnF',
        '318tvGtZN',
        '../../mode',
        'media',
        'erty',
        'value',
        '392DAeikC',
        'defineProp',
        '1159212EzqyiW',
        'fault',
        'create',
        'tenantId',
        'message',
        'userId',
        'key',
        '6651333ifyTPu',
        '2423378Kdbyrm',
        '__esModule',
        'default',
        '__importDe',
        '897860vBiWpE',
        '117265CPWner',
        '112136ybXAeg',
        'ls/FastRep'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1a2)) / (-0x38e + 0x21e9 + -0x1e5a) + parseInt(l(0x1aa)) / (-0x19d0 + -0x167d + 0x304f) + parseInt(l(0x19a)) / (0x4 * -0x833 + 0x11 * -0x1a3 + 0x3ca2) * (-parseInt(m(0x1ae)) / (0x1202 + 0x1 * 0x421 + -0x161f)) + parseInt(l(0x1af)) / (0x1992 + -0x21a3 + 0x816) * (parseInt(l(0x19b)) / (0xac4 + -0x5 * 0x5fb + 0x3 * 0x663)) + parseInt(m(0x1a0)) / (0x2146 + -0x1b * 0x11 + -0x1f74) * (-parseInt(m(0x1b0)) / (-0x607 * 0x3 + 0x12bb + -0x9e)) + -parseInt(m(0x1a9)) / (0xe7c + -0x2b * -0xc5 + -0x2f8a) + -parseInt(l(0x199)) / (-0x1 * -0x26dc + -0x232 * -0x7 + -0x3630);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x5c7f1 + 0xebac6 + -0xaf136 * 0x1));
var __importDefault = this && this[n(0x1ad) + n(0x1a3)] || function (c) {
    const p = n;
    return c && c[p(0x1ab)] ? c : { 'default': c };
};
const k = {};
k[o(0x19f)] = !![], Object[o(0x1a1) + n(0x19e)](exports, n(0x1ab), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e9e + 0x3 * 0x145 + -0x20d4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const FastReply_1 = __importDefault(require(n(0x19c) + o(0x1b1) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g,
        media: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x1a8)] = d, i[r(0x1a6)] = e, i[q(0x1a7)] = f, i[r(0x1a5)] = g, i[q(0x19d)] = h;
        const j = await FastReply_1[r(0x1ac)][r(0x1a4)](i);
        return j;
    };
exports[n(0x1ac)] = CreateFastReplyService;