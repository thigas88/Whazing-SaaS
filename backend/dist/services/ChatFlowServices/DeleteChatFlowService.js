'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f10 + -0x17f2 + 0x295 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1f4)) / (0x16 * -0x29 + -0xb46 + 0xecd) * (parseInt(r(0x213)) / (0x3 * 0xa1 + 0x480 * 0x3 + -0xf61)) + -parseInt(s(0x214)) / (0x12f7 + 0x1e34 + -0x478 * 0xb) + -parseInt(r(0x20a)) / (0x11b1 + 0x3fa * 0x6 + -0x2989) + -parseInt(s(0x204)) / (-0x2e * 0xd5 + 0xbe * 0xd + -0x1ca5 * -0x1) + parseInt(r(0x201)) / (0x2699 + -0x8c6 + -0x1dcd * 0x1) * (-parseInt(r(0x20d)) / (0x309 + 0x15bb + -0x18bd)) + -parseInt(r(0x216)) / (0x1f1c + -0xc7 * 0x22 + -0x4a6 * 0x1) + parseInt(r(0x206)) / (-0x1e58 + 0x5d0 + -0x1891 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbd237 + -0x5ebb3 + 0x1a1771));
function a() {
    const y = [
        'reload',
        '__esModule',
        'isDeleted',
        'isActive',
        '../../erro',
        'defineProp',
        'value',
        'rs/AppErro',
        '234ougXkO',
        'attributes',
        'findOne',
        '3733655WBurPy',
        'default',
        '47043135jjGpXx',
        'promisify',
        'fault',
        'wKXXF',
        '2955216FMMGQQ',
        'erty',
        'T_FLOW_FOU',
        '99855RZqSbc',
        '__importDe',
        'iapRy',
        'tenantId',
        'lcuAA',
        'writeFile',
        '2023174RbObHH',
        '2878932EGwiPi',
        'ERR_NO_CHA',
        '5333656ihUNwS',
        'ls/ChatFlo',
        '1qCBJTK',
        'update',
        'where',
        '../../mode',
        'util'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x20e) + t(0x208)] || function (c) {
    const v = t;
    return c && c[v(0x1fa)] ? c : { 'default': c };
};
const k = {};
k[u(0x1ff)] = !![], Object[t(0x1fe) + t(0x20b)](exports, t(0x1fa), k);
const util_1 = require(u(0x1f8)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0x1f7) + t(0x217) + 'w')), AppError_1 = __importDefault(require(u(0x1fd) + u(0x200) + 'r')), writeFileAsync = (0x1291 + 0x1 * 0xc82 + 0xd7 * -0x25, util_1[u(0x207)])(fs_1[u(0x212)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x209)] = x(0x215) + x(0x20c) + 'ND', j[x(0x211)] = x(0x1fc), j[x(0x20f)] = w(0x1fb);
        const l = j, m = {};
        m['id'] = h, m[w(0x210)] = i;
        const n = {};
        n[w(0x1f6)] = m;
        const o = await ChatFlow_1[w(0x205)][x(0x203)](n);
        if (!o)
            throw new AppError_1[(x(0x205))](l[w(0x209)], -0x2 * -0x3d9 + -0xa39 + 0x41b);
        const p = {};
        p[x(0x1fc)] = ![], p[w(0x1fb)] = !![], await o[x(0x1f5)](p);
        const q = {};
        q[w(0x202)] = [
            l[x(0x211)],
            l[w(0x20f)]
        ], await o[w(0x1f9)](q);
    };
exports[t(0x205)] = DeleteChatFlowService;