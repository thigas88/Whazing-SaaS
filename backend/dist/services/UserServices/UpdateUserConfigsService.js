'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1ed)) / (-0x2155 + 0xb3 * -0x13 + 0x23 * 0x155) * (-parseInt(p(0x1de)) / (-0x18a5 * 0x1 + 0x5 * 0x5b9 + 0x1 * -0x3f6)) + -parseInt(p(0x1e4)) / (-0x12b5 + -0x237c + 0x3634) * (parseInt(o(0x1dc)) / (0x3c * -0x83 + 0xbf2 + 0x12c6)) + parseInt(o(0x1e8)) / (0x254b + 0x5b8 + 0x1 * -0x2afe) + -parseInt(o(0x1cf)) / (-0x1 * 0x1857 + -0xb98 * 0x2 + 0x2f8d) * (parseInt(p(0x1e7)) / (0x1 * -0xcd1 + -0xc83 * 0x1 + 0x195b * 0x1)) + parseInt(o(0x1df)) / (0x2014 + 0x1fcb + -0x3fd7) * (parseInt(p(0x1db)) / (0xe52 + 0x404 + -0x124d * 0x1)) + -parseInt(p(0x1d2)) / (-0x2551 + -0x130a * 0x2 + -0x3 * -0x1925) * (-parseInt(o(0x1d5)) / (-0x105 * -0x24 + -0x1b27 * -0x1 + -0x3fd0)) + parseInt(p(0x1ef)) / (-0x55d * 0x1 + -0x8dd * -0x4 + -0x1e0b) * (-parseInt(o(0x1e6)) / (0xfe3 + 0x34b + -0x1321));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x167619 + -0x107ef4 + 0x6 * 0x8a749));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17 * -0xd + 0x1 * -0xdc7 + 0xe66);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'rs/AppErro',
        'where',
        'mdhCe',
        'name',
        '81181zhPWrh',
        'R_FOUND',
        '36LsLyzF',
        'ls/User',
        'defineProp',
        'Ahqsc',
        'configs',
        'ERR_NO_USE',
        '__esModule',
        '__importDe',
        '4884lPSRMn',
        'wsfpu',
        'value',
        '70DtaGbb',
        'GASGK',
        'update',
        '640783gppmrJ',
        'profile',
        'fault',
        'tenantId',
        'attributes',
        'findOne',
        '12837303UpFDlh',
        '4YdaVKz',
        'email',
        '2bKJAwV',
        '8vvTTeH',
        'default',
        'erty',
        'VeDXJ',
        '../../mode',
        '152682aRfeeV',
        '../../erro',
        '9204663iUqbQm',
        '3647AyueJS',
        '7666995dhAenL'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1ce) + r(0x1d7)] || function (c) {
    const s = r;
    return c && c[s(0x1cd)] ? c : { 'default': c };
};
const k = {};
k[q(0x1d1)] = !![], Object[r(0x1f1) + q(0x1e1)](exports, q(0x1cd), k);
const AppError_1 = __importDefault(require(q(0x1e5) + r(0x1e9) + 'r')), User_1 = __importDefault(require(r(0x1e3) + r(0x1f0))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x1e2)] = u(0x1ec), i[t(0x1d0)] = u(0x1dd), i[u(0x1d3)] = t(0x1d6), i[t(0x1eb)] = t(0x1cb), i[t(0x1ca)] = u(0x1cc) + u(0x1ee);
        const j = i, l = {};
        l['id'] = g, l[t(0x1d8)] = h;
        const m = {};
        m[u(0x1ea)] = l, m[u(0x1d9)] = [
            j[u(0x1e2)],
            'id',
            j[u(0x1d0)],
            j[u(0x1d3)],
            j[t(0x1eb)]
        ];
        const n = await User_1[t(0x1e0)][t(0x1da)](m);
        if (!n)
            throw new AppError_1[(u(0x1e0))](j[u(0x1ca)], -0x2c1 + 0x8 * 0x248 + -0xdeb);
        await n[u(0x1d4)]({
            'configs': {
                ...n[u(0x1cb)],
                ...f
            }
        });
    };
exports[r(0x1e0)] = UpdateUserConfigsService;