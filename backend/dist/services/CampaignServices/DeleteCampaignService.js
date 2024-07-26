'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd58 + -0x182c + -0xc6b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'ls/Campaig',
        '4521864ULhnaL',
        'value',
        'GN_NOT_IN_',
        'ENDING',
        'ATE_CAMPAI',
        'erty',
        '252640SKONeA',
        '../../erro',
        '13816OeWHzD',
        '__importDe',
        'where',
        'PAIGN_FOUN',
        '6tbgDeG',
        '../../mode',
        'rs/AppErro',
        'status',
        'dBldg',
        'ERR_NO_CAM',
        'destroy',
        '6430482TFtaWd',
        'CANCELED_P',
        'fault',
        '6TVlmoS',
        'qcIwU',
        'TcDHz',
        'XISTS',
        '5110lyXZWI',
        'utqMC',
        '6388645kHuBTp',
        'canceled',
        'default',
        '957lwnbTE',
        'ERROR_CAMP',
        'iAfeb',
        'tenantId',
        'findOne',
        '670782UgqfKl',
        'ERR_NO_UPD',
        'qDgob',
        'pending',
        'LMJUc',
        '97380haPFOX',
        'AIGN_NOT_E',
        '__esModule',
        'defineProp'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1b9)) / (-0x1dd4 * 0x1 + 0x2244 + 0x46f * -0x1) + -parseInt(q(0x1bf)) / (0x92c + -0xdf1 * 0x2 + -0x2 * -0x95c) * (parseInt(p(0x1a9)) / (-0x1de0 + 0xb9c * -0x1 + 0xdd5 * 0x3)) + parseInt(q(0x1b3)) / (-0x17e7 * 0x1 + -0x1469 + -0x1 * -0x2c54) + parseInt(q(0x1a1)) / (-0x9 * -0x31a + -0x8d7 * 0x3 + -0x16 * 0x10) * (-parseInt(q(0x19b)) / (0x1c * -0xd + 0x34d + -0x5f * 0x5)) + -parseInt(p(0x19f)) / (0x2615 + -0x1 * 0x1286 + -0x1388) * (-parseInt(p(0x1bb)) / (-0x2383 + 0x25aa + -0x1 * 0x21f)) + -parseInt(q(0x198)) / (-0xd4a + -0x125 * -0x1f + -0x1628) + -parseInt(q(0x1ae)) / (-0x15f4 + 0x29 * 0x73 + 0x393) * (-parseInt(q(0x1a4)) / (0x25d6 + 0x24db + -0x4aa6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18bfa0 + -0x1141f1 + 0x2 * 0x1b51ff));
var __importDefault = this && this[r(0x1bc) + r(0x19a)] || function (c) {
    const t = s;
    return c && c[t(0x1b0)] ? c : { 'default': c };
};
const k = {};
k[r(0x1b4)] = !![], Object[s(0x1b1) + r(0x1b8)](exports, s(0x1b0), k);
const Campaign_1 = __importDefault(require(r(0x1c0) + s(0x1b2) + 'n')), AppError_1 = __importDefault(require(r(0x1ba) + s(0x1c1) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x19d)] = u(0x1c4) + u(0x1be) + 'D', h[u(0x1ab)] = function (n, o) {
            return n !== o;
        }, h[u(0x19c)] = v(0x1ac), h[v(0x1a0)] = function (n, o) {
            return n !== o;
        }, h[v(0x1a6)] = u(0x1a2), h[v(0x1ad)] = u(0x1aa) + u(0x1b7) + v(0x1b5) + v(0x199) + v(0x1b6), h[v(0x1c3)] = u(0x1a5) + u(0x1af) + v(0x19e);
        const i = h, j = {};
        j['id'] = f, j[v(0x1a7)] = g;
        const l = {};
        l[u(0x1bd)] = j;
        const m = await Campaign_1[v(0x1a3)][u(0x1a8)](l);
        if (!m)
            throw new AppError_1[(v(0x1a3))](i[v(0x19d)], 0x1b36 + -0x1727 + -0x27b);
        if (i[u(0x1ab)](m?.[u(0x1c2)], i[u(0x19c)]) && i[v(0x1a0)](m?.[u(0x1c2)], i[v(0x1a6)]))
            throw new AppError_1[(u(0x1a3))](i[u(0x1ad)], -0x29 * -0xb5 + 0x5b7 + -0x14 * 0x1a8);
        try {
            await m[u(0x197)]();
        } catch (n) {
            throw new AppError_1[(v(0x1a3))](i[v(0x1c3)], -0x5 * 0x5 + 0x1123 + -0x7bb * 0x2);
        }
    };
exports[r(0x1a3)] = DeleteCampaignService;