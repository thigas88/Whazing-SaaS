'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1ed)) / (-0x8 * 0x1d0 + -0x1bd9 * 0x1 + 0x2a5a) * (parseInt(r(0x1e7)) / (0xc7a * -0x1 + 0xb6 + -0x89 * -0x16)) + -parseInt(q(0x1e3)) / (-0x1a1 * -0x1 + 0x44 * 0x15 + -0x732) * (-parseInt(r(0x1db)) / (-0xc2 * -0x11 + -0x248f + 0x17b1 * 0x1)) + parseInt(r(0x1f9)) / (-0x8 + -0x1f73 * -0x1 + 0xfb3 * -0x2) + parseInt(r(0x1eb)) / (-0x1073 * 0x1 + -0x1 * 0x1d69 + 0x16f1 * 0x2) * (parseInt(r(0x1f3)) / (0x1d1e + 0x9c8 * -0x3 + 0x41)) + -parseInt(r(0x1ea)) / (0x47 * 0x69 + -0x4a9 * -0x3 + -0x2b12) * (parseInt(q(0x1f5)) / (0x1195 * 0x2 + -0x2013 + -0x30e)) + parseInt(q(0x1fc)) / (-0x1 * 0x35e + -0xa4 * 0x3 + -0x3e * -0x16) * (-parseInt(r(0x1fb)) / (0x1e73 * -0x1 + 0x3 * 0x153 + 0x1a85)) + -parseInt(q(0x1fe)) / (-0x245e + -0x1027 * 0x1 + 0x3491);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x725f + -0xd7c22 + -0x1 * -0x14e8f0));
function a() {
    const x = [
        '498fKwKdc',
        '../errors/',
        '503dTndus',
        'value',
        'lSRMj',
        'WRzax',
        'erty',
        'type',
        '75215auiTzv',
        'tenantId',
        '25416hFelXf',
        'default',
        '__importDe',
        'ERR_NO_DEF',
        '686715uTmnhP',
        'awbZR',
        '4764727KxoRUu',
        '20SFQqdb',
        'defineProp',
        '8781912DnnAtH',
        '1568408UPvpKo',
        'AppError',
        'CONNECTED',
        'Whatsapp',
        'findOne',
        'status',
        'whatsapp',
        'where',
        '6ffufYi',
        '../models/',
        'fault',
        '__esModule',
        '1274wpNpCc',
        '_WAPP_FOUN',
        'QRUlG',
        '56pMchDq'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdbd + -0x7ab + 0x5 * 0x4a7);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1f7) + t(0x1e5)] || function (c) {
    const u = t;
    return c && c[u(0x1e6)] ? c : { 'default': c };
};
const k = {};
k[t(0x1ee)] = !![], Object[t(0x1fd) + s(0x1f1)](exports, s(0x1e6), k);
const AppError_1 = __importDefault(require(s(0x1ec) + t(0x1dc))), Whatsapp_1 = __importDefault(require(s(0x1e4) + s(0x1de))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0x1ef)] = v(0x1dd), h[w(0x1f0)] = v(0x1e1), h[v(0x1e9)] = function (o, p) {
            return o || p;
        }, h[v(0x1fa)] = w(0x1f8) + w(0x1e8) + 'D';
        const i = h, j = {};
        j[v(0x1f4)] = f, j[w(0x1e0)] = i[v(0x1ef)];
        const l = j;
        g ? l['id'] = g : l[v(0x1f2)] = i[v(0x1f0)];
        const m = {};
        m[w(0x1e2)] = l;
        const n = await Whatsapp_1[v(0x1f6)][v(0x1df)](m);
        if (i[w(0x1e9)](!n, !f))
            throw new AppError_1[(v(0x1f6))](i[w(0x1fa)]);
        return n;
    };
exports[s(0x1f6)] = GetDefaultWhatsApp;