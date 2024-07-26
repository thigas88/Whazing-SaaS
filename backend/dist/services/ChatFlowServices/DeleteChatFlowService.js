'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25f5 + 0x1407 + 0x137a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x19c)) / (0x17d2 + -0x52d * -0x1 + -0x1 * 0x1cfe) + parseInt(s(0x1a5)) / (-0x8fe + 0x1 * 0x1e23 + -0x305 * 0x7) * (parseInt(r(0x1a4)) / (0x9 * -0x43d + 0x1dda + 0x84e * 0x1)) + parseInt(r(0x18c)) / (0xd85 + 0x2 * 0x4a0 + 0x16c1 * -0x1) * (parseInt(s(0x19b)) / (-0xd1 * -0x13 + -0x201b + 0x109d)) + -parseInt(s(0x1a1)) / (0x63c + -0x32 * -0xa5 + -0xcd * 0x30) * (-parseInt(s(0x1aa)) / (-0x1ea6 * -0x1 + 0x4 * -0x869 + 0x1 * 0x305)) + -parseInt(s(0x1ab)) / (0x203d + 0x1 * -0x224b + 0xb2 * 0x3) * (parseInt(s(0x197)) / (-0x1316 + -0x12d * 0x1 + 0x144c)) + parseInt(s(0x1b2)) / (0xc47 * 0x3 + 0x132d + -0x48 * 0xc7) * (-parseInt(r(0x1b0)) / (0xa3 + -0x1090 + 0xff8)) + parseInt(r(0x19a)) / (-0x2de + -0x853 + 0xb3d) * (parseInt(s(0x1a9)) / (-0x137 * -0x2 + 0x1335 + -0x1596));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x30c07 + -0xe4d0 + 0x81221));
var __importDefault = this && this[t(0x1ad) + t(0x192)] || function (c) {
    const v = u;
    return c && c[v(0x1af)] ? c : { 'default': c };
};
const k = {};
k[t(0x18d)] = !![], Object[t(0x1a8) + u(0x1a6)](exports, u(0x1af), k);
function a() {
    const y = [
        'findOne',
        '769996MNPzYv',
        'value',
        'isActive',
        'util',
        'default',
        'tenantId',
        'fault',
        'ls/ChatFlo',
        'promisify',
        'QKyFr',
        'isDeleted',
        '7902OUOWBm',
        '../../mode',
        'HfbGz',
        '69276bMuYDE',
        '5aHgXrt',
        '483391hoHNHC',
        'ERR_NO_CHA',
        'writeFile',
        'where',
        'rs/AppErro',
        '11046sCOYfW',
        'update',
        'zhaoT',
        '513699SIQZrv',
        '6cEVlQn',
        'erty',
        '../../erro',
        'defineProp',
        '351nqIsoG',
        '889WoNgTG',
        '1512ABfwST',
        'reload',
        '__importDe',
        'T_FLOW_FOU',
        '__esModule',
        '1793xyfxZe',
        'attributes',
        '10790JoCKMf'
    ];
    a = function () {
        return y;
    };
    return a();
}
const util_1 = require(t(0x18f)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x198) + t(0x193) + 'w')), AppError_1 = __importDefault(require(t(0x1a7) + t(0x1a0) + 'r')), writeFileAsync = (-0xdb3 + -0x35 * 0x53 + 0x1ee2, util_1[t(0x194)])(fs_1[t(0x19e)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = u, x = t, j = {};
        j[w(0x1a3)] = w(0x19d) + x(0x1ae) + 'ND', j[w(0x195)] = x(0x18e), j[x(0x199)] = x(0x196);
        const l = j, m = {};
        m['id'] = h, m[x(0x191)] = i;
        const n = {};
        n[w(0x19f)] = m;
        const o = await ChatFlow_1[x(0x190)][w(0x1b3)](n);
        if (!o)
            throw new AppError_1[(w(0x190))](l[x(0x1a3)], -0xfeb + -0x2 * 0xea7 + 0x2ecd);
        const p = {};
        p[w(0x18e)] = ![], p[w(0x196)] = !![], await o[w(0x1a2)](p);
        const q = {};
        q[x(0x1b1)] = [
            l[x(0x195)],
            l[x(0x199)]
        ], await o[x(0x1ac)](q);
    };
exports[u(0x190)] = DeleteChatFlowService;