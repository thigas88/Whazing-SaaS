'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1f0)) / (-0x1 * -0x49f + -0x14 * 0x177 + -0x1a * -0xf3) * (parseInt(r(0x200)) / (-0x7ac + -0x31a * 0x7 + 0x1d64)) + -parseInt(q(0x1fe)) / (0x10ec + 0x4a + -0x1 * 0x1133) * (-parseInt(r(0x202)) / (-0x22b4 + -0x1 * 0x48b + -0x1 * -0x2743)) + parseInt(q(0x209)) / (-0x1 * -0x200d + 0xc82 * -0x2 + -0x704) * (parseInt(q(0x1f4)) / (-0xa7b + -0x181e + -0x229f * -0x1)) + -parseInt(r(0x1ee)) / (-0x1 * 0xcfe + -0xb19 * 0x1 + 0x3 * 0x80a) * (-parseInt(q(0x20b)) / (-0xb43 * 0x2 + 0x1315 + 0x379)) + -parseInt(q(0x203)) / (-0x2479 + -0x113e + -0x8 * -0x6b8) * (-parseInt(q(0x205)) / (-0x103e + -0x2 * -0xf82 + 0xa4 * -0x17)) + parseInt(q(0x206)) / (0x1 * 0xa16 + -0xa * -0x351 + -0x2b35) + parseInt(r(0x1f9)) / (0x1765 * 0x1 + -0x207e + 0x1 * 0x925) * (-parseInt(q(0x1ff)) / (-0x250 + 0x1 * -0xdde + 0x103b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2a * 0x2c77 + 0xc1ef6 + -0x637f3 * 0x2));
var __importDefault = this && this[s(0x208) + t(0x1fc)] || function (c) {
    const u = t;
    return c && c[u(0x201)] ? c : { 'default': c };
};
const k = {};
k[t(0x207)] = !![], Object[s(0x1f2) + t(0x1f7)](exports, s(0x201), k);
const AppError_1 = __importDefault(require(s(0x1f3) + s(0x20e) + 'r')), Plan_1 = __importDefault(require(s(0x1f6) + s(0x1f5))), UpdatePlanService = async e => {
        const v = s, w = t, f = {};
        f[v(0x1fb)] = w(0x1f1) + w(0x1f8);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x1ed)][w(0x1fa)](h);
        if (!o)
            throw new AppError_1[(w(0x1ed))](g[w(0x1fb)], -0x675 + -0x1 * 0x114d + 0x1956);
        const p = {};
        return p[v(0x20a)] = i, p[w(0x1fd)] = j, p[v(0x20d) + w(0x20c)] = l, p[w(0x207)] = m, p[v(0x1ef)] = n, await o[v(0x204)](p), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21b7 + 0x1eb6 + -0x4ee * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'N_FOUND',
        '626412gAIIOI',
        'findByPk',
        'qCRdQ',
        'fault',
        'maxUsers',
        '15IqDzzP',
        '689uARobq',
        '1802014KpIEvb',
        '__esModule',
        '202220EdYVYv',
        '1871019eFKPiU',
        'update',
        '30sTrDhV',
        '821832wCExBt',
        'value',
        '__importDe',
        '2829910RlJqrH',
        'name',
        '6446960frtCOY',
        'ions',
        'maxConnect',
        'rs/AppErro',
        'default',
        '7LnKGKy',
        'isPublic',
        '1kWNDpM',
        'ERR_NO_PLA',
        'defineProp',
        '../../erro',
        '6zupQVM',
        'ls/Plan',
        '../../mode',
        'erty'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[s(0x1ed)] = UpdatePlanService;