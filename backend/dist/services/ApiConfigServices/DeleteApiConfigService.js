'use strict';
const p = b, q = b;
function a() {
    const u = [
        '7620348RywROb',
        'tenantId',
        'OUND',
        '__esModule',
        '959289JXbvfy',
        '1660022foSTVI',
        '../../mode',
        'value',
        '23665ekPVux',
        'default',
        '372753rXcVZq',
        'defineProp',
        '2aMgndd',
        '152DQwAxO',
        '__importDe',
        '804GJhyQz',
        'ERR_API_CO',
        'where',
        'NFIG_NOT_F',
        'rs/AppErro',
        '5067615lfamho',
        'findOne',
        'yjSnf',
        'destroy',
        'fault',
        'erty',
        '../../erro',
        'ls/ApiConf',
        '7522660hyFOqw'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1fa)) / (-0x553 + 0x1 * 0x7a3 + -0x24f) * (-parseInt(o(0x1f3)) / (0x4d6 + 0xbff + -0x10d3)) + parseInt(n(0x1f2)) / (-0x1ce1 * -0x1 + 0x239d + -0x407b) + parseInt(o(0x1ee)) / (0x3 * 0x710 + 0x16ad + -0x2bd9) + parseInt(o(0x1f6)) / (-0x8 * -0x30 + -0xd14 + -0xb99 * -0x1) * (-parseInt(o(0x1fd)) / (0xbc8 + 0x4d2 + -0x1094)) + -parseInt(o(0x202)) / (0x1c5f + 0x1c3f + -0x525 * 0xb) + -parseInt(n(0x1fb)) / (-0xfc1 + 0x955 + 0x19d * 0x4) * (parseInt(o(0x1f8)) / (-0x23dc + -0xb * 0x235 + 0x4 * 0xf0b)) + -parseInt(n(0x1ed)) / (0x10be * -0x2 + 0x1d * 0x94 + 0x8f * 0x1e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x150742 + 0x1a7a9 * 0x1 + -0x79d6f));
var __importDefault = this && this[p(0x1fc) + q(0x206)] || function (c) {
    const r = p;
    return c && c[r(0x1f1)] ? c : { 'default': c };
};
const k = {};
k[q(0x1f5)] = !![], Object[p(0x1f9) + q(0x207)](exports, p(0x1f1), k);
const AppError_1 = __importDefault(require(p(0x208) + q(0x201) + 'r')), ApiConfig_1 = __importDefault(require(q(0x1f4) + q(0x209) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = q, h = {};
        h[s(0x204)] = s(0x1fe) + t(0x200) + s(0x1f0);
        const i = h, j = {};
        j['id'] = f, j[s(0x1ef)] = g;
        const l = {};
        l[s(0x1ff)] = j;
        const m = await ApiConfig_1[s(0x1f7)][t(0x203)](l);
        if (!m)
            throw new AppError_1[(s(0x1f7))](i[t(0x204)], 0x21 + 0x13 * -0x1d6 + 0x1 * 0x2455);
        await m[t(0x205)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x63d + -0xa0e + -0x1ea * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x1f7)] = DeleteApiConfigService;