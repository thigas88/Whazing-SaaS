'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x165)) / (0x20ec + 0x1fc5 + -0x45 * 0xf0) + parseInt(w(0x14e)) / (0x13 * 0x127 + 0x1 * -0x973 + -0xc70) * (parseInt(x(0x14f)) / (-0x6bf * 0x2 + 0x3fa * -0x2 + 0x1575 * 0x1)) + -parseInt(w(0x150)) / (0x1724 + 0x1828 + 0x2 * -0x17a4) + parseInt(x(0x15b)) / (-0x1dfc + -0x22cf + 0x40d0) * (-parseInt(x(0x175)) / (0x1c1 * -0xb + -0x1cab + -0x25 * -0x14c)) + parseInt(x(0x156)) / (0x1 * -0x4c1 + -0xee8 + 0x13b0) * (parseInt(w(0x167)) / (0x260e + -0x2139 + 0x1 * -0x4cd)) + -parseInt(w(0x173)) / (0x1613 + -0x21aa + 0xba0) * (parseInt(x(0x16d)) / (0x1277 + -0x102e + -0x23f)) + parseInt(x(0x174)) / (-0x117e + -0x2b * 0x61 + 0x875 * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x38b3 * 0x1d + 0x20af * 0x3d + -0x63c0a));
var __importDefault = this && this[y(0x172) + y(0x153)] || function (c) {
    const A = y;
    return c && c[A(0x159)] ? c : { 'default': c };
};
function a() {
    const D = [
        'listen',
        'status',
        '54IoDhTN',
        '28965SvpjUf',
        '3029084xXNNbH',
        'defineProp',
        'ogger',
        'fault',
        '\x20found',
        'erty',
        '15897nqlikA',
        'logger',
        'params',
        '__esModule',
        'tener',
        '5755fgLOhG',
        's/WbotNoti',
        'MessageLis',
        'json',
        'iMcOr',
        'ficame/Hub',
        'default',
        'value',
        'number',
        'findOne',
        '186535xzGOKg',
        '../models/',
        '872eSKfUY',
        'dFFyv',
        'files',
        'Whatsapp',
        '../service',
        'hannel\x20not',
        '6743600sNKFYG',
        'Webhook\x20re',
        '../utils/l',
        'ceived',
        'message',
        '__importDe',
        '9ENplIF',
        '23137807lxMVNh',
        '2454EOvnto',
        'where',
        'body',
        'info',
        'Whatsapp\x20c'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43 * -0x8 + -0x18ce + -0x7 * -0x36e);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x162)] = !![], Object[z(0x151) + y(0x155)](exports, y(0x159), k), exports[z(0x14c)] = void (0x720 * 0x3 + 0x1 * -0x1182 + -0x3de);
const Whatsapp_1 = __importDefault(require(z(0x166) + y(0x16a))), HubMessageListener_1 = __importDefault(require(z(0x16b) + y(0x15c) + z(0x160) + y(0x15d) + z(0x15a))), logger_1 = require(z(0x16f) + z(0x152)), listen = async (i, j) => {
        const B = y, C = y, l = {};
        l[B(0x15f)] = B(0x16e) + C(0x170), l[C(0x168)] = C(0x179) + B(0x16c) + B(0x154);
        const m = l;
        logger_1[B(0x157)][B(0x178)](m[B(0x15f)]);
        const n = i[B(0x169)], {number: o} = i[B(0x158)], p = {};
        p[C(0x163)] = o;
        const q = {};
        q[B(0x176)] = p;
        const r = await Whatsapp_1[B(0x161)][C(0x164)](q);
        if (!r) {
            const s = {};
            return s[C(0x171)] = m[C(0x168)], j[C(0x14d)](-0x461 * -0x2 + -0x1 * -0x2051 + -0x1 * 0x277f)[B(0x15e)](s);
        }
        try {
            await (-0x16f0 + -0x1 * 0x241 + 0x1931, HubMessageListener_1[C(0x161)])(i[B(0x177)], r, n);
            const t = {};
            return t[B(0x171)] = m[C(0x15f)], j[C(0x14d)](0x1fbb + -0x211b + 0x228)[B(0x15e)](t);
        } catch (u) {
            const v = {};
            return v[B(0x171)] = u, j[B(0x14d)](0xee2 + -0x28 * -0x9 + -0xeba)[C(0x15e)](v);
        }
    };
exports[z(0x14c)] = listen;